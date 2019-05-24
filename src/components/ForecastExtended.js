import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ForecastItem from './ForecastItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import getUrlWeatherByDay from './../services/getUrlWeatherByDay';
import transformForecast from './../services/transformForecast';
/*
const days =[
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
]
const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'normal',
    win: 'normal',
};

key= {`${forecastData.weekDay}${forecastData.hour}`}
                weekDay= {forecastData.weekDay} 
                hour={forecastData.hour} 
                data={forecastData.data}>

*/


class ForecastExtended extends Component{

    constructor(){
        super();
        this.state = { forecastData: null}
    }

    componentDidMount(){
       this.UpdateCity(this.props.city);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.city !== this.props.city){
            this.setState({forecastData: null});
            this.UpdateCity(nextProps.city);
        }
    }

    UpdateCity= city => {
         //fetch or axios
         const url_forecast = getUrlWeatherByDay(city);
         fetch(url_forecast).then(
             data => (data.json())
         ).then(
             weather_data => {
                 console.log(weather_data);
                 const forecastData = transformForecast(weather_data);
                 console.log(forecastData);
                 this.setState({ forecastData });
             }
         )
    }

    renderForecastItemDays(forecastData){
        return forecastData.map( forecastData => (
            <ForecastItem 
                key= {`${forecastData.weekDay}${forecastData.hour}`}
                weekDay= {forecastData.weekDay} 
                hour={forecastData.hour} 
                data={forecastData.data}>
            </ForecastItem>))
    }
    renderProgress = () => {
        return  <CircularProgress size={150}></CircularProgress>;
    }

    render(){
        const {city} = this.props;
        const {forecastData} = this.state;
        return (
            <div>
                <h2 className='forecast-title'>Pronóstico Extendido para {city}</h2>
                { forecastData ?
                    this.renderForecastItemDays(forecastData):
                    this.renderProgress()}
            </div>
            );
    }
}
ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;