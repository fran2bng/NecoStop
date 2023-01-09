import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const Card1 = ({character}) => {
  return (
    <Card sx={{
        maxWidth: 150, 
        maxHeight: 250,
        display: "inline-block",
        outline: "none",
        cursor: "pointer",
        lineHeight: "1",
        borderRadius: "500px",
        transitionProperty: "background-color,border-color,color,box-shadow,filter",
        transitionDuration: ".3s",
        border: "1px solid transparent",
        textTransform: "uppercase",
        whiteSpace: "normal",
        fontWeight: "700",
        textAlign: "center",
        color: "#616467",
        boxShadow: "inset 0 0 0 2px #616467",
        backgroundColor: "black",
        
        }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="100"
            image={character.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {character.name}
            </Typography>
            <Typography variant="body2" color="white">
              {character.gender}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

  )
}

export default Card1