import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <div className="header-badge">
        <span>🚀 Next Generation AI</span>
      </div>
      <h1 className="gradient__text">
        Unleash the Power of <br />
        Artificial Intelligence
      </h1>
      <p>
        Experience the future of technology with our cutting-edge AI solutions.
        Transform your ideas into reality with intelligent automation, natural language processing,
        and machine learning capabilities that adapt to your needs.
      </p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Enter your email address" />
        <button type="button" className="btn-primary">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} alt="People using our platform" />
        <p>Join <strong>2,500+</strong> innovators already building the future</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <div className="image-container">
        <img src={ai} alt="AI Technology" />
        <div className="floating-card">
          <div className="card-icon">⚡</div>
          <div className="card-content">
            <h4>Real-time Processing</h4>
            <p>Lightning-fast AI responses</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
