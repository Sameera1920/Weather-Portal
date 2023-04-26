import { COLORS } from "./Constants.js";
import "../style/CityData.css";
import CityMainDetails from "./CityDataComponents/CityMainDetails";
import Atmosphere from "./CityDataComponents/Atmosphere";
import TempMinMax from "./CityDataComponents/TempMinMax";
import WindPattern from "./CityDataComponents/WindPattern";
import FeelingCondition from "./CityDataComponents/FeelingCondition";
import SunRiseSunSet from "./CityDataComponents/SunRiseSunSet";

function DisplayCityData(props) {
  const { weatherData, index } = props;

  return (
    <div
      key={index}
      className="weather-wrapper"
      style={{ backgroundColor: COLORS[index] }}
    >
      <div className="city-top">
        <div className="city-top-left">
          <CityMainDetails weather={weatherData} />
          <Atmosphere weather={weatherData.weather[0]} />
        </div>
        <div className="city-top-right">
          <button
            className="close-button"
            id={weatherData.id}
            style={{ backgroundColor: COLORS[index] }}
          >
            X
          </button>
          <TempMinMax weather={weatherData.main} />
        </div>
      </div>
      <div className="city-bottom">
        <div className="city-bottom-left ">
          <FeelingCondition weather={weatherData} />
        </div>
        <div className="city-bottom-middle line">
          <WindPattern weather={weatherData.wind} />
        </div>
        <div className="city-bottom-right line">
          <SunRiseSunSet weather={weatherData} />
        </div>
      </div>
    </div>
  );
}

export default DisplayCityData;
