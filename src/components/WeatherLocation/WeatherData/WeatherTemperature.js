import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './styles.css';

import {
    CLOUDY,
    SUNNY,
    THUNDER,
    RAIN,
    DRIZZLE,
}from './../../../constants/weathers';
import './styles.css';


const icons ={
    [SUNNY]:"day-sunny",
    [CLOUDY]: "day-cloudy",
    [THUNDER]: "day-thunder",
    [RAIN]: "day-rain",
    [DRIZZLE]: "dat-drizzle"
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];

    const sizeIcon ="4x";
    if(icon)
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />;
    else
        return <WeatherIcons className="wicon" name={"day-sleet"} size={sizeIcon} />;
}

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">{`C°`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;