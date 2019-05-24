import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCity } from './../actions';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {
    //Interesante manda una función para que reciba la ciudad y la tenga en el inicio solo esa
    handleSelectionLocation = city =>{
        console.log(setCity(city));
        this.props.setCity(city);
    }
    render() {
        return (
            <LocationList 
                  cities={this.props.cities} 
                  onSelectedLocation={this.handleSelectionLocation}/>
        );
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
};

const mapDispatchToPropsActions = dispatch =>({
    setCity: value => dispatch(setCity(value))
});
export default connect(null, mapDispatchToPropsActions)(LocationListContainer);