# **Weather App**

A simple weather forecasting app built with **Next.js**, **React**, and **TailwindCSS** that allows users to search for weather conditions by city and country. Weather data is fetched from the **OpenWeatherMap API**.

---

## **Table of Contents**

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Environment Variables](#environment-variables)
7. [Acknowledgments & References](#acknowledgments--references)

---

## **Introduction**

This weather app allows users to search for weather forecasts in different cities. The app provides a 5-day weather forecast, displaying key information such as temperature, weather conditions, and icons representing the forecasted weather.

---

## **Features**

- **City Search**: Enter a city and (optionally) a country to get the weather forecast.
- **Responsive Design**: The app is fully responsive and adapts to mobile, tablet, and desktop devices.
- **Weather Cards**: Displays detailed weather information in a user-friendly card format.
- **OpenWeatherMap Integration**: Fetches live weather data using the OpenWeatherMap API.
- **TailwindCSS for Styling**: Lightweight and customizable styling with TailwindCSS.

---

## **Technologies Used**

- [Next.js](https://nextjs.org/) - React Framework for server-side rendering and static site generation.
- [React](https://reactjs.org/) - JavaScript library for building user interfaces.
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework for custom styling.
- [OpenWeatherMap API](https://openweathermap.org/api) - API for fetching weather data.
- [Vercel](https://vercel.com/) - Platform for deploying the Next.js application.

---

## **Installation**

To set up this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/weather-nextjs.git
   cd weather-nextjs

   ```

2. **Install dependencies:** Make sure you have Node.js and npm installed, then run:

   ```bash
   npm install

   ```

3. **Set up environment variables:** Create a .env.local file in the root of your project and add the following:

   ```bash
    NEXT_PUBLIC_API_BASE_URL=https://api.openweathermap.org
    NEXT_PUBLIC_API_KEY=your_openweathermap_api_key
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

**Open your browser to http://localhost:3000 to see the app.**

---

## **Usage**

Once the app is running, you can:

1. Enter the name of a city in the search bar to get weather information.
2. Optionally, enter the country or state.
3. Click the "Check weather forecast" button or press Enter to submit the search.
4. The weather forecast for the city will be displayed in card format.

---

## **Environment Variables**

The following environment variables are required:

- **NEXT_PUBLIC_API_BASE_URL:** The base URL for the OpenWeatherMap API (https://api.openweathermap.org).
- **NEXT_PUBLIC_API_KEY:** Your OpenWeatherMap API key. You can obtain one by signing up at OpenWeatherMap.

---

## **Acknowledgments & References**

The following environment variables are required:

- **OpenWeatherMap API:** The weather data is powered by the OpenWeatherMap API.
- **Next.js Documentation:** For more information on how to get started with Next.js, visit Next.js Docs.
- **TailwindCSS Documentation:** For styling guidance, refer to the TailwindCSS Documentation.

Special thanks to the contributors and maintainers of the libraries and frameworks used in this project.
