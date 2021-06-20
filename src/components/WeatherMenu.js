import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchData } from "../redux/actions";
import { fetchCurrentData } from "../redux/actionsCurrent";
import CurrentWeather from "./CurrentWeather";
import ForecastWeather from "./ForecastWeather";
import "../styles/WeatherMenu.css";
import About from "./About";
import { Link } from "react-router-dom";
const WeatherMenu = (props) => {
  const [about, setAbout] = useState(false);
  const [city, setCity] = useState('');
  const aboutHandler = () => {
    setAbout(!about);
  };
  const changeHandler = (evt) => {
    // if (evt.target.value === "dummy") alert("SELECT A CITY");
    // else {
    //   props.fetchData(evt.target.value);
    //   props.fetchCurrentData(evt.target.value);
    // }

    if(evt.key === 'Enter'){
      console.log(evt.key);
      console.log(evt.target.value);
      console.log(city);

      props.fetchData(city);
      props.fetchCurrentData(city);
    }
  };

  const cityHandler = (evt) => {
   
      
    setCity(evt.target.value);

  
  }
  return (
    <div className="d-flex">
      <div className="weather-app d-flex flex-column  text-light align-items-center justify-content-center">
        <div className="header">Mausam Samachar</div>
       <input placeholder="Enter your city name" value={city} onChange={cityHandler} onKeyPress={changeHandler}></input>
       
      {props.loading && <div className="text-light fw-bold">LOADING....</div>}
        <div
          className="p-3 d-flex justify-content-around weather-ouput"
          style={{ height: "38vh", width: "48vw" }}
        >
          {props.currentWeather.main && (
            <CurrentWeather currentWeather={props.currentWeather} />
          )}
          <div className="ml-3" style={{ overflow: "auto" }}>
            {props.weather===undefined && props.weather!=={} ?<div className="alert alert-danger fw-bold" style={{fontFamily:'Montserrat'}}>😞Invalid city.</div>:props.weather.map((item, id) => (
              <ForecastWeather key={id} data={item} />
            ))}
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <button
            className="btn btn-outline-light mt-4 mx-4"
            onClick={aboutHandler}
          >
            About
          </button>
          <Link to="/">
            <button className="btn btn-outline-light mt-4 mx-4">Logout</button>
          </Link>
        </div>
      </div>

      {about && <About />}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    loading: state.fetchDataReducer.loading,
    weather: state.fetchDataReducer.weather,
    currentWeather: state.fetchCurrentDataReducer.currentWeather,
    error: state.fetchDataReducer.error,

  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (query) => {
      dispatch(fetchData(query));
    },
    fetchCurrentData: (query) => {
      dispatch(fetchCurrentData(query));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(WeatherMenu);
