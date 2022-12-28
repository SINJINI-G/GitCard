import React, { useRef, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './home.css'
import Octocat from '../assets/octo.gif'
import Logo from '../assets/logo1.png'
// import Particles from 'react-particles-js';

const Home = () => {
    const [User, setUser] = useState({
        username: '',
        name: '',
        bio: '',
        repo: '',
        followers: '',
        loc: '',
        status: '',
        profPic: ''
    });
    const navigate = useNavigate();
    const username = useRef();
    const inputHandler = (event) => {
        event.preventDefault();
        console.log(username.current.value, process.env.REACT_APP_GITHUB_API);

        const query = process.env.REACT_APP_GITHUB_API + username.current.value
        fetch(query)
            .then(res => {
                // console.log(res.status, res.ok)
                if (res.ok)
                    return res.json()
                else
                    throw "ERROR"
            })
            .then(res => {
                console.log(res)
                // setUser(res)
                setUser({
                    username: res.login,
                    name: res.name,
                    bio: res.bio,
                    repo: res.public_repos,
                    followers: res.followers,
                    loc: res.location,
                    status: res.hireable?"Hireable":"Occupied",
                    profPic: res.avatar_url
                })
                navigate("/showcard", {state: User})
            })
            .catch(err => console.log("ERROR"))
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
                    type='submit' onClick={inputHandler} />
            </div>

            {/* {Object.keys(User).length === 0 ? "none" : JSON.stringify(User)} */}

        </div>
    )
}

export default Home