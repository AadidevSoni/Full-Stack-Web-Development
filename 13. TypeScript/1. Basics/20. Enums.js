"use strict";
var WeatherConditions;
(function (WeatherConditions) {
    WeatherConditions["Sunny"] = "sunny";
    WeatherConditions["Cloudy"] = "cloudy";
    WeatherConditions["Rainy"] = "rainy";
    WeatherConditions["Snowy"] = "snowy";
})(WeatherConditions || (WeatherConditions = {}));
const currentWeather = WeatherConditions.Sunny;
console.log(`The current weather is ${currentWeather}`);
