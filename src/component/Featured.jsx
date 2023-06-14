import image1 from '../asserts/images/featured/h1.png'
import image2 from '../asserts/images/featured/h2.png'
import image3 from '../asserts/images/featured/h3.png'
import image4 from '../asserts/images/featured/h4.png'
import image5 from '../asserts/images/featured/h6.png'

import './Featured.css'

function Featured() {
    return (
        <div className='featured-container'>
        <h1>Explore our Featured Properties</h1>
        <div className="featured">
            <div className='featured-card'>
                <img src={image1} alt="" />
                <strong>Family House</strong>
                <h5>102 Property</h5>
            </div>
             <div className='featured-card'>
                <img src={image2} alt="" />
                <strong>House & Villa</strong>
                <h5>17 Property</h5>
            </div>
             <div className='featured-card'>
                <img src={image3} alt="" />
                <strong>Apartment</strong>
                <h5>38 Property</h5>
            </div>
             <div className='featured-card'>
                <img src={image4} alt="" />
                <strong>Office & Studio</strong>
                <h5>100 Property</h5>
            </div>
             <div className='featured-card'>
                <img src={image5} alt="" />
                <strong>Villa & Condo</strong>
                <h5>64 Property</h5>
            </div>
        </div>
        </div>
    )
}

export default Featured;