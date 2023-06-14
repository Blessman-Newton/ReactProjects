import image from '../asserts/images/house/26b1ec666b633fa6e54b2279b5c09e01.jpg';
import image1 from '../asserts/images/house/701e1a6540d43a5eff6ee56767b9a4eb.jpg';
import image2 from '../asserts/images/house/a4a05a906fb3ec517ed69e0fb5d2ca54.jpg';
import image3 from '../asserts/images/house/e413a29b3e864243eb8f30b9f236fe9e.jpg';
import image4 from '../asserts/images/house/f4d252eff9876c0d7a6739f66f0ac00e.jpg';
import image5 from '../asserts/images/house/3ea37a38326af9cc9eea457961ca9f10.jpg';
import './Property.css';

function Property() {
    return (
        <div className='recent-conatiner'>
            <span>
                <h2>Recent Property Listed</h2>
                <p>Use our advanced search tool 
                to narrow down your options and 
                find the perfect property based 
                on your specific requirements.
                 Select your desired location,
                 property type, price range, and more.</p>
            </span>
            <div className='property-conatiner'>
                <div className='property'>
                    <img src={image} alt="" />
                    <div className='sale'>
                        <span>for sale</span>
                        <i className='fa fa-heart'></i>
                    </div>
                    <div className='location'>
                        <strong>Brick Lane Realty</strong>
                        <b><i className="fa fa-map-marker" aria-hidden="true"></i> 210 Zirak Road, Canada</b>
                    </div>
                    <dir>
                        <hr />
                        <div className='button'>
                        <button>$ 2,500</button>
                        <b>Offices</b>
                    </div>
                    </dir>
                </div>
                <div className='property'>
                    <img src={image2} alt="" />
                    <div className='sale'>
                        <span>for sale</span>
                        <i className='fa fa-heart'></i>
                    </div>
                    <div className='location'>
                        <strong>Brick Lane Realty</strong>
                        <b><i className="fa fa-map-marker" aria-hidden="true"></i> 210 Zirak Road, Canada</b>
                    </div>
                    <dir>
                        <hr />
                        <div className='button'>
                        <button>$ 2,500</button>
                        <b>Offices</b>
                    </div>
                    </dir>
                </div>
                <div className='property'>
                    <img src={image3} alt="" />
                    <div className='sale'>
                        <span>for sale</span>
                        <i className='fa fa-heart'></i>
                    </div>
                    <div className='location'>
                        <strong>Brick Lane Realty</strong>
                        <b><i className="fa fa-map-marker" aria-hidden="true"></i> 210 Zirak Road, Canada</b>
                    </div>
                    <dir>
                        <hr />
                        <div className='button'>
                        <button>$ 2,500</button>
                        <b>Offices</b>
                    </div>
                    </dir>
                </div>
                <div className='property'>
                    <img src={image4} alt="" />
                    <div className='sale'>
                        <span>for sale</span>
                        <i className='fa fa-heart'></i>
                    </div>
                    <div className='location'>
                        <strong>Brick Lane Realty</strong>
                        <b><i className="fa fa-map-marker" aria-hidden="true"></i> 210 Zirak Road, Canada</b>
                    </div>
                    <dir>
                        <hr />
                        <div className='button'>
                        <button>$ 2,500</button>
                        <b>Offices</b>
                    </div>
                    </dir>
                </div>
                <div className='property'>
                    <img src={image5} alt="" />
                    <div className='sale'>
                        <span>for sale</span>
                        <i className='fa fa-heart'></i>
                    </div>
                    <div className='location'>
                        <strong>Brick Lane Realty</strong>
                        <b><i className="fa fa-map-marker" aria-hidden="true"></i> 210 Zirak Road, Canada</b>
                    </div>
                    <dir>
                        <hr />
                        <div className='button'>
                        <button>$ 2,500</button>
                        <b>Offices</b>
                    </div>
                    </dir>
                </div>
                <div className='property'>
                    <img src={image1} alt="" />
                    <div className='sale'>
                        <span>for sale</span>
                        <i className='fa fa-heart'></i>
                    </div>
                    <div className='location'>
                        <strong>Brick Lane Realty</strong>
                        <b><i className="fa fa-map-marker" aria-hidden="true"></i> 210 Zirak Road, Canada</b>
                    </div>
                    <dir>
                        <hr />
                        <div className='button'>
                        <button>$ 2,500</button>
                        <b>Offices</b>
                    </div>
                    </dir>
                </div>
            </div>
        </div>
    )
}

export default Property;