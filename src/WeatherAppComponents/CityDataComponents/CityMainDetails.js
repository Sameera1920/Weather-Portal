import React from "react";

function CityMainDetails({ weather }) {
  function formatDateTime(unixTimestamp) {
    const formattedDateTime = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      month: "short",
      day: "2-digit",
    }).format((unixTimestamp - 19800) * 1000);

    return formattedDateTime;
  }
  return (
    <React.Fragment>
      <div className="city-name">
        {weather.name},{"  "}
        {weather.sys.country}
      </div>
      <div className="date-time">
        {formatDateTime(weather.dt + weather.timezone)}
      </div>
    </React.Fragment>
  );
}

export default CityMainDetails;
