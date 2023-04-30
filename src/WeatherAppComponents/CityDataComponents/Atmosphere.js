import React from "react";

function Atmosphere({ weather }) {
  const cloudIconUrl = `http://openweathermap.org/img/wn/${weather.icon}.png`;
  const altUrl = "../../assets/04d.png";

  return (
    <div className="atmosphere">
      <div className="atmosphere-image">
        <img className="atmosphere-image" src={cloudIconUrl} alt={altUrl} />
      </div>
      <div className="atmosphere-description">{weather.description}</div>
    </div>
  );
}

export default Atmosphere;
