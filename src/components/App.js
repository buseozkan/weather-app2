/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';
import LocationDetails from "./LocationDetails";



const App = (props) => {
  return (
    <div className="App">
      <LocationDetails city={props.location.city} country={props.location.country} />
    </div>
  );
};


App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};



export default App;
