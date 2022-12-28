import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './home.css'
import Octocat from '../assets/octo.gif'
import Logo from '../assets/logo1.png'
// import Particles from 'react-particles-js';

const Home = () => {

    const navigate = useNavigate();
    const username = useRef();

    const clickHandler = () => {
        navigate("/showcard", { state: {username: username.current.value} })
    }

    return (
        <div className='home__container'>

            <img src={Logo} height={100} width={100}
                style={{ position: 'absolute', top: 10, left: 10 }}
                className="site-logo"
            />

            <img src={Octocat} height={100} width={100}
                style={{ marginLeft: -400, marginTop: -100 }}
                className="octocat"
            />

            <div className='searchbar'>
                <input type="text"
                    className="username__box glow"
                    placeholder="GitHub ID"
                    ref={username}
                />
                <input className="submitBtn" value="Push"
                    type='submit' onClick={clickHandler} />
            </div>
        </div>
    )
}

export default Home