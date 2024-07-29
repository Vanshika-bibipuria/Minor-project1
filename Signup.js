import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Common/Signup.css';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        FirstName: '',
        LastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if passwords match
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        // Perform form submission (e.g., using fetch or axios)
        console.log(formData);
        alert('Signup successful!');
        
        // Redirect to login page after successful signup
        navigate('/login');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="FirstName">First Name</label>
                <input
                    type="text"
                    id="FirstName"
                    name="FirstName"
                    value={formData.FirstName}
                    onChange={handleChange} // Ensure this is used
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="LastName">Last Name</label>
                <input
                    type="text"
                    id="LastName"
                    name="LastName"
                    value={formData.LastName}
                    onChange={handleChange} // Ensure this is used
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange} // Ensure this is used
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange} // Ensure this is used
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                    type="password"
                    id="confirm-password"
                    name="confirmPassword" // Ensure this matches the state name
                    value={formData.confirmPassword}
                    onChange={handleChange} // Ensure this is used
                    required
                />
            </div>
            <button type="submit">Signup</button>
        </form>
    );
};

export default SignupForm;
