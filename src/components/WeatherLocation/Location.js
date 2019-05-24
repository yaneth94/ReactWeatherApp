import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Location = ({ city }) =>(
        //Destructuring 
        // es una tecnica de enmascrpt 6 cuando tenemos una propiedad con un nombre con una variable
        // con el mismo nombre no debe ponerse asi city = props.city
        // const { city }= props; evitar esto por lo de arriba
        <div className="locationCont">
                <h1>
                        {city}
                </h1>
        </div>

);

Location.propTypes = {
        city:PropTypes.string.isRequired,
};

export default Location;