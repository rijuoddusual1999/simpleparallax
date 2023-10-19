import { startTransition, useState } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import ('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fuggles&family=Handjet:wght@300&family=Indie+Flower&family=Lobster&family=Pacifico&family=Poppins:wght@200&family=Roboto+Condensed:wght@300&display=swap');
import flatimage from './images/image1.jpg'
import me from './images/me.webp'
import war from './images/image2.jpg'

function App() {
  

  return (
    <div>
      <Parallax pages={5} style={{top: '0', left: '0' ,position: 'absolute'}}>
      <ParallaxLayer factor={4} offset={0}   style={{ textAlign: 'center', backgroundImage: `url(${flatimage})`,
            backgroundSize: 'cover',}}>
           
      </ParallaxLayer>
      <ParallaxLayer factor={1} offset={4}  style={{textAlign: 'center', backgroundImage:`url(${war})`,backgroundSize: 'cover'}}>
         
      </ParallaxLayer>


      <ParallaxLayer sticky={{start: 0.9, end:4}} style= {{display:'flex', justifyContent: 'center'}}> 
      <img src={me} />
      </ParallaxLayer>

      <ParallaxLayer
          offset={0.5}
          speed={0.5}
          onClick={() => ref.current.scrollTo(3)}
        >
           <h1 style={{textAlign: 'center'}}><p>This is colossaly retarded</p> 
 <p>I can't even say anything</p></h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={4.5}
          speed={0.5}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h1 style={{textAlign: 'center'}}><p>All apologies for visiting the site</p> 
          </h1>
        </ParallaxLayer>

        

      </Parallax>

    </div>
  )
}

export default App
