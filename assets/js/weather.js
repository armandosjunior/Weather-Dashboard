var APIKey = "c8de5b56811e11465538b991adba7611";

var searchForm = document.querySelector('#search-form');
var cityInput = document.querySelector('#search-input');

var searchClicked= document.querySelector('#city-submit');
var cityButtons = document.querySelector('#city-selected');

var city = document.querySelector('#city');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var humidity = document.querySelector('#humidity');


cityButtons.addEventListener('submit', cityClicked);
searchClicked.addEventListener('submit', formSubmitted);



var cityClicked = function (event) {
    var name = event.target.getAttribute('data-name');
  
    if (name) {
      getFeaturedRepos=(name);
  
      repoContainerEl.textContent = '';
    }
};

function cityWeather(event) {
    event.preventDefault();
    
    console.log(cityInput.value);
    
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

    fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      city.textContent = citySearched;
      temp.textContent = data.temp;
      wind.textContent = data.wind;
      humidity.textContent = data.humidity;

    });

}

function formSubmitted (event) {
    event.preventDefault();

    var citySearched = cityInput.value.trim();

    if (citySearched) {
        cityWeather(citySearched);
    
        city.textContent = '';
        cityInput.value = '';
    }

}




