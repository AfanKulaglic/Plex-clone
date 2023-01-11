import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { Button, Carousel, CloseButton, Modal } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';
import TextField from '@mui/material/TextField';
import { FcGoogle } from 'react-icons/fc';
import { GrFacebook } from 'react-icons/gr';
import { GrApple } from 'react-icons/gr';
import { Link } from 'react-router-dom';

export const NavbarCmp = () => {
  const [show, setShow] = useState(false)
  const [isLogin,setIsLogin] = useState(true)

  const ModalCtx = () => {
    return (
        <Modal
            size="xl"
            show={show}
            onHide={() => setShow(false)}
            aria-labelledby="example-modal-sizes-title"
            dialogClassName="modal-90w"
        >
            <div style={{display:'flex',height:'98vh',textAlign:'center'}}>
                {!isMobile &&
                <div style={{width:'100%'}}>
                    <Carousel controls={false} style={{height:'10vh'}} data-interval="100">
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://www.plex.tv/wp-content/uploads/2021/04/corporate-animals-hero-apr-2021.jpg"
                            alt="First slide"
                            style={{height:'98vh'}}
                            />
                            <Carousel.Caption style={{marginBottom:'73vh'}}>
                            <h3>Let the streaming begin</h3>
                            <p>Watch thousands of free movies and TV shows, as well as stream your own personal collection of movies, TV episodes, music and podcasts!</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://www.plex.tv/wp-content/uploads/2021/04/the-illusionist-hero-apr-2021.jpg"
                            alt="Second slide"
                            style={{height:'98vh'}}
                            />
                    
                                
                        <Carousel.Caption style={{marginBottom:'73vh'}}>
                            <h3>Let the streaming begin</h3>
                            <p>Watch thousands of free movies and TV shows, as well as stream your own personal collection of movies, TV episodes, music and podcasts!</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://www.plex.tv/wp-content/uploads/2021/04/train-to-busan-hero-apr-2021.jpg"
                            alt="Third slide"
                            style={{height:'98vh'}}
                            />
                    
                            
                            <Carousel.Caption style={{marginBottom:'73vh'}}>
                                <h3>Let the streaming begin</h3>
                                <p>Watch thousands of free movies and TV shows, as well as stream your own personal collection of movies, TV episodes, music and podcasts!</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                }
                <div style={{width:'100vh',padding:'15px'}}>
                    <div style={{display:'flex'}}>
                        <h2 style={{marginLeft:'70px',marginTop:'20px'}}>Create yout free account</h2> 
                        <CloseButton onClick={() => setShow(false)} style={{marginLeft:'auto',border:'2px solid silver',borderRadius:'50%',padding:'15px',width:'1px',height:'1px',color:'silver'}} />
                    </div>
                    <p style={{marginTop:'20px',marginBottom:'40px'}}>No credit card required</p>
                    <Button variant='transparent' style={{width:'90%',border:'2px solid black',marginBottom:'2vh',height:'5vh',fontWeight:'600'}}><FcGoogle style={{fontSize:'20px',marginRight:'10px'}}/>Continue with Google</Button><br/>
                    <Button style={{width:'90%',marginBottom:'2vh',height:'5vh',fontWeight:'600'}}><GrFacebook style={{fontSize:'20px',marginRight:'10px'}} />Continue with Facebook</Button><br/>
                    <Button variant='dark' style={{width:'90%',marginBottom:'2vh',height:'5vh',fontWeight:'600'}}><GrApple style={{fontSize:'20px',marginRight:'10px'}}/>Continue with Apple</Button>
                    <hr/>
                    <div style={{display:'flex',flexDirection:'column',padding:'15px'}}>
                        {isLogin?
                        <>
                            <TextField
                                id="standard-email"
                                label="Email address - Email address is required"
                                type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="standard"
                                style={{marginBottom:'40px',marginTop:'15px'}}
                            />
                            <TextField
                                id="standard-email"
                                label="Create password - Password is required"
                                type="password"
                                InputLabelProps={{
                                    shrink: true
                                }}
                                style={{placeholder:'sadsd',marginBottom:'30px'}}
                                variant="standard"
                            />
                            <Button variant='warning' style={{width:'100%',padding:'15px',color:'white',fontWeight:'700'}}>
                                Create an Account
                            </Button>
                            <p style={{textAlign:'center',marginTop:'30px'}}>Already have an account? <Link onClick={() => {
                                setShow(true)
                                setIsLogin(false)
                            }}  style={{fontWeight:'680',marginLeft:'4px'}}>Sign In</Link></p>
                        </>
                        :
                        <>
                            <TextField
                                id="standard-email"
                                label="Email address"
                                type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="standard"
                                style={{marginBottom:'40px',marginTop:'15px'}}
                            />
                            <TextField
                                id="standard-email"
                                label="Password"
                                type="password"
                                InputLabelProps={{
                                    shrink: true
                                }}
                                style={{placeholder:'sadsd',marginBottom:'30px'}}
                                variant="standard"
                            />
                            <Button variant='warning' style={{width:'100%',padding:'15px',color:'white',fontWeight:'700'}}>
                                Sign In
                            </Button>
                            <p style={{textAlign:'center',marginTop:'30px'}}>Need an account? Press the Google, Facebook, or Apple buttons above, or <Link onClick={() => {
                                setShow(true)
                                setIsLogin(true)
                            }}  style={{fontWeight:'680',marginLeft:'4px'}}>sign up with email</Link></p>
                        </>
                        }
                        <p style={{marginTop:'40px'}}>By creating an account or continuing to use a Plex application, website, or software, you acknowledge and agree that you have accepted the <span style={{fontWeight:'680'}}>Terms of Service</span>T and have reviewed the <span style={{fontWeight:'680'}}>Privacy Policy</span>.</p>
                    </div>
                </div>
            </div>
        </Modal>
    )
  }

  return (
    <div className='NavbarCmp'>
        <Navbar bg="black" variant='dark' expand="sm" className='Navbar'>

            <Navbar.Brand href="#home" className='brand'><img src='https://www.plex.tv/wp-content/themes/plex/assets/img/plex-logo.svg' width='60px' /></Navbar.Brand>

            <InputGroup size="sm" className='search-group'>
                <Form.Control
                    aria-label="Large"
                    placeholder='Find Movies & TV'
                    className='search-input'
                    style={{borderRadius:'20px'}}
                    aria-describedby="inputGroup-sizing-sm"
                />
            </InputGroup>

            <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggle' />
            
            <Navbar.Collapse id="basic-navbar-nav">
            <div className='links'>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Free Movies & TV</Nav.Link>
                    <Nav.Link href="#link">Features</Nav.Link>
                    <Nav.Link href="#link">Download</Nav.Link>
                    <Nav.Link href="#link">News</Nav.Link>
                    <div style={{borderLeft:'1px solid white'}}></div>
                    <Nav.Link onClick={() => {
                        setShow(true)
                        setIsLogin(false)
                    }}  href="#link">Sign In</Nav.Link>
                    <Button onClick={() => {
                        setShow(true)
                        setIsLogin(true)
                    }} size='sm' variant='warning' className='sign-up-btn'>Sign Up</Button>
                </Nav>
            </div>
            </Navbar.Collapse>
        </Navbar>

        <ModalCtx />
    </div>
  )
}
