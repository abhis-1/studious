import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import list from '../../public/list.json'; // Adjust the import path according to your project structure


function Cards2({ }) {

    const navigate=useNavigate();

    const handleCardClick=(id)=> {
        navigate(`/dashboard/subject/${id}`);
    }

    return (


        <div style={{ paddingTop: '16px', paddingLeft: '20px', marginTop: '90px', paddingRight: '20px', marginBottom: '50px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px 32px', justifyContent: 'center' }}>
                {list.map((item) => (

                    // <Link to={`/dashboard/subject/${index}`} key={index} style={{ textDecoration: 'none', flex: '1 1 22%', maxWidth: '22%' }}>

                        <Card key={item.id} sx={{
                            width: '30%',
                            maxWidth: 350,
                            // margin:'16px',
                            '&:hover': {
                                transform: 'scale(1.05)',     
                            },

                        }
                        } 
                        onClick={()=>handleCardClick(item.id)}
                        >
                            <CardActionArea>
                                <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }}>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={item.image}
                                        alt={item.name}
                                        style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                    />
                                </div>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: 'bold' }}>
                                        {item.name}
                                    </Typography>
                                    {/* <Typography variant="body2" color="text.secondary"> */}
                                        {/* { */}
                                         {/* item.title */}
                                        {/* } */}
                                    {/* </Typography> */}
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    // </Link>
                ))}
            </div>
        </div >
    );
}

export default Cards2;