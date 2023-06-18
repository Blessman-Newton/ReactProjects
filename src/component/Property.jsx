import React from 'react';
import Data from '../Data/Data'
import './Property.css';



function Property() {
    const getData = () => {
        const list = [];
        
        Data.map((data,index) => {
            return list.push(
                <div key={index} className='property'>                       
                    <img src={data.imageHolder} alt="house" />
                    <div className='sale'>
                        <span>{data.state}</span>
                        <i className='fa fa-heart'></i>
                    </div>
                    <div className='location'>
                        <strong>{data.location}</strong>
                        <b><i className="fa fa-map-marker" aria-hidden="true"></i> {data.street}</b>
                    </div>
                    <div>
                        <hr />
                        <div className='button'>
                        <button>{data.price}</button>
                        <b>{data.property}</b>
                    </div>
                    </div> 
                </div>
                    
        );
        
    });
         return list;
 
    };
    

    

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
                
                    {getData()};
                </div> 
            </div> 
        
    )
}

export default Property;