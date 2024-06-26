import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";
export default function InfoBox({info}){
    const INIT_URl="https://images.unsplash.com/photo-1601141922947-9fc7f16bee8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    return(
        <div className="InfoBox">
        <h1>weather Info-{info.weather}</h1>
        <div className='cardContent'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URl}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <div>Temperature={info.temp}&deg;C</div>
          <div>Humidity={info.humidity}</div>
          <div>Minimum Temperature={info.tempMin}</div>
          <div>Maximum Temperature={info.tempMax}</div>
          <div>Feels Like={info.feelsLike}</div>
        </Typography>
      </CardContent>
    </Card>
        </div>
        </div>
    )
}