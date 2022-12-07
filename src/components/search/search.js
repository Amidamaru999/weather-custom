import React from "react";
import { useState } from "react";
import { getCities } from "../../api/geoApi";
import './search.css'

export const SearchBar = () => {
    const [search, setSearch] = useState("")
    const [weatherData, setWeatherData] = useState(null)
    const handleSearch = async (event) => {
        let result = await getCities(search)
        setWeatherData({ 
            city: result.name, 
            weather: Math.round(result.main.temp) + '°C', 
            description: result.weather[0].description, 
            feelsLike: Math.round(result.main.feels_like) + '°C',
            windSpeed: result.wind.speed + ' m/s',
            humidity: result.main.humidity + ' %',
            pressure: result.main.pressure + ' hPa',
            icon: result.weather[0].icon
    })
}

    return (
        <div>
            <div className="searchBar">
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            {weatherData? 
            <div className="weather">
                <div className="main-info">
                    <div> 
                    <div className="city">{weatherData.city}</div>
                    <div className="description">{weatherData.description}</div>
                    <div className="currentWeather">{weatherData.weather}</div>
                    </div>
                    <img alt="weather" className="weather-icon" src={`icons/${weatherData.icon}.png`} />

                </div>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like</span>
                        <span className="parameter-value">{weatherData.feelsLike}</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">{weatherData.windSpeed}</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">{weatherData.humidity}</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value">{weatherData.pressure}</span>
                    </div>
                </div>
            </div>
            : null}
        </div>
    )
}


