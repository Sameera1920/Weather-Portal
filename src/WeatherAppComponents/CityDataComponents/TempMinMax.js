import React from "react";

function TempMinMax({ weather }) {
  function calcTemp(temp) {
    const tempCelcius = parseInt(temp - 273.15);
    return tempCelcius;
  }
  return (
    <React.Fragment>
      <p className="city-temp">{calcTemp(weather["temp"])} &deg;C</p>
      <p className="min-temp">
        Temp Min: {calcTemp(weather["temp_min"])} &deg;C
      </p>
      <p className="max-temp">
        Temp Max: {calcTemp(weather["temp_max"])} &deg;C
      </p>
    </React.Fragment>
  );
}

export default TempMinMax;
