import React from 'react';
import {PropTypes} from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';


/*

    handleUpdateClick = () => {
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then( resolve =>{
            return resolve.json();
        }).then(data =>{
            console.log("RESULTADO DE handleUpdateClick");
            const newWeather = trasnforWeather(data);
            console.log(newWeather);
           
            this.setState({
                data: newWeather,
            });
            console.log(data);
           
        });

        
    }
*/


const WeatherLocation =({onWeatherLocationClick,city,data }) => (
    <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
        <Location city={city}></Location>
            {data ? 
                <WeatherData data={data}></WeatherData> :
                <CircularProgress size={50}></CircularProgress>
            }
    </div>
);

WeatherLocation.propTypes ={
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}
export default WeatherLocation;
