import React, { useState, useEffect } from "react";
import { COLORS } from "./Constants.js";
import "../style/index.css";
import "../style/WeatherApp.css";
import "../style/CityData.css";
import jsonFileData from "./weather_app_assets/cities.json";
import CityMainDetails from "./CityDataComponents/CityMainDetails";
import Atmosphere from "./CityDataComponents/Atmosphere";
import TempMinMax from "./CityDataComponents/TempMinMax";
import WindPattern from "./CityDataComponents/WindPattern";
import FeelingCondition from "./CityDataComponents/FeelingCondition";
import SunRiseSunSet from "./CityDataComponents/SunRiseSunSet";

function CityData(props) {
  const { cityCode } = props;
  const cacheExpirationTime = process.env.REACT_APP_CACHE_EXPIRATION_TIME;

  // const cityCodeArray = jsonFileData.List.map((city) => city.CityCode);
  const cityCodeList = jsonFileData.List;

  // const [cityCodes, setCityCodes] = useState(cityCodeArray.slice(0, 5));
  const [cityCodes, setCityCodes] = useState(cityCodeList);

  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const cacheTimestampKey = "weatherData_Timestamp";
      const cacheTimestamps = JSON.parse(
        localStorage.getItem(cacheTimestampKey) || "{}"
      );
      const cityWeatherData = await Promise.all(
        cityCodes.map(async (city) => {
          const cityCode = city.CityCode;
          const cacheKey = `weatherData_${cityCode}`;
          const cacheTimestamp = cacheTimestamps[cityCode];
          const isCacheValid =
            cacheTimestamp && Date.now() - cacheTimestamp < cacheExpirationTime;
          if (isCacheValid) {
            return JSON.parse(localStorage.getItem(cacheKey));
          } else {
            const apiUrl = `${process.env.REACT_APP_API_URL}id=${cityCode}&APPID=${process.env.REACT_APP_API_ID}`;

            const response = await fetch(apiUrl);
            const data = await response.json();
            localStorage.setItem(cacheKey, JSON.stringify(data));
            cacheTimestamps[cityCode] = Date.now();
            localStorage.setItem(
              cacheTimestampKey,
              JSON.stringify(cacheTimestamps)
            );
            return data;
          }
        })
      );
      setWeatherData(cityWeatherData);
    };

    fetchData();
  }, []);

  // const handleCloseClick = (cityId) => {
  //   setCityCodes((cityCodes) => cityCodes.filter((city) => city != cityId));
  // };

  return weatherData.map((data, i) => (
    <div
      key={data.id}
      className="weather-wrapper"
      style={{ backgroundColor: COLORS[i] }}
    >
      <div className="city-top">
        <div className="city-top-left">
          <CityMainDetails weather={data} />
          <Atmosphere weather={data.weather[0]} />
        </div>
        <div className="city-top-right">
          <button
            className="close-button"
            id={data.id}
            // onClick={() => handleCloseClick(data.id)}
            style={{ backgroundColor: COLORS[i] }}
          >
            X
          </button>
          <TempMinMax weather={data.main} />
        </div>
      </div>
      <div className="city-bottom">
        <div className="city-bottom-left">
          <FeelingCondition weather={data} />
        </div>
        <div className="city-bottom-middle">
          <WindPattern weather={data.wind} />
        </div>
        <div className="city-bottom-right">
          <SunRiseSunSet weather={data} />
        </div>
      </div>
    </div>
  ));
}

export default CityData;
