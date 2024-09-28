import React from 'react';
import WeatherCard from './WeatherCard';

const WeatherCardList = ({ list = [], cityName }) => {
    // Filter to get one forecast per day (5 days only)
    const filterFiveDayForecast = (list) => {
        const uniqueDays = [];

        return list.filter((weatherData) => {
            const date = new Date(weatherData.dt * 1000).getDate(); // Extract the day of the month

            // If we haven't already added this day to the uniqueDays array, do so
            if (!uniqueDays.includes(date)) {
                uniqueDays.push(date);
                return true;
            }

            return false; // Otherwise, skip this forecast
        }).slice(0, 5);  // Limit to 5 forecasts for 5 days
    };

    const filteredList = filterFiveDayForecast(list);

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h2 className="text-xl font-semibold text-center mb-4">
                {cityName}
            </h2>
            <div className="grid grid-cols-5 gap-4">
                {filteredList.map((weatherData) => (
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