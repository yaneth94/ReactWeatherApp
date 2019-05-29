import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ForecastItem from './ForecastItem';
import CircularProgress from '@material-ui/core/CircularProgress';

const renderForecastItemDays = forecastData => {
    return forecastData.map( forecastData => (
        <ForecastItem 
            key= {`${forecastData.weekDay}${forecastData.hour}`}
            weekDay= {forecastData.weekDay} 
            hour={forecastData.hour} 
            data={forecastData.data}>
        </ForecastItem>))
}

const renderProgress = () => {
    return  <CircularProgress size={150}></CircularProgress>;
}


const ForecastExtended = ({ city, forecastData }) => (
    <div>
        <h2 className='forecast-title'>Pronóstico Extendido para {city}</h2>
        { forecastData ?
            renderForecastItemDays(forecastData):
            renderProgress()}
    </div>
    
);
ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    //forecastData: PropTypes.array.isRequired,
}

export default ForecastExtended;