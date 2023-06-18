import { Link } from 'react-router-dom';
import  './Navbar.css'
import { Component } from 'react'

class Navbar extends Component {
    state = {clicked : false};
    handClick = () => {
        this.setState({clicked:
        !this.state.clicked})
    };
    
    render () {
    const linkClassName = 'nav-list';
    return (
        <>
            <nav className="navigation">
                <div className="logo">
                    <Link to="/">  
                        <svg id="logo-13" width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.98441 29.2899C1.98441 27.0299 2.42954 24.7919 3.29444 22.704C4.15935 20.6159 5.42701 18.7187 7.02513 17.1206C8.62324 15.5225 10.5204 14.2548 12.6084 13.3899C14.6965 12.5251 16.9344 12.0799 19.1945 12.0799V29.2899H1.98441Z" className="ccustom" fill="#442781"></path> <path d="M1.98441 29.2899C1.98441 31.55 2.42954 33.7879 3.29444 35.876C4.15935 37.964 5.42701 39.8612 7.02513 41.4593C8.62324 43.0574 10.5204 44.3251 12.6084 45.19C14.6965 46.0549 16.9344 46.5 19.1945 46.5V29.2899H1.98441Z" className="ccompli1" fill="#61459C"></path> <path d="M36.4043 29.2899C36.4043 31.55 35.9595 33.7879 35.0947 35.876C34.2298 37.964 32.9622 39.8612 31.3638 41.4593C29.7657 43.0574 27.8685 44.3251 25.7804 45.19C23.6925 46.0549 21.4545 46.5 19.1945 46.5V29.2899H36.4043Z" className="ccompli2" fill="#A992DB"></path> <path d="M47.0156 14.422C47.0156 21.5586 41.23 27.344 34.0935 27.344H21.1716V14.422C21.1716 7.2854 26.957 1.5 34.0935 1.5C41.23 1.5 47.0156 7.2854 47.0156 14.422Z" className="ccustom" fill="#FF7917"></path> </svg>
                    </Link>
                </div>
                <ul id="nav-items" className={this.state.clicked ? 
                'nav-items active' : 'nav-items'}>
                    <li className={linkClassName}><Link to="/">Home</Link></li>
                    <li className={linkClassName}><Link to="/about">Our Services</Link></li>
                    <li className={linkClassName}><Link to="/">Properties</Link></li>
                    <li className={linkClassName}><Link to="/">Agents</Link></li>
                    <li className={linkClassName}><Link to="/">About Us</Link></li>
                    <li className={linkClassName}><Link to="/">Contact Us</Link></li>
                </ul>
                <div className='hamburger' onClick={this.handClick}>
                    <i className={this.state.clicked ? 
                    'fa fa-times' :'fa fa-bars' }></i>
                </div>
            </nav>
          
        </>
    )
}
}

export default Navbar;