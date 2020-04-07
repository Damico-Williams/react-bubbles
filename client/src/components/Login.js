import React, {useState} from "react";
import {axiosWithAuth} from './axiosWithAuth';
const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [user, setUser] = useState({username:'', password:''});

    const handleChange = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
    
        axiosWithAuth()
          .post('/login', {...user})
          .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.payload);
            props.history.push('/bubbles');
          })
          .catch(err => {
            console.log(err);
          });
      };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
         <form onSubmit={handleSubmit}>
              <input
              type='text'
              name='username'
              value={user.username}
              onChange={handleChange}
              />
              <input
              type='password'
              name='password'
              value={user.password}
              onChange={handleChange}
              />
              <button>Submit</button>
          </form>
    </>
  );
};

export default Login;
