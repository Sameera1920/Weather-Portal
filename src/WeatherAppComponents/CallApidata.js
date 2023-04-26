import React, { useState, useEffect } from "react";
import DisplayCityData from "./DisplayCityData";

function CallApiData(props) {
  const { index, code } = props;
  const [data, setData] = useState(null);

  const cacheExpirationTime = process.env.REACT_APP_CACHE_EXPIRATION_TIME;

  useEffect(() => {
    const cacheTimestampKey = "weatherData_Timestamp";
    const cacheTimestamps = JSON.parse(
      localStorage.getItem(cacheTimestampKey) || "{}"
    );
    const cacheKey = `weatherData_${code}`;
    const cacheTimestamp = cacheTimestamps[code];
    const isCacheValid =
      cacheTimestamp && Date.now() - cacheTimestamp < cacheExpirationTime;
    if (isCacheValid) {
      setData(JSON.parse(localStorage.getItem(cacheKey)));
    } else {
      const apiUrl = `${process.env.REACT_APP_API_URL}id=${code}&APPID=${process.env.REACT_APP_API_ID}`;
      fetch(apiUrl)
        .then((response) => response.json())
        .then((responseData) => {
          setData(responseData);
          localStorage.setItem(cacheKey, JSON.stringify(responseData));
        });
      cacheTimestamps[code] = Date.now();
      localStorage.setItem(cacheTimestampKey, JSON.stringify(cacheTimestamps));
    }
  }, [code]);

  return <>{data && <DisplayCityData weatherData={data} index={index} />}</>;
}
export default CallApiData;
