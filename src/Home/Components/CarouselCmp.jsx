import Figure from 'react-bootstrap/Figure';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export const CarouselCmp = () => {
  return (
    <div className='carouselCmp'> 
        <Card className="bg-dark text-white">
            <Card.Img src="https://amiratthemovies.files.wordpress.com/2022/01/the-20-best-movies-of-2021-header-1.jpg?w=1200" alt="Card image" className='carousel-image'/>
            <Card.ImgOverlay className='carousel-text'>
                <Card.Title><h1>Watch Free Movies With <br/> Plex</h1></Card.Title>
                <Card.Text>
                    <p>Stop searching for free movie websites and watch Plex now.</p>
                    <Button variant='warning' className='carousel-btn' style={{color:'white',borderRadius:'20px'}}>Stream Free Now</Button>
                </Card.Text>
            </Card.ImgOverlay>
        </Card>    
    </div>
  )
}
