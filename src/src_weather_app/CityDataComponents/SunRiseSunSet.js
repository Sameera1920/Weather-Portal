import React from "react";

function SunRiseSunSet({ weather }) {
  function calcTime(timestamp) {
    const formattedTime = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format((timestamp - 19800) * 1000);
    return formattedTime;
  }

  const sunRise = weather.sys["sunrise"] + weather.timezone;
  const sunSet = weather.sys["sunset"] + weather.timezone;

  return (
    <React.Fragment>
      <div className="sun-rise>">Sunrise: {calcTime(sunRise)}</div>
      <div className="sun-set>">Sunset: {calcTime(sunSet)}</div>
    </React.Fragment>
  );
}

export default SunRiseSunSet;
