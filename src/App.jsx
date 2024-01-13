import './App.css';
import React, { useRef, useState } from 'react'
import heart1 from './resources/heart.avif'
import heart2 from './resources/slide1.jpg'
import heart3 from './resources/slide2.jpg'
import heart4 from './resources/slide3.jpg'
import heart5 from './resources/slide4.webp'
import k1 from './resources/k1.webp'
import k2 from './resources/k2.jpg'
import k3 from './resources/k3.webp'
import k4 from './resources/k4.webp'
import k5 from './resources/k5.jpg'
import k6 from './resources/k6.webp'
import cea from './resources/cea.png'
import alma from './resources/alma.jpg'
import { useEffect } from 'react';

const App = ()=> {
  const text = {
    one: 'Heart’s passion for painting shines through in her artwork and extends even to her luxury bags. With each stroke of her brush, she transforms these bags into unique masterpieces, infused with her creativity and love for art. It’s evident that Heart wholeheartedly embraces the world of art and is deeply fascinated by it, making it an integral part of her creative journey. Her commitment to her craft is truly inspiring, and her painted bags are a testament to her artistic prowess. Keep following Heart’s artistic career to witness more of her captivating creations.'
    ,two: 'Love Maria Payawal Ongpauco-Escudero or simply known as Ms. Heart Evangelista. She is a famous fashion influencer and artist. Heart Evangelista was very good when it came to fashion, and she is also famous because of luxury collections. She is well known as independent and hardworking woman as she stated that she doesn’t want to be “Ms. Hingi.” She is working hard to buy the things she wants.'
  }
  const heartImg = useRef()
  const heartText = useRef()
  const [heartNum, setHeartNum] = useState(1)
  const [heartInterval, setHeartInterval] = useState(0)

  useEffect(()=> {
    const num = setInterval(()=> {
      setHeartNum(prev => prev === 5 ? 1 : prev + 1)
    }, 5000)
    return ()=> clearInterval(num)
  },[])

  useEffect(()=> {
    switch(heartNum) {
      case 2:
        heartImg.current.src = heart2
        break
      case 3:
        heartImg.current.src = heart3
        break
      case 4:
        heartImg.current.src = heart4
        break
      case 5:
        heartImg.current.src = heart5
        break
      default: 
        heartImg.current.src = heart1
    }
    // heartText.current.textContent = heartNum < 3 ? text.one : text.two
  }, [heartNum])

  return (
    <>
      <div className="header">
        <div>
          <p>Milestone</p>
          <ul>
            <li>Heart</li>
            <li>KPop</li>
            <li>Contact</li>
          </ul>
          <div></div>
        </div>
      </div>
      <div className="hero">
        <div>
          <p>Success doesn't happen by chance. It's the result of dedication, persistence, continuous learning, sacrifice, and above all, a genuine passion for what you do. Our website aims to spotlight a renowned celebrity known for their exceptional work ethic, inspiring others. Collaborating with Alma Mae Villorente, we'll showcase these hardworking individuals to motivate and encourage our audience.</p>
        </div>
      </div>
      <div className="heart">
        <p>Heart Evangelista</p>
        <div>
          <div>
            <img ref={heartImg} src={heart1} alt="heart" />
            <div>
              <input onChange={()=> setHeartNum(1)} type="radio" className="hearty" name="hearty" checked={heartNum === 1}/>
              <input onChange={()=> setHeartNum(2)} type="radio" className="hearty" name="hearty" checked={heartNum === 2}/>
              <input onChange={()=> setHeartNum(3)} type="radio" className="hearty" name="hearty" checked={heartNum === 3}/>
              <input onChange={()=> setHeartNum(4)} type="radio" className="hearty" name="hearty" checked={heartNum === 4}/>
              <input onChange={()=> setHeartNum(5)} type="radio" className="hearty" name="hearty" checked={heartNum === 5}/>
            </div>
          </div>
          <div>
            <p ref={heartText}>
              Love Maria Payawal Ongpauco-Escudero or simply known as Ms. Heart Evangelista. She is a famous fashion influencer and artist. Heart Evangelista was very good when it came to fashion, and she is also famous because of luxury collections. She is well known as independent and hardworking woman as she stated that she doesn’t want to be “Ms. Hingi.” She is working hard to buy the things she wants.
            </p>
            <p>
            Heart’s passion for painting shines through in her artwork and extends even to her luxury bags. With each stroke of her brush, she transforms these bags into unique masterpieces, infused with her creativity and love for art. It’s evident that Heart wholeheartedly embraces the world of art and is deeply fascinated by it, making it an integral part of her creative journey. Her commitment to her craft is truly inspiring, and her painted bags are a testament to her artistic prowess. Keep following Heart’s artistic career to witness more of her captivating creations.
            </p>
          </div>
        </div>
      </div>
      <div className="customer">
        <p>Heart-painted bags for celebrities like Kim Chui, Jinkee Pacquiao, and Carla Abellana. </p>
      </div>
      <p className='k-intro-italic'>
        In recent times, Korean artists have surged in popularity not just in the Philippines but globally. Their
        impact extends beyond music and K-dramas, reaching people through their appearance and cultural
        influence. Alma Villorente has penned a blog discussing the phenomenon of K-pop and its sway over
        numerous individuals, delving into their lifestyle and the influence they wield over admirers.
      </p>
      <p className='k-intro'>
         K-pop inspires individuals worldwide with its infectious beats and captivating performances, transcending cultural boundaries. Artists embody dedication, resilience, and passion, motivating fans to pursue dreams and embrace creativity, perseverance, and shared experiences.
      </p>
      <div className='k-img-1'>
        <img src={k1} alt="k1" />
        <div>
          <img src={k2} alt="k2" />
          <img src={k3} alt="k3" />
        </div>
      </div>
      <p className='k-intro'>
        K-pop has become more than just a music genre in the world of international entertainment; it is a cultural force that inspires people deeply and crosses boundaries. Because of its contagious beats, captivating choreography, and idols’ unwavering dedication, K-pop has emerged as a universal language of inspiration, motivating people from all walks of life and creating a sense of connection.
      </p>
      <div className="k-img-2">
        <img src={k4} alt="k4" />
      </div>
      <p className="k-intro">
        The colorful and dynamic South Korean genre known as “K-pop” has become a global inspiration that cuts over national borders and connects with people from all walks of life. The dynamic rhythms, striking visuals, and contagious energy of this genre have captured people’s attention and provided a singular source of inspiration for people all over the world. Beyond its addictive songs, K-pop is a symbol of perseverance, commitment, and harmony that inspires individuals from all walks of life to follow their dreams, overcome obstacles, and appreciate the beauty of cultural diversity. K-pop fosters a global community united by shared enthusiasm, creativity, and the universal language of music in a world that craves for connection and understanding.
      </p>
      <div className="k-img-3">
        <img src={k5} alt="k5" />
        <img src={k6} alt="k6" />
      </div>
      <div className="k-intro">
        Its idols’ unwavering devotion has generated a wave of enthusiasm around the world, promoting unity and appreciation for culture. K-pop inspires people all over the world to follow their passions, overcome obstacles, and embrace the transformational power of music by telling tales of tenacity, diverse representation, and the celebration of individuality.
      </div>
      <div className='mid'>
      </div>
      <div className='option'>
        <p>Share this:</p>
        <div>
          <button>
            <i class="fa-brands fa-twitter"></i>
              Twitter
          </button>
          <button>
            <i class="fa-brands fa-facebook"></i>
              Facebook
          </button>
        </div>
        <div>
          <button>
            <i class="reload fa-solid fa-repeat"></i>
              Reblog
          </button>
          <button>
            <i class="fa-regular fa-star"></i>
              Like
          </button>
          <p>5 likes</p>
        </div>
        <div className="creator">
          <span>January 13, 2024</span>
        </div>
      </div>
      <div className="footer">
        <div>
          <div>
            <div>
              <div>
                <img src={cea} alt="cea"/>
                <div>
                  <p>Maria Milena Cea</p>
                  <p>Contact: +63 999 123 1234</p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <img src={alma} alt="alma"/>
                <div>
                  <p>Alma Avisado Villorente</p>
                  <p>Contact: +63 999 123 1234</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p>Email</p>
              <input type="text" id="email"/>
            </div>
            <div>
              <p>Name</p>
              <input type="text" id="name"/>
            </div>
            <textarea id="message" cols="30" rows="10" placeholder="Write a comment ..."></textarea>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
