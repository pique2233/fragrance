// src/app/components/MainVisual.js
"use client";
export default function MainVisual() {
    return (
      <section className="main-visual">
        <img src="/pic/logo2.png" className="main-banner" alt="文化主视觉" />
        <div className="main-text">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>南柯遗梦系列香水</h1>
          <p style={{ fontSize: '1.2rem' }}>传承千年香道 演绎东方美学</p>
        </div>
      </section>
    );
  }