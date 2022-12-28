import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/logo1.png'
import './login.css'

const Login = () => {
  const navigate = useNavigate();
  const nameRef = useRef();
  const tweeterRef = useRef();
  const linkedinRef = useRef();

  const clickHandler = () => {
    // navigate("/showcard", { state: { username: username.current.value } })
  }

  return (
    <div className='home__container'>

      <img src={Logo} height={100} width={100}
        style={{ position: 'absolute', top: 10, left: 10 }}
        className="site-logo"
      />

      <input type="text"
        className="input__box glow"
        placeholder="Full Name"
      // ref={username}
      />

      <input type="text"
        className="input__box glow"
        placeholder="Twitter URL"
      // ref={username}
      />

      <input type="text"
        className="input__box glow"
        placeholder="LinkedIn URL"
      // ref={username}
      />

      {/* <input className="submitBtn" value="Submit"
        type='submit' onClick={onClickHandler} /> */}

    </div>
  )
}

export default Login