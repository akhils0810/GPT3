import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="Revolutionary AI Technology"
        text="Experience the next generation of artificial intelligence that understands context, learns from interactions, and adapts to your specific needs. Our advanced AI platform combines cutting-edge machine learning with intuitive design to deliver unprecedented results."
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Unlock Infinite Possibilities with AI</h1>
      <p>Discover how our platform can transform your business</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Intelligent Automation"
        text="Streamline your workflows with AI-powered automation that learns and improves over time. Reduce manual tasks and focus on what matters most to your business."
      />
      <Feature
        title="Natural Language Processing"
        text="Communicate with AI in plain English. Our advanced NLP capabilities understand context, sentiment, and intent to provide accurate, helpful responses."
      />
      <Feature
        title="Predictive Analytics"
        text="Make data-driven decisions with confidence. Our AI analyzes patterns and trends to provide actionable insights and predict future outcomes."
      />
    </div>
  </div>
);

export default WhatGPT3;
