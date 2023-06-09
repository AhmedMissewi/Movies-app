import React, {useHistory,useState} from 'react'
import "./Login.css"; 
import axios from 'axios';


export const Register = (props) => {
  //  const [fullName, setFullName] = useState ("");
  //  const [email, setEmail] = useState ("");
  //  const [password, setPassword] = useState ("");

  //  const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(email);
  //  }
   
  //  const history = useHistory()
    const [registerData, setRegisterData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const handleSubmit = async (e) => {
      e.preventDefault();
      // dispatch(login());
      console.log(registerData);
      const {fullName, email, password, confirmPassword} = registerData
      if (!fullName) {
          return ('fullname is required')
      }
      if (!email) {
          return ('Email is required')
      }
      if (!password) {
          return ('Password is required')
      }
      if (!confirmPassword) {
          return ('You have to confirm your password')
      }
      if (password !== confirmPassword) {
          return ('Passwords mismatch')
      }
      try {
          const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, { fullName, email, password })
          console.log({res});
          if (res.data && res.data.message && res.data.user && res.data.token) {
             return (res.data.message)
              // localStorage.setItem('token', res.data.token)
              // localStorage.setItem('user', JSON.stringify(res.data.user))
          }
          // history.push('/login')
          // dispatch(login(res.data.user, res.data.token))
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
  function handleChange(e) {
      setRegisterData(prevItemData => ({...prevItemData, [e.target.name]: e.target.value}))
  }

  


  return (
    <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={registerData.fullName}  onChange={handleChange}  type='text' name='fullName' id="name" placeholder="full Name" />
            <label htmlFor="email">email</label>
            <input value={registerData.email} onChange={handleChange}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={registerData.password} onChange={handleChange} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Register</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch ("login") }>Already have an account? Login here.</button>
    </div>
  )
}

export default Register ;