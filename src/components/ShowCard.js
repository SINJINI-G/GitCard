import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './home.css'
import Logo from '../assets/logo1.png'
import Card from './Card'

const ShowCard = () => {
    const [User, setUser] = useState(null);

    const location = useLocation();
    const username = location.state.username;

    useEffect(() => {
        const query = process.env.REACT_APP_GITHUB_API + username

        const fetchUser = async () => {
            try {
                let res = await fetch(query)

                if (!res.ok)
                    throw new Error(`Error! status: ${res.status}`);

                res = await res.json()

                // console.log(res);

                setUser({
                    username: res.login,
                    name: res.name,
                    bio: res.bio,
                    repo: res.public_repos,
                    followers: res.followers,
                    loc: res.location,
                    status: res.hireable ? "Hireable" : "Occupied",
                    profpic: res.avatar_url
                })
            }
            catch (error) {
                console.log(error)
            }
        }

        fetchUser();
    }, [])

    return (
        <div className='home__container'>
            <a href="/">
                <img src={Logo} height={100} width={100}
                    style={{ position: 'absolute', top: 10, left: 10 }}
                    className="site-logo"
                />
            </a>

            {User ? <Card data={User} /> : <h2>Loading...</h2>}

        </div>
    )
}

export default ShowCard