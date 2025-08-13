import React, { useState } from 'react';
import './App.css'; // Assuming styles are defined in App.css

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('种植者'); // Default role

    const handleRegister = (e) => {
        e.preventDefault();
        // Call the registration API here
        console.log('Registering:', { username, password, role });
    };

    return (
        <div className="register-container">
            <h2>注册</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label>用户名:</label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>密码:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>角色:</label>
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="种植者">种植者</option>
                        <option value="服务机构管理者">服务机构管理者</option>
                    </select>
                </div>
                <button type="submit">注册</button>
            </form>
        </div>
    );
};

export default Register;