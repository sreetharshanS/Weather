const API_key  = '223af8b9e702483ca73131251251606';

const searchbtn = document.getElementById('searchbtn');
const wind = document.getElementById('wind');
const humidity = document.getElementById('humidity');
const citytext = document.getElementById('citytext');

searchbtn.addEventListener('click', async () => {
  const input = document.getElementById('input').value;

  try {
    const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_key}&q=${input}`);
    const data = await res.json();

    console.log(data);
    console.log(data.current.humidity);

    const climatetext = document.getElementById('climatetext');
    const citytext = document.getElementById('citytext'); 
    const wind = document.getElementById('wind');
    const humidity = document.getElementById('humidity');

    climatetext.innerText = `${data.current.condition.text}`;
    citytext.innerText = `${data.location.name}`;

    
    const condition = data.current.condition.text.toLowerCase();
    const weatherImg = document.getElementById('weatherimg');

    if (condition.includes("rain")) {
      weatherImg.src = 'Images/rain.png';
    } else if (condition.includes("mist")) {
      weatherImg.src = 'Images/snow.png';
    } else if (condition.includes("sunny")) {
      weatherImg.src = 'Images/clear.png';
    } else if (condition.includes("cloud")) {
      weatherImg.src = 'Images/cloud.png';
    } else if (condition.includes("drizzle")) {
      weatherImg.src = 'Images/drizzle.png';
    } else {
      weatherImg.src = 'Images/oopsimg.png';
    }

    wind.innerText = `${data.current.wind_kph} Km/h`;
    humidity.innerText = `${data.current.humidity} %`;

    document.getElementById('input').value = '';

  } catch (error) {
    console.error("Fetch error:", error);
    alert("Failed to get weather data.Please check the city name....");
  }
});

