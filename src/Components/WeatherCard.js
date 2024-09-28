import React from 'react';
import Image from 'next/image';

const WeatherCard = ({ dt, temp, main, icon }) => {
    // Convert the dt (in seconds) to a JavaScript Date (in milliseconds)
    const date = new Date(dt * 1000);

    // Format the date to show only the month and day (e.g., "Sep 25")
    const formattedDate = date.toLocaleDateString(undefined, {
        month: 'short',  // Short month name (e.g., "Sep")
        day: 'numeric',  // Numeric day of the month (e.g., "25")
    });

    // Convert Kelvin to Fahrenheit
    const tempFahrenheit = ((temp - 273.15) * 9) / 5 + 32;

    return (
        <div className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <Image
                className="w-20 mx-auto mt-4"
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                alt="Weather Icon"
                width={50}
                height={50}
            />
            <div className="p-2">
                <h3 className="text-sm font-semibold text-center">{main}</h3>
                <p className="text-sm text-center text-gray-500">{formattedDate}</p>
                <p className="text-sm text-center text-gray-700">
                    {tempFahrenheit.toFixed(1)}{'\u00B0'}F
                </p>
            </div>
        </div>
    );
};

export default WeatherCard;