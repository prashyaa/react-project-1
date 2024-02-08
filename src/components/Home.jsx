import React from 'react';
import vg from '../assets/2.webp';
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube,AiFillInstagram } from 'react-icons/ai'

const Home = () => {
  return (
  <>
    <div className='home' id='home'>
        <main>
            <h1>BoomStar</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
        </main>
    </div>

    <div className="home2">
      <img src={vg} alt="" />
      <div>
        <p>We are your one and only solution to the tech problems you face. Lorem ipsum dolor sit amet consectetur.</p>
      </div>
    </div>

    <div className="home3" id='about'>
      <div>
        <h1>Who we are?</h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, deserunt! Perferendis, assumenda! Delectus, enim dolores quasi repudiandae debitis Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem deleniti ex perspiciatis quisquam a reprehenderit iste quo obcaecati voluptatum expedita. architecto autem culpa tenetur neque. Ab voluptates amet culpa laboriosam ullam hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque assumenda ratione dolore repellendus quisquam aperiam, sequi earum consequuntur, vero ipsam cupiditate maiores ea ipsa fugiat, aut aspernatur esse suscipit tempora?</p>
      </div>
    </div>

    <div className="home4" id='brands'>
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{
            animationDelay:"0.3s"
          }}>
            <AiFillGoogleCircle/>
            <p>Google</p>
          </div>
          <div style={{
            animationDelay:"0.5s"
          }}>
            <AiFillAmazonCircle/>
            <p>Amazon</p>
          </div>
          <div style={{
            animationDelay:"0.7s"
          }}>
            <AiFillYoutube/>
            <p>Youtube</p>
          </div>
          <div style={{
            animationDelay:"1s"
          }}>
            <AiFillInstagram/>
            <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>
  </>
  )
}

export default Home;
