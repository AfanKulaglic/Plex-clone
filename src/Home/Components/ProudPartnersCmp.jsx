import React from 'react'
import { Row,Col } from 'react-bootstrap'

export const ProudPartnersCmp = () => {
  return (
    <div className='ProudPartnersCmp'>
        <h2>Proud Partners with:</h2>
        <Row md={7} xs={3} style={{padding:'60px',display:'flex',justifyContent:'center'}}>
            <Col style={{width:'15vh'}}>
                <img src='https://www.plex.tv/wp-content/uploads/2021/11/Paramount-Black-500x500-1.png' width='100%' />
            </Col>
            <Col style={{width:'15vh'}}>
                <img src='https://www.plex.tv/wp-content/uploads/2019/09/warner-bros.png' width='100%' />
            </Col>
            <Col style={{width:'15vh'}}>
                <img src='https://www.plex.tv/wp-content/uploads/2019/11/metro-goldwyn-mayer.png' width='100%' />
            </Col>
            <Col style={{width:'15vh'}}>
                <img src='https://www.plex.tv/wp-content/uploads/2019/09/lionsgate.png' width='100%' />
            </Col>
            <Col style={{width:'15vh'}}>
                <img src='https://www.plex.tv/wp-content/uploads/2019/11/legendary.png' width='100%' />
            </Col>
            <Col style={{width:'15vh'}}>
                <img src='https://www.plex.tv/wp-content/uploads/2020/03/magnolia.png' width='100%' />
            </Col>
            <Col style={{width:'15vh'}}>
                <img src='https://www.plex.tv/wp-content/uploads/2020/04/crackle.png' width='100%' />
            </Col>
        </Row>
    </div>
  )
}
