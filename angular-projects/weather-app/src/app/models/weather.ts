export interface Weather {
    weather: WeatherInfo[];
    name: string;
    main: {
        temp: number;
        pressure: number;
        humidity: number;
    };
    wind: {
        speed: number;
    };
    sys: {
        country: string
    };
}

interface WeatherInfo {
    main: string;
    icon: string;
}