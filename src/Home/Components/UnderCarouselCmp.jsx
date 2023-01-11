import React from 'react'
import { Carousel,Card, Row, Col, Container } from 'react-bootstrap'
import { BiWorld } from 'react-icons/bi';
import { FaPhotoVideo } from 'react-icons/fa';
import { FaPiggyBank } from 'react-icons/fa';
import { MdDevicesOther } from 'react-icons/md';

export const UnderCarouselCmp = () => {
  return (
    <div>
        <Container>
            <Row xs={1} md={4} style={{textAlign:'start'}}>
                <Col>
                    <Card className='under-carousel-card'>
                        <BiWorld className='under-carousel-icon' style={{color:'#c820d4'}} />
                        <h5>Works Worldwide</h5>
                        <p>No other free streaming service delivers more content to and from more countries worldwide.</p>
                    </Card>
                </Col>
                <Col>
                    <Card className='under-carousel-card'>
                        <FaPhotoVideo className='under-carousel-icon' style={{color:'#20d4d1'}} />
                        <h5>Thousands of Titles</h5>
                        <p>Choose from movies, shows, sports and music documentaries, AMC series, Live TV and more.</p>
                    </Card>
                </Col>
                <Col>
                    <Card className='under-carousel-card'> 
                        <FaPiggyBank className='under-carousel-icon' style={{color:'#470d69'}}/>
                        <h5>Always 100% Free</h5>
                        <p>Welcome to instant gratification at its best. Watch now without any payment or subscription and end the search for free movie websites.</p>
                    </Card>
                </Col>
                <Col>
                    <Card className='under-carousel-card'>
                        <MdDevicesOther className='under-carousel-icon' style={{color:'#e8be33'}}/>
                        <h5>Device-Friendly</h5>
                        <p>Stream the good stuff from your favorite devices including Apple, Android, Smart TVs and more.</p>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
