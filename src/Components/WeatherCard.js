import React from 'react';
import Image from 'next/image';

const WeatherCard = ({ dt, temp, main, icon }) => {
    // Convert the dt (in seconds) to a JavaScript Date (in milliseconds)
    const date = new Date(dt * 1000);

    return (
        <div className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <Image
                className="w-20 mx-auto mt-4"
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                alt="Weather Icon"
                width={20}
                height={20}
            />
            <div className="p-4">
                <h3 className="text-xl font-semibold text-center">{main}</h3>
                <p className="text-center text-gray-500">
                    {date.toLocaleDateString()} -{' '}
                    {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
                <p className="text-center text-gray-700">
                    Temp: {temp}{'\u00B0'}F
                </p>
            </div>
        </div>
    );
};

export default WeatherCard;
