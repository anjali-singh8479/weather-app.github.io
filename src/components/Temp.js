import React, { useEffect, useState } from "react";
import "./css/style.css";

export default function Temp() {
  const [loc, setloc] = useState("Jhansi");
  const [search, setsearch] = useState("Jhansi");
  let text = (event) => {
  
    setsearch(event.target.value);
  };
  useEffect (() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=c0322edb5fef75ebc033f4d313008939&units=metric`;
      const response= await fetch(url);
      const resJson= await response.json();
      setloc(resJson.main);
      
    };
    fetchApi();
   },[search]);
  return (
    <>
      <div className="temp-div">
        <input placeholder={search} className="input-temp" type="search" onChange={text} />
       {!loc ?(<p>No data found</p>):
       (
        <>
         <div className="info">
          <h2 className="location">
            <i className="fa-solid fa-street-view"></i>
            {search}
          </h2>
          <h1 className="degrees">{loc.temp}</h1>
          <h3 className="diff">{loc.temp_min} | {loc.temp_max}</h3>
        </div>
        </>
       )}
      </div>
    </>
  );
}
