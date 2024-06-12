// import React from "react";

// function Cards({item}) {
//     return (
//         <>
//             <div className="mt-4 my-3 p-3">
//                 <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration:200">
//                     <figure className="px-10 pt-10">
//                         <img src={item.image} alt="Shoes" className="rounded-xl" />
//                     </figure>
//                     <div className="card-body items-center text-center">
//                         <h2 className="card-title">{item.name}</h2>
//                         <p>{item.title}</p>
//                         <div className="card-actions">
//                             <button className="mt-6 bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-blue-700 hover:text-white duration-300">Get Started</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Cards;

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}