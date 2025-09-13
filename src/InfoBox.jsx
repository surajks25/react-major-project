import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import SevereColdIcon from '@mui/icons-material/SevereCold';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1705077031869-51b60754302a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2VhdGhlciUyMHJlcG9ydHxlbnwwfHwwfHx8MA%3D%3D";
  const HOT_URL =
    "https://plus.unsplash.com/premium_photo-1666896192348-dbd2afd19b07?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyYWx8ZW58MHx8MHx8fDA%3D";
  const COLD_URL =
    "https://plus.unsplash.com/premium_photo-1676747433701-ebe10f095b77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1601116780183-d2e80a0bd47f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL 
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{
                info.humidity > 80 
                ? <SevereColdIcon/> 
                : info.temp > 15
                ? <SunnyIcon/>
                : <ThunderstormIcon/>
              }
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <div>Temparature: {info.temp}&deg;C</div>
              <div>Humidity: {info.humidity}</div>
              <div>Min Temp: {info.tempMin}&deg;C</div>
              <div>Max Temp: {info.tempMax}&deg;C</div>
              <div>
                The weather can be described as <i>{info.weather}</i> feels
                like: {info.feelsLike}&deg;C
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
