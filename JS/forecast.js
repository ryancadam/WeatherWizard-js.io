//forecast.js = api interaction

const APIKey = 'eDBxGY9iEvRwM2881KmmEGkItKJFpZz1';

//to get state: data.AdministrativeArea.LocalizedName

//get weather 
const getWeather = async (id) =>{
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${APIKey}`

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

}

//get city
const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${APIKey}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0]
    

};

