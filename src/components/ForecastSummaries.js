import React from 'react';
import PropTypes from "prop-types";
import ForecastSummary from "./ForecastSummary";
import '../styles/ForecastSummaries.css';

const ForecastSummaries = (props) => {
    const { forecasts, onForecastSelect } = props;
    return (
        <div className="forecast-summaries">
            {forecasts.map((forecast) => (
                <ForecastSummary
                    key={forecast.date}
                    date={forecast.date}
                    description={forecast.description}
                    icon={forecast.icon.toString()}
                    temperature={forecast.temperature}
                    onSelect={onForecastSelect}
                />
            ))}
        </div>
    );
};

ForecastSummaries.propTypes = {
    forecasts: PropTypes.arrayOf.isRequired,
    onSelect: PropTypes.func.isRequired,
    icon: PropTypes.number,
};

export default ForecastSummaries;