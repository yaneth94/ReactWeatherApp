import { SET_FORECAST_DATA } from './../actions';

export const cities = (state = {},action) => {
    switch (action.type) {
        case SET_FORECAST_DATA:
            const { city, forecastData } = action.payload;
            return { ...state, [city]: { forecastData }}
        default:
            return state;
    }
}
export const getForecastDataFromCities = (state, city) => state[city] && state[city].forecastData;