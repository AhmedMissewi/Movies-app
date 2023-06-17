import React,{useState} from 'react'
import "./Login.css";
import { login } from './redux/actions/userActionCreators';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Input from './components/Input';
import Form from './components/Form';


export const Login = (props) => {
  //  const [email, setEmail] = useState ("");
  //  const [password, setPassword] = useState ("");

  //  const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(email);
  //  }

  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
      console.log({email, password});
      e.preventDefault();
      dispatch(login());
      if (!email) {
          return ('Email is required')
      }
      if (!password) {
          return ('Password is required')
      }
      try {
          const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, { email, password })
          console.log({res});
          if (res.data && res.data.message && res.data.user && res.data.token) {
              return(res.data.message)
              localStorage.setItem('token', res.data.token)
              localStorage.setItem('user', JSON.stringify(res.data.user))
          }
          dispatch(login(res.data.user, res.data.token))
      } catch (err) {
          console.log({err});
          if (err && err.response && err.response.data && err.response.data.error && err.response.data.error.details) {
              return (err.response.data.error.details[0] && err.response.data.error.details[0].message)
          }
          if (err && err.response && err.response.data && err.response.data.error) {
              return (err.response.data.error)
          }
      }
  }

  return (
    <div className="auth-form-container">
      
            <h2>Login</h2>
            <form className="login-form" >
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit" onSubmit={handleSubmit}>Log In</button>
            </form>
            <button className="link-btn" onClick={ () => props.onFormSwitch  ("register")}> Don't have an account? Register here.</button>
        </div>
  )
}

export default Login ;
