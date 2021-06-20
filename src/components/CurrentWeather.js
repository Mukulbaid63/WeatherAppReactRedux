import React from "react";

const CurrentWeather = ({ currentWeather }) => {
  let imgSrc = "./icons/" + currentWeather.weather[0].icon + ".png";
  return (
    <div className="text-light" style={{ fontFamily: "Montserrat" }}>
      <div className="d-flex center">
        <div
          className="fw-bold"
          style={{
            fontSize: "120px",
            textShadow: "2px 6px rgba(34, 33, 33, 0.6)",
          }}
        >
          {Math.round(currentWeather.main.temp)}°c
        </div>
        {/* <img
          src={require(`./icons/${currentWeather.weather[0].icon}.png`)}
          alt=""
          style={{ height: "80px", width: "80px" }}
        ></img> */}
      </div>
      
      <div className="d-flex flex-column" style={{ fontSize: "20px", fontFamily: "Montserrat" }}>
        {currentWeather.weather[0].main}
      </div>
      <div className="d-flex justify-content-around">
        <div style={{ fontSize: "20px" }}>
          {" "}
          <i class="fas fa-tint"></i>
          <span className="px-2">{currentWeather.main.humidity} %</span>
        </div>
        <div style={{ fontSize: "20px" }}>
          {" "}
          <i class="fas fa-wind"></i>
          <span className="px-2">{currentWeather.wind.speed} m/s</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
