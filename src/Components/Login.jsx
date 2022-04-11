import React, { useState } from 'react';
import { useNavigate } from 'react-router';


const Login = () => {
    const [formDetails, setFormDetails] = useState({
        username: "",
        password: ""
    })
    let navigate = useNavigate();


    const handleChange = (e) => {
        const { name, value } = e.target;
    
        setFormDetails({
            ...formDetails,
            [name]: value
        });
    }
    
    const { username, password } = formDetails;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            username,
            password
        }
    
        const payloadjson = JSON.stringify(payload);
    
        fetch(`https://masai-api-mocker.herokuapp.com/`,{
            method: "POST",
            body: payloadjson,
            headers: {
                "content-type": "application/json"
            }
        })
        .then((res) => {
            res.json();
        })
        .then((res) => {
            console.log("cc4a5ce1b3df48aec5d22d1f16b894a0b894eccc")
        })
        .catch((err) => {
          console.log("Invalid login creadentials")
        })

        navigate('/')
    }
    
  return (
    <form onSubmit={handleSubmit}>
        <h1>Login Page</h1>
        <input
           name="username"
           type="text"
           placeholder='Username'
           value={username}
           onChange={handleChange} 
        />
        <br />
        <input
           name="password"
           type="password"
           placeholder='Password'
           value={password}
           onChange={handleChange} 
        />
        <br />
        <input type="submit" value="LOGIN" />
    </form>
  )
}

export { Login };