import React from 'react'
import './home.css'
import Octocat from '../assets/octo.gif'
import Logo from '../assets/logo1.png'
// import Particles from 'react-particles-js';

const Home = () => {
    return (
        <div className='home__container'>
            <img src={Logo} height={100} width={100}
                style={{position: 'absolute', top: 10, left: 10 }}
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
                />
            <input className="submitBtn" value="Push"
                type='submit'/>
            </div>

        </div>
    )
}

export default Home