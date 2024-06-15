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

// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';

// export default function ActionAreaCard({title, description}) {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="140"
//           image="/static/images/cards/contemplative-reptile.jpg"
//           alt="green iguana"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Lizards are a widespread group of squamate reptiles, with over 6,000
//             species, ranging across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// }

// import React from 'react';
// import { Card, CardContent, Typography, CardActionArea, CardMedia } from '@mui/material';
// import { useNavigate } from "react-router-dom";

// const Cards = ({ semester, courses }) => {
//   const navigate = useNavigate();

//   const handleCardClick = (semester) => {
//     navigate(`/semester/${semester}`);
//   };

//   return (
//     <Card sx={{ maxWidth: 345, display: 'inline-block', marginRight: '10px' }} onClick={() => handleCardClick(semester)}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="140"
//           image=""
//           alt="Image"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             {semester}
//           </Typography>
//           <Typography variant="body2" color="text.secondary" className=''>
//             List of courses for {semester}: {courses.join(", ")}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// };

// export default Cards;

// import React from 'react';
// import { Card, CardContent, Typography, CardActionArea, CardMedia, Grid } from '@mui/material';
// import { useNavigate } from "react-router-dom";

// const SemesterCard = ({ semester, courses, image, imageTitle }) => {
//   const navigate = useNavigate();

//   const handleCardClick = (semester) => {
//     navigate(`/semester/${semester}`);
//   };

//   return (
//     <Grid item xs={12} sm={6} md={6} lg={6} >
//       <Card sx={{ maxWidth: 400, height:400 }} onClick={() => handleCardClick(semester)}>
//         <CardActionArea>
//           <CardMedia
//             component="img"
//             height="180"
//             width="180"
//             image={image}
//             alt={imageTitle}
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div" fontWeight={"bold"} fontSize={30}>
//               {semester}
//             </Typography>
//             <Typography variant="subtitle1" color="text.secondary">
//               List of courses
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               {courses.join(", ")}
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//       </Card>
//     </Grid>
//   );
// };

// export default function Cards() {
//   const semesters = [
//     {
//       semester: "Semester 1",
//       courses: ["Course 1A", "Course 1B", "Course 1C"],
//       image: "https://via.placeholder.com/150",
//       imageTitle: "Semester 1 Image"
//     },
//     {
//       semester: "Semester 2",
//       courses: ["Course 2A", "Course 2B", "Course 2C"],
//       image: "https://via.placeholder.com/150",
//       imageTitle: "Semester 2 Image"
//     },
//     {
//       semester: "Semester 3",
//       courses: ["Course 3A", "Course 3B", "Course 3C"],
//       image: "https://via.placeholder.com/150",
//       imageTitle: "Semester 3 Image"
//     },
//     {
//       semester: "Semester 4",
//       courses: ["Course 4A", "Course 4B", "Course 4C"],
//       image: "https://via.placeholder.com/150",
//       imageTitle: "Semester 4 Image"
//     }
//   ];

//   return (
//     <Grid container spacing={2}>
//       {semesters.map((semester, index) => (
//         <SemesterCard key={index} {...semester} />
//       ))}
//     </Grid>
//   );
// }


