import React, { useState } from 'react';
import { useNavigate } from 'react-router';




const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        username: "",
        mobile: "",
        description: ""
    });
    let navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]:  value
        })
    }

    const {name, email, password, username, mobile, description} = formData;

    const handleSubmit = (e) => {
        e.preventDefault();
        /*const payload = {
            name,
            email,
            password,
            username,
            mobile,
            description
        }*/

        const payloadjson = JSON.stringify(formData);

        fetch(`https://masai-api-mocker.herokuapp.com/auth/register`,{
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
            console.log("Registration Success");
        })
        .catch((err) => {
          console.log("Registration failed, user already exists")
        })

        setFormData(        {
          name: "",
          email: "",
          password: "",
          username: "",
          mobile: "",
          description: ""
      })
    }

    const handleClick = () => {
      navigate('/login')
    }

  return (
    <>
      <h1>Registration Form</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <input 
                type="text"
                name="name"
                placeholder='Enter name'
                onChange={handleChange}
                value={name}
                />
            </div>
            <div>
                <input 
                type="email"
                name="email"
                placeholder='Enter email'
                onChange={handleChange}
                value={email}
                />
            </div>
            <div>
                <input 
                type="password"
                name="password"
                placeholder='Enter password'
                onChange={handleChange}
                value={password}
                />
            </div>
            <div>
                <input 
                type="username"
                name="username"
                placeholder='Enter username'
                onChange={handleChange}
                value={username}
                />
            </div>
            <div>
                <input 
                type="number"
                name="mobile"
                placeholder='Enter mobile no.'
                onChange={handleChange}
                value={mobile}
                />
            </div>
            <div>
                <input 
                type="text"
                name="description"
                placeholder='Enter description'
                onChange={handleChange}
                value={description}
                />
            </div>
            <input type="submit" value="Submit" />
        </form>
        <button onClick={handleClick}>Redirect to Login Page</button>
    </>
  )
}

export { Register };