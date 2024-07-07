import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [cityName,setCity] = useState('');
  let [weatherInfo,setInfo] = useState();
  let getData = (event)=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=751d66e130befad396405dc13796a57c&units=metric`)
    .then((data)=>data.json())
    .then((res)=>{
      console.log(res);
      // let dt = [...res.w]
      setInfo(res);
      
      console.log(weatherInfo);
    })
    .catch((err)=>{
      console.log(err)
    })
    event.preventDefault();
  }
  return (
    <div className="App">
     <header>
      <h1>My Weather App</h1>
     <div className='input'>
      <input type='text' onChange={(event)=>setCity(event.target.value)} value={cityName} />
      <button onClick={(event)=>getData(event)}>Search</button>
     </div>
     </header>
     <div className='card'>
     {(weatherInfo!== undefined && weatherInfo.cod!= '404')
     ?
    <>
     <h2>{weatherInfo.weather[0].main}</h2>
      {/* <h3>{weatherInfo.weather[0].description.toUpperCase()}</h3> */}
      <h3>{weatherInfo.main.temp} C</h3>
      <span><img src={`http://openweathermap.org/img/w/${weatherInfo.weather[0].icon}.png`}/> </span>
      <p >See More</p>
    </>
      :
    "No data Found"  
    }
    </div>
    </div>
  );
}

export default App;
