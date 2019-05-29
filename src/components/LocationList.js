import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';
import './styles.css';

const LocationList = ({ cities,  onSelectedLocation }) => {
    //Aca en onselectedLocatioon que es la función le envia la city y de esta manera cuando da click ya
    //el dato
    const handleWeatherLocationClick = city =>{
        console.log("handleWeatherLocationClick");
        onSelectedLocation(city);
    };

    const strToComponents = cities => (
        cities.map(city => 
            (
                <WeatherLocation 
                    key={city.key} 
                    city={city.name}
                    onWeatherLocationClick={() => handleWeatherLocationClick(city.name)}
                    data={city.data}/>))
    );

    return (<div className="LocationList">
       {strToComponents(cities)}
    </div>);
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}
export default LocationList;