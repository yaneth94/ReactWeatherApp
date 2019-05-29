import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './../actions';
import { getWeatherCities, getCity } from './../reducers';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {

    componentDidMount() {
        const { setWeather, setSelectedCity, cities, city} =this.props;

        setWeather(cities);
        setSelectedCity(city);
    }

    //Interesante manda una función para que reciba la ciudad y la tenga en el inicio solo esa
    handleSelectionLocation = city =>{
        this.props.setSelectedCity(city);
    }
    render() {
        return (
            <LocationList 
                  cities={this.props.citiesWeather} 
                  onSelectedLocation={this.handleSelectionLocation}/>
        );
    }
}

LocationListContainer.propTypes = {
    setSelectedCity: PropTypes.func.isRequired,
    setWeather: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
    city: PropTypes.string.isRequired,
};

const mapDispatchToPropsActions = dispatch => bindActionCreators(actions, dispatch);

/*const mapDispatchToPropsActions = dispatch =>({
    setCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities),)
});*/
const mapStateToProps = state => ({
    citiesWeather: getWeatherCities(state),
    city: getCity(state),
});

export default connect(mapStateToProps, mapDispatchToPropsActions)(LocationListContainer);