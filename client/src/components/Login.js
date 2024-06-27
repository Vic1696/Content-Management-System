import React, { useState } from 'react';
import { loginUser} from '../services/api';
// import { Form } from 'react-router-dom';

const Login =() => {
        const [formData, setFormData] = useState ({
            username: '',
            password: '',
        });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
           const response = await loginUser(formData);
           localStorage.setItem('token', response.data.token);
            alert ('User Logged in successfully');
        } catch (error) {
            alert ('Error loggin in');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                name='username'
                value={formData.username}
                onChange={handleChange}
                placeholder='Username'
                />

                <input
                type='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
                placeholder='Password' 
                />

                <button type="submit">Login</button>
        </form>
    );
}

export default Login;