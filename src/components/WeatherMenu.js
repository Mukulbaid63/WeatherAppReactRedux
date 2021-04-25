import React, { useState } from 'react';
import {connect} from 'react-redux';
import { fetchData } from '../redux/actions';
import { fetchCurrentData } from '../redux/actionsCurrent';
import CurrentWeather from './CurrentWeather';
import ForecastWeather from './ForecastWeather';
import '../styles/WeatherMenu.css'
import About from './About';
import { Link } from 'react-router-dom';
const WeatherMenu = (props) => {
    const [about, setAbout] = useState(false)
    const aboutHandler=()=>{
        setAbout(!about);
    }
    const changeHandler=(evt)=>{
        if(evt.target.value==="dummy") alert("SELECT A CITY");
        else
        {props.fetchData(evt.target.value);
          props.fetchCurrentData(evt.target.value);
        }
      }
      return (
          <div className="d-flex" >
        <div className="weather-app d-flex flex-column  text-light align-items-center justify-content-center">
         <select onChange={changeHandler}>
           <option value="dummy">Select a city</option>
           <option value="Kolkata">Kolkata</option>
           <option value="New Delhi">New Delhi</option>
           <option value="Mumbai">Mumbai</option>
           <option value="Chennai">Chennai</option>
           <option value="Bangalore">Bangalore</option>
           <option value="Srinagar">Srinagar</option>
           <option value="Jaipur">Jaipur</option>
           <option value="Ranchi">Ranchi</option>
           <option value="Puducherry">Puducherry</option>


    
         </select>
         {props.loading && <div className="text-light fw-bold">LOADING....</div>}
         <div className="p-3 d-flex justify-content-around weather-ouput" style={{height:'38vh',width:'48vw'}}>
         {props.currentWeather.main&& <CurrentWeather currentWeather={props.currentWeather}/>}
         <div className="ml-3" style={{overflow:'auto'}}>{props.weather.map((item,id)=>(<ForecastWeather data={item}/>))}</div>
         </div>
         <div className="d-flex justify-content-between">
            <button className="btn btn-outline-light mt-4 mx-4" onClick={aboutHandler}>About</button>
            <Link to="/">
        <button className="btn btn-outline-light mt-4 mx-4" >Logout</button>

        </Link>
        </div>
        </div>
       
        {about&&<About/>}
        
        
        </div>
      );
    }
    const mapStateToProps=(state)=>{
      return{
        loading:state.fetchDataReducer.loading,
        weather:state.fetchDataReducer.weather,
        currentWeather:state.fetchCurrentDataReducer.currentWeather,
        error:state.fetchDataReducer.error
      }
    }
    const mapDispatchToProps=(dispatch)=>{
      return{
        fetchData:(query)=>{
          dispatch(fetchData(query))
        },
        fetchCurrentData:(query)=>{
          dispatch(fetchCurrentData(query))
        }
      }
    }
    export default connect(mapStateToProps,mapDispatchToProps)(WeatherMenu);
    