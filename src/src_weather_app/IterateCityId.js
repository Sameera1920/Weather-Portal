import React from "react";
import cityDataFromFile from "./assets/cities.json";
import CallApiData from "./CallApidata";

function IterateCityId() {
  const cityIdArray = cityDataFromFile.List;
  return (
    <>
      {cityIdArray.map((city, index) => (
        <CallApiData index={index} code={city.CityCode} />
      ))}
    </>
  );
}
export default IterateCityId;
