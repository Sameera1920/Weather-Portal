import React from "react";

function FeelingCondition({ weather }) {
  return (
    <React.Fragment>
      <p className="pressure">Pressure: {weather.main.pressure}hPa</p>
      <p className="humidity">Humidity: {weather.main.humidity}%</p>
      <p className="visibility">Visibility: {weather.visibility}km</p>
    </React.Fragment>
  );
}
export default FeelingCondition;
