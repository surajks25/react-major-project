import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Wonderland",
    feelsLike: 26.54,
    humidity: 81,
    temp: 26.54,
    tempMax: 26.54,
    tempMin: 26.54,
    weather: "overcast clouds",
  });

  let updateInfo = (newInfo)=>{
    setWeatherInfo(newInfo);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather APIs</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo} />
    </div>
  );
}
