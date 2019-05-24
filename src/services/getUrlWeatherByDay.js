import {api_key, url_base_forecast} from './../constants/api_url';

const getUrlWeatherByDay = city =>{
    return `${url_base_forecast}?q=${city}&appid=${api_key}`;
}

export default getUrlWeatherByDay;