//app.js = dom manipulation

const locationForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {

    const locationDetails = data.locationDetails;
    const weather = data.weather;

    // update details template
    details.innerHTML = `
        <h5 class="my-3">${locationDetails.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Imperial.Value}</span>
            <span>&deg;F</span>
        </div>
    `;

    //update night/day and icon img
    const iconSrc = `icons/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    let timeDaySrc = null;
    if(weather.IsDayTime){
        timeDaySrc = 'img/day.svg';
    } else {
        timeDaySrc = 'img/night.svg';
    }
    time.setAttribute('src', timeDaySrc);


    // remove d-none
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
    
};

const updateLocation = async (city) => {

    const locationDetails = await getCity(city);
    const weather = await getWeather(locationDetails.Key);

    return { locationDetails, weather };

};

locationForm.addEventListener('submit', e => {
    e.preventDefault();

    // get city value
    const city = locationForm.city.value.trim();
    locationForm.reset();

    updateLocation(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));
});