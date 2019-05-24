import React,{Component} from 'react';
import {PropTypes} from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import trasnforWeather from './../../services/transformWeather';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import getUrlWeatherByCity from '../../services/getUrlWeatherByCity';

class WeatherLocation extends Component {

    constructor(props){
        super(props);
        const { city } = props;
        this.state ={
            city,
            data: null,
        };
        console.log("constructor");
    }
    componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateClick();
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate"); 
    }

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
    render(){
        const  {onWeatherLocationClick } = this.props;
        console.log("render");
        const {city, data} =this.state;
        return(
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
            <Location city={city}></Location>
            {data ? 
                <WeatherData data={data}></WeatherData> :
                <CircularProgress size={50}></CircularProgress>
            }
        </div>
        );
    }
   
};

WeatherLocation.propTypes ={
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}
export default WeatherLocation;
