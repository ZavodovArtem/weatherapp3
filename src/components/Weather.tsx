import React from "react";
import { Parallax } from "react-parallax";
import './styles/Home.css'
import './styles/Weather.css'
import './styles/HomeAdaptive.scss'
import './styles/WeatherAdaptive.scss'
// import './styles/Weather.scss'
import {useState} from "react";


function WeatherApi() {
    // Состояние для хранения названия города и данных о погоде
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState <null | {
            name: string;
            main: {
                temp: number;
                humidity: number;
            };
            wind: {
                speed: number;
            };
            weather: {
                description: string;
            }[];
    }>(null);

    const fetchWeatherData = () => {
        const apiKey = '33012187532488844ef3d6b2dc199e30';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=ru`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setWeatherData(data);
            })
            .catch((error) => {
                console.log('Ошибка при загрузке данных о погоде:', error);
            });

            
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            fetchWeatherData();
        }
    }


    

    return(
        <>
            <Parallax bgImage="img/sky.jpg" strength={1600} className="weatherApiPar">
            <div className="mainWeather">
                <h1 className="weatherNameApp">Приложение погоды</h1>
                <div className="weatherGroup">
                    <input
                        className="weatherInputApp"
                        type="text"
                        placeholder="Введите название города"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <button className="weatherButtonApp" onClick={fetchWeatherData}>Получить погоду</button>
                </div>

                
                {weatherData &&  (
                    <div>
                        <h2 className="weatherResultApp + weatherResultAppH1">Погода в {weatherData.name}</h2>
                        <p className="weatherResultApp">Температура: {Math.round(weatherData.main.temp - 273.15)} °C</p>
                        <p className="weatherResultApp">Влажность: {weatherData.main.humidity} %</p>
                        <p className="weatherResultApp">Скорость ветра: {weatherData.wind.speed} м/с</p>
                        <p className="weatherResultApp">Описание: {weatherData.weather[0].description}</p>
                    </div>
                )}
                <a className="goHome" href="/">На главную</a>
            </div>
            </Parallax>
        </>
    );
}

export default WeatherApi