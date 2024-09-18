import React, { useState } from "react";
//Add Style
import './info.css';


const Info = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // اینجا می‌توانید منطق ورود را پیاده‌سازی کنید
        console.log("نام کاربری :", username);
        console.log("رمز عبور :", password);  
    };


return(
    <div className="login-form">
        <h2 className="intro">ورود به حساب کاربری</h2>
        <form className="form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">نام کاربری:</label>
                <input
                    type="text"
                    id= "username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}                    
                    required
                />
            </div>

            <div>
                <label htmlFor="password">رمز عبور:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button className="btn" type="submit">ورود</button>
        </form>
    </div>
    );
};

export default Info;