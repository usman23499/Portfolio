import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
  console.log(props);
  return (
    <div  className="annimactions" style={{padding:"20px",backgroundColor:"black",borderRadius:"5px 5px",border:"1px solid #313131",marginBottom:"60px",boxShadow:"10px 10xp 10px white",height:"350px"}}>
        <CardMedia
        component="img"
        
       
        image={props.pic}
        alt="green iguana"
        style={{borderRadius:"8px 8px",width:"100%"}}
      />
        <Card sx={{ maxWidth: 345 }}  style={{backgroundColor:"black",borderRadius:"none",boxShadow:"none",color:"white"}}>
    
      <CardContent >
        <Typography gutterBottom variant="h4" component="div">
          {props.name}
        </Typography>
        <Typography variant="h7" style={{color:"#dee5df"}} >
        {props.theory}
        </Typography>
      </CardContent>
      
    </Card>
    </div>
  );
}
