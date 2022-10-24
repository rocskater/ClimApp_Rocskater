import kelvinToCelcius from "../src/convertTemperature.js";

    const data = async ()=>{
        const city = document.querySelector('input').value;
        
        const baseUrl="https://api.openweathermap.org/";
        const apiKey = "82c6c9f3a1ba9b83e48d39b595b9fb9d";
        const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
       
        const response = await fetch (api);
       
        const weatherData = await response.json();
    
        const { name, sys, main, weather, id } = weatherData;

        console.log("name", name);
        console.log('sys', sys);
        console.log('main', main);
        console.log('weather', weather);
        console.log('id', id);

        const temperatura =  await kelvinToCelcius(main.temp);

        const card=`
            <p class="city-name">${name}<span>${sys.country}</span></p>
            <p class="temperature">${'Temperatura: '}${temperatura}<span>°C</span></p>
            <div class="card-image">
            <img src="https://openweathermap.org/img/wn/${
              weather[0].icon
            }@2x.png" alt="clima">
            <p>${weather[0].description}</p>
          </div>`
        
        const app = document.querySelector('#app');
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('card');
        cardContainer.innerHTML= card;
        app.append(cardContainer);

        document.querySelector('input').value= await "";
        
         
    }

export default data;