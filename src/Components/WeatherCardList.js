import React from 'react';
import WeatherCard from './WeatherCard';

const WeatherCardList = ({ list = [], cityName }) => {
    return (
        <div className="max-w-4xl mx-auto p-4">
            <h2 className="text-2xl font-semibold text-center mb-4">
                Weather Forecast for {cityName}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {list.map((weatherData) => (
                    <WeatherCard
                        key={weatherData.dt}
                        dt={weatherData.dt}
                        temp={weatherData.main.temp}
                        main={weatherData.weather[0].main}
                        icon={weatherData.weather[0].icon}
                    />
                ))}
            </div>
        </div>
    );
};

export default WeatherCardList;