import React from 'react'
import './home.css'
import Logo from '../assets/logo1.png'
import Card from './Card'
import { useLocation } from 'react-router-dom'

const ShowCard = () => {
    const location = useLocation();
    return (
        <div className='home__container'>
            <img src={Logo} height={100} width={100}
                style={{ position: 'absolute', top: 10, left: 10 }}
                className="site-logo"
                />

            <Card />
            {location.state.name}
        </div>
    )
}

export default ShowCard