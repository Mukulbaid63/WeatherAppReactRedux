import React from "react";
import "../styles/ForecastWeather.css";

const ForecastWeather = ({ data }) => {
  return (
    <div
      className="text-light m-1 my-2 d-flex justify-content-between"
      id="forecast"
      style={{ fontSize: "17px" }}
    >
      <div className="d-flex p-1 flex-column align-items-start">
        <div className="p-1">
          {" "}
          <i class="fas fa-wind"></i>
          <span className="px-2">{data.wind.speed} m/s</span>
        </div>
        <div className="p-1">
          <i class="fas fa-tint"></i>
          <span className="px-2">{data.main.humidity} %</span>
        </div>
        <div className="p-1 fw-bolder" style={{ textShadow: "2px 2px rgba(34, 33, 33, 0.6)",}}>{data.dt_txt}</div>
      </div>
      <div className="p-1 d-flex flex-column align-items-end">
        <div
          style={{
            fontSize: "40px",
            fontWeight: "500",
            textShadow: "2px 3px rgba(34, 33, 33, 0.6)"
          }}
        >
          {Math.round(data.main.temp)}°c
        </div>
        <div style={{fontSize:'23px'}}>{data.weather[0].main}</div>
      </div>
    </div>
  );
};

export default ForecastWeather;
