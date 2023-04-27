import React from "react";

function WindPattern({ weather }) {
  return (
    <React.Fragment>
      <div className="wind-direction-image"></div>
      <div className="wind-condition">
        <div className="wind-speed>">{parseInt(weather.speed)}.0m/s</div>
        <div className="wind-direction-degree">{weather.deg} Degree</div>
      </div>
    </React.Fragment>
  );
}

export default WindPattern;
