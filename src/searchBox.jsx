import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchBox.css"
import { useState } from 'react';
export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    const API_URl="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="8bb1720fe0da6359a52f3f592d8a3144";
    let getWeatherInfo=async()=>{
       let response= await fetch(`${API_URl}?q=${city}&appid=${API_KEY}&units=metric`);
       let jsonResponse=await response.json();
       console.log(jsonResponse);
        let result={
            city:city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,
        }
        return result;
    }
    let handleChange=(event)=>{
        setCity(event.target.value);
    }
    let handleSubmit=async(event)=>{
        event.preventDefault();
        setCity("");
        let newInfo=await getWeatherInfo();
        updateInfo(newInfo);
        }
    return (
        <div className='searchBox' >
            <h3>search for a city</h3>
         <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
            <br /><br />
            <Button variant="contained" type="submit" >
        Send
      </Button>
        </form>
        </div>

    )
}