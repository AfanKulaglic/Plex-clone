import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { isMobile } from "react-device-detect";
import { BsTwitter } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsYoutube } from 'react-icons/bs';

export const FooterCmp = () => {
  return (
    <div className='FooterCmp'>
        <Row md={2} xs={1} className='footer-cmp-row' style={{textAlign:isMobile? 'center' : 'start'}}>
            <Col>
                <h3><img src='https://www.plex.tv/wp-content/themes/plex/assets/img/plex-logo.svg' width='10%' height='2%' /></h3><br/>
            </Col>
            <Col>
                <Row xs={1} md={5}>
                    <Col>
                        <h6>Company</h6>
                        <p>About</p>
                        <p>Careers</p>
                        <p>Our Culture</p>
                        <p>Giving</p>
                        <p>Partners</p>
                        <p>Press Room</p>
                        <p>Plex Gear</p>
                        <p>The Plex Blog</p><br/>
                    </Col>
                    <Col>
                        <h6>Company</h6>
                        <p>Go Premium</p>
                        <p>Plexamp</p>
                        <p>Plex Labs</p>
                        <p>Get Perks</p><br/>
                    </Col>
                    <Col>
                        <h6>Downloads</h6>
                        <p>Plex Media Server</p>
                        <p>Apps & Devices</p>
                        <p>Where to Watch</p><br/>
                    </Col>
                    <Col>
                        <h6>Company</h6>
                        <p>Support</p>
                        <p>Articles</p>
                        <p>Forums</p>
                        <p>Biling Qusetions</p>
                        <p>Status</p>
                        <p>Bug Bounty</p>
                        <p>Cord Cutter</p>
                        <p>Contact</p><br/>
                    </Col>
                    <Col>
                        <h6>Company</h6>
                        <p>TV channel Finder</p>
                        <p>Watch to Watch</p>
                        <p>A24 collection</p><br/>
                    </Col>
                </Row>
            </Col>
        </Row>
        <hr/>
        <br/>
        <div className='footer-cmp-footer' style={{textAlign:isMobile? 'center' : 'start'}}>
            <Row xs={1} md={2} style={{width:'100%'}}>
                <Col>
                    <p>Copyright @ 2023 Plex</p>
                </Col>
                <Col style={{textAlign:isMobile? 'center' :'end'}}>
                    <BsYoutube className='footer-cmp-social-logo' />
                    <BsFacebook className='footer-cmp-social-logo'/>
                    <BsInstagram className='footer-cmp-social-logo'/>
                    <FaLinkedinIn className='footer-cmp-social-logo'/>
                    <BsYoutube className='footer-cmp-social-logo'/>
                </Col>
            </Row>
        </div>
    </div>
  )
}
