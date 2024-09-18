// import React, { useEffect, useState } from 'react';

// const Header = () => {
//   const [htmlContent, setHtmlContent] = useState('');

//   useEffect(() => {
//     fetch('/Header.html')
//       .then(response => response.text())
//       .then(text => setHtmlContent(text));
//   }, []);

//   return (
//     <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
//   );
// };

// export default Header;


// src/components/Header/Header.js
// import Footer from '../Footer/Footer'; // مسیر به فایل Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
// function App() {}
const Header = () => {
    return (
        <header>
            <h2 className='h2'>*Online Recipes*</h2>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to= "/Info">Enter</Link></li>
                    <li><Link to= "/contact">Contact Us</Link></li>
                    <li><Link to= "/footer"></Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/basket">Cart</Link></li>

                    {/* Add more navigation links if needed */}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
