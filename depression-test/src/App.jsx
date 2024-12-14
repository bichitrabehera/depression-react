import React from 'react';
import './index.css';

function App() {
    return (
        <div className="container">
            <nav className="navbar">
                <ul className="navLinks">
                    <li><a href="">Home</a></li>
                    <li><a href="">Therapists</a></li>
                    <li><a href="">Reviews</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                <button className="loginButton">Login</button>
            </nav>
            <div className="content">
                <div className="leftSection">
                    <p className="text">
                        It is normal to feel <br />
                        sad, stressed and <br />
                        anxious during a crisis
                    </p>
                    <button className="therapistButton">Talk with a therapist</button>
                </div>
                <div className="rightSection">
                    <div className="eye">
                        <div className="eyeBall"></div>
                        <div className="tear"></div>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <span>Talking to people you trust can help</span>
            </footer>
        </div>
    );
}

export default App;
