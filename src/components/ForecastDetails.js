import React from "react";
import PropTypes from "prop-types";

function ForecastDetails(props) {
  const { forecast } = props;
  const { temperature, wind, humidity } = forecast;

  return (
    <span className="forecast-details" data-testid="forecast-details">
      <span className="forecast-details__temperature">
        {temperature.min}
        &deg;C
      </span>

      <span classsName="forecast-details__wind">
        {wind.speed}
        {wind.direction}
      </span>
      <span className="forecast-details__humidity"> {humidity}</span>
    </span>
  );
}

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    humidity: PropTypes.number,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }),
    temperature: PropTypes.shape({
      min: PropTypes.number,
    }),
  }).isRequired,
};

export default ForecastDetails;
