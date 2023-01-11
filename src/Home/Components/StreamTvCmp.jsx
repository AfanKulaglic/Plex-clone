import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

export const StreamTvCmp = () => {
  return (
    <div className='StreamTvCmp'>
        <Row xs={1} md={2}>
            <Col className='stream-tv-col'>
                <iframe width="100%" height='450vh'  src="https://www.youtube.com/embed/FqFWfrb6rWE" title="FREE GUY All Movie CLIPS + Trailer (NEW 2021)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Col>
            <Col className='stream-tv-col'>
                <h2>Stream free Live TV now.</h2>
                <p>A Live TV free for all has begun. Enjoy instant access to 250+ channels for the whole family anywhere, on any device.</p>         
                <Button variant='warning' className='carousel-btn' style={{color:'white',borderRadius:'20px'}}>See Whats On</Button>
            </Col>
        </Row>
    </div>
  )
}
