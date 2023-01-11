import React, { useEffect,useState } from 'react'
import Carousel from 'better-react-carousel'

export const MoviesRecommendCmp = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3fcc40fb90msh5e5417aa2b3c53ep138fc7jsnc6cb7b292f67',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    };

    const [img,setImg] = useState()
    const [img1,setImg1] = useState()
    const [img2,setImg2] = useState()
    const [img3,setImg3] = useState()
    const [img4,setImg4] = useState()
    const [img5,setImg5] = useState()
    const [img6,setImg6] = useState()
    const [img7,setImg7] = useState()
    
    fetch('https://moviesdatabase.p.rapidapi.com/titles/search/title/Avengers:%20Endgame?exact=true&titleType=movie&limit=50', options)
	.then(response => response.json())
	.then(response => setImg(response.results[0].primaryImage.url))
	.catch(err => console.error(err));

    fetch('https://moviesdatabase.p.rapidapi.com/titles/search/title/Joker?exact=true&titleType=movie&limit=50', options)
	.then(response => response.json())
	.then(response => setImg1(response.results[1].primaryImage.url))
	.catch(err => console.error(err));

    fetch('https://moviesdatabase.p.rapidapi.com/titles/search/title/Interstellar?exact=true&titleType=movie&limit=50', options)
	.then(response => response.json())
	.then(response => setImg2(response.results[0].primaryImage.url))
	.catch(err => console.error(err));

    fetch('https://moviesdatabase.p.rapidapi.com/titles/search/title/The%20Godfather?exact=true&titleType=movie&limit=50', options)
	.then(response => response.json())
	.then(response => setImg3(response.results[0].primaryImage.url))
	.catch(err => console.error(err));

    fetch('https://moviesdatabase.p.rapidapi.com/titles/search/title/The Wolf of Wall Street?exact=true&titleType=movie&limit=50', options)
	.then(response => response.json())
	.then(response => setImg4(response.results[0].primaryImage.url))
	.catch(err => console.error(err));

    fetch('https://moviesdatabase.p.rapidapi.com/titles/search/title/The Dark Knight?exact=true&titleType=movie&limit=50', options)
	.then(response => response.json())
	.then(response => setImg5(response.results[0].primaryImage.url))
	.catch(err => console.error(err));

    fetch('https://moviesdatabase.p.rapidapi.com/titles/search/title/The Lord of the Rings: The Return of the King?exact=true&titleType=movie&limit=50', options)
	.then(response => response.json())
	.then(response => setImg6(response.results[0].primaryImage.url))
	.catch(err => console.error(err));

    fetch('https://moviesdatabase.p.rapidapi.com/titles/search/title/American Psycho?exact=true&titleType=movie&limit=50', options)
	.then(response => response.json())
	.then(response => setImg7(response.results[1].primaryImage.url))
	.catch(err => console.error(err));

  return (
    <div style={{marginLeft:'10%',marginRight:'10%',marginTop:'5vh',marginBottom:'5vh'}}>
        <Carousel cols={4} rows={1} gap={10} loop autoplay={2000} hideArrow style={{animationDuration:'4s'}}> 
            <Carousel.Item>
                <img width="100%" height='100%' src={img} />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" height='100%' src={img1} />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" height='100%' src={img2} />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" height='100%' src={img3} />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" height='100%'src={img4} />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" height='100%' src={img5} />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" height='100%' src={img6} />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" height='100%' src={img7} />
            </Carousel.Item>
        </Carousel>
    </div>
  )
}
