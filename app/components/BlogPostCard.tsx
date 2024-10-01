import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard() {
  const randomHeight = () => Math.floor(Math.random() * 300) + 200 + "px";
  return (
    <Card 
      sx={{
        bgcolor: "background.paper",
        border: 1,
        width: "100%",
        color: "white",
        margin: "0 1rem 1rem 0",
        textAlign: "center",
        display: "inline-block",
        height: randomHeight(),
        borderRadius: 1
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="h3" color='text.primary'>
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}