import React, { useState } from 'react';

const CitySelector = ({ onSearch }) => {
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    const onKeyDown = (event) => {
        if (event.key === 'Enter') {
            onSearch(city, state); // Ensure the function gets the correct city and state values
        }
    };

    return (
        <div className="citySelector p-6 max-w-lg mx-auto">
            <div className="mb-4">
                <h2 className="text-xl font-semibold text-center">Enter your city</h2>
            </div>
            <div className="space-y-4">
                <input
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    placeholder="Enter your city"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                    onKeyDown={onKeyDown}  // Capture Enter key
                />
                <input
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    placeholder="Country (Optional)"
                    value={state}
                    onChange={(event) => setState(event.target.value)}
                    onKeyDown={onKeyDown}  // Capture Enter key
                />
            </div>
            <div className="mt-4 text-center">
                <button
                    className="h-10 px-6 font-semibold rounded-md bg-black text-white focus:outline-none focus:ring-1 hover:outline-none hover:ring-1"
                    style={{ outline: "2px solid white" }}
                    onClick={() => onSearch(city, state)}
                >
                    Check weather forecast
                </button>
            </div>
        </div>
    );
};

export default CitySelector;