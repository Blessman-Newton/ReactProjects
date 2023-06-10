import Home from '../asserts/images/backIcons/home.jfif';
import './Hero.css'

function Hero() {
    return (

        <div className="hero" id="Home" >
            <article className='hero-article'>
                <div className='heroText'>
                    <h2>Welcome to XYZ Real Estate</h2>
                    <b>Discover Your Dream Home</b>
                </div>
                <p>
                    Are you looking for the perfect property to call home? 
                    At XYZ Real Estate, we specialize in helping you find your
                     dream property in the most desirable neighborhoods. With our extensive listings,
                      personalized service, and expertise in the local 
                    real estate market, we are here to guide you every step of the way.
                </p>
            </article>
            
            <img src={Home} alt="home-image" />
            
        </div>
    )
}

export default Hero;