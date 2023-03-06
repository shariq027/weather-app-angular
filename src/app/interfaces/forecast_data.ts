import { IWeather } from "./weather";

export interface IForecastData {
    cod: string;
    message: number;
    cnt: number;
    list: IWeather[];
}
