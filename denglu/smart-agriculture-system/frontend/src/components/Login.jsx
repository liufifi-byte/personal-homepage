import React, { useState } from 'react';
import './App.css';
import { loginUser } from '../api/auth';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('planter'); // Default role is planter
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await loginUser({ username, password, role });
            if (response.status === 200) {
                // Handle successful login (e.g., redirect to dashboard)
            } else {
                setError('Invalid credentials');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <h2>智慧农业系统登录</h2>
            <form onSubmit={handleLogin}>
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
                        <option value="planter">种植者</option>
                        <option value="manager">服务机构管理者</option>
                    </select>
                </div>
                {error && <div className="error">{error}</div>}
                <button type="submit">登录</button>
            </form>
            <div className="switch-role">
                <p>切换到 <a href="/register">注册</a></p>
            </div>
        </div>
    );
};

export default Login;