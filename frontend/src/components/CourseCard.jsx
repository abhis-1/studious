import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import list from '../../public/list.json'; // Adjust the import path according to your project structure


function CourseCard({ searchQuery, onSearchResult}) {

    const navigate=useNavigate();

    const handleCardClick=(id)=> {
        navigate(`/dashboard/subject/${id}`);
    }

    const normalizedSearchQuery = searchQuery ? searchQuery.toLowerCase() : '';

    const filteredCourses=list.filter(item=>
        item.name.toLowerCase().includes(normalizedSearchQuery)
    )

    useEffect(()=> {
        onSearchResult(filteredCourses);
    }, [filteredCourses, onSearchResult]);

    return (


        <div style={{ paddingTop: '16px', paddingLeft: '20px', marginTop: '90px', paddingRight: '20px', marginBottom: '50px' }}>
            {filteredCourses.length>0? (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px 32px', justifyContent: 'center' }}>
                {filteredCourses.map((item) => (
                        <Card key={item.id} sx={{
                            width: '30%',
                            maxWidth: 250,
                            '&:hover': {
                                transform: 'scale(1.05)',
                                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                            },
                            transition: 'transform 0.2s, box-shadow 0.2s',

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
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    // </Link>
                ))}
            </div>
            ) : (
                <Typography variant='h6' color='textSecondary' align="center">
                    No such subject found
                </Typography>
            )}
        </div >
    );
}

export default CourseCard;