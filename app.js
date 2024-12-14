const API_KEY =`d0ad6f80b79fea4700d597caa2176d66`;
const inputdata =document.getElementById('inputfeild');
const showWeather =document.getElementById('showWeather');

const searchData= async ()=>{
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputdata.value}&appid=${API_KEY}&units=metric`;
    const fetchData =await fetch(API_URL);
    const response =await fetchData.json();

    console.log(response);
    return showData(response);
};
  const showData =(data)=>{
    showWeather.innerHTML= `<img width='80px' src=${`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt ="">
     <h1>${data.main.temp} C</h1>
     <h2>${data.weather[0].main}</h2>`;

      };