import React, { useState } from 'react';
import { registerUser} from '../services/api';
// import { Form } from 'react-router-dom';

const Register =() => {
        const [formData, setFormData] = useState ({
            username: '',
            password: '',
            role: 'viewer', //Default Roke
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
            await registerUser(formData);
            alert ('User registered successfully');
        } catch (error) {
            alert ('Error registering user');
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

                <select name='role' value={formData.role} onChange={handleChange}>
                    <option value="viewer">Viewer</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                </select>
                <button type="submit">Register</button>
        </form>
    );
}

export default Register;