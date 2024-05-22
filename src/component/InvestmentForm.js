// src/InvestmentForm.js
import React, { useState } from 'react';

const InvestmentForm = ({ onSubmit }) => {
    const [prompt, setPrompt] = useState('');
    const [userId, setUserId] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(userId, prompt);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>User ID:</label>
                <input 
                    type="text" 
                    value={userId} 
                    onChange={(e) => setUserId(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Prompt:</label>
                <textarea 
                    value={prompt} 
                    onChange={(e) => setPrompt(e.target.value)} 
                    required 
                />
            </div>
            <button type="submit">Get Insights</button>
        </form>
    );
};

export default InvestmentForm;
