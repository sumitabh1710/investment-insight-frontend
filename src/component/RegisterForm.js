import React, { useState } from 'react';
import { registerUser } from '../api';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        preference: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await registerUser(formData);
            if (response.status === 201) {
                alert('User registered successfully!');
            }
        } catch (error) {
            alert('Registration failed: ' + error.response.data);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Preference:</label>
                <input
                    type="text"
                    name="preference"
                    value={formData.preference}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterForm;
