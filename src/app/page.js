"use client";  // This tells Next.js this is a Client Component

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Weather3D from '@/Components/Weather3D';
import CitySelector from "@/Components/Search";
import WeatherList from "@/Components/WeatherCardList";

export default function Home() {
  const [weatherCondition, setWeatherCondition] = useState('Clear');  // Default to "Clear"
  const [url, setUrl] = useState(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const REACT_APP_API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const REACT_APP_API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  useEffect(() => {
    if (!url) return;

    const fetchWeatherData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
        setError(null);

        // const condition = result?.weather[0]?.main || 'Clear';  // Fallback to "Clear"
        // setWeatherCondition(condition);  // Update weather condition state
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeatherData();
  }, [url]);

  // const handleSearch = (city, state) => {
  //   const formattedUrl = `${REACT_APP_API_BASE_URL}/data/2.5/weather?q=${city},${state}&appid=${REACT_APP_API_KEY}`;
  //   setUrl(formattedUrl);  // Update URL to trigger fetch
  // };

  const getContent = () => {
    if (error) return <h2>Error: {error}</h2>;
    if (isLoading) return <h2>Loading...</h2>;
    if (data) return <WeatherList list={data.list} cityName={data.city.name} />;
    return null;
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-2 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* {weatherCondition && <Weather3D weatherCondition={weatherCondition} />} Only render when condition is available */}
        <CitySelector
          onSearch={(city, state) =>
            setUrl(
              `${REACT_APP_API_BASE_URL}/data/2.5/forecast?q=${city},${state}&appid=${REACT_APP_API_KEY}`
            )
          }
        />
        <div className="weatherList">
          {getContent()}
          <p className="text-center mt-4">Forecast provided by OpenWeatherMap</p>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.marjoree.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Portfolio
        </a>
      </footer>
    </div>
  );
}