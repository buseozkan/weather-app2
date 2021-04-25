import React from 'react';
import PropTypes from "prop-types";
import ForecastSummary from "./ForecastSummary";

const ForecastSummaries = (props) => {
    const { forecasts } = props;
    return (
        <div className="forecast-summaries">
            {forecasts.map((forecast) => (
                <ForecastSummary
                    key={forecast.date}
                    date={forecast.date}
                    description={forecast.description}
                    temperature={forecast.temperature}
                    onSelect={onForecastSelect}
                />
            ))}
        </div>
    );
};

ForecastSummaries.PropTypes = {
    forecasts: PropTypes.arrayOf.isRequired,
    onSelect: PropTypes.func.isRequired
};

export default ForecastSummaries;