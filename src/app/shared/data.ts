export interface WeatherData {
    clock: string;
    wind: string;
    temperature: string;
    description: string;
}

export interface updateTable {
    updateWeather(data: Array<WeatherData>);
    updateTrain(data: Array<any>);
}