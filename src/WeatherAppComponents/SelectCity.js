import React from "react";
import cityList from "../assets/cities.json";

function SelectCity() {
  const options = cityList.List.map((city, index) => (
    <option key={city.CityCode} value={city.CityCode}>
      {city.CityName}
    </option>
  ));

  return (
    <React.Fragment>
      <div className="input-city">
        <select className="enter-city" id="selectCity">
          {options}
        </select>
        <button className="add-city" id="addCityButton">
          Add City
        </button>
      </div>
    </React.Fragment>
  );
}
export default SelectCity;
