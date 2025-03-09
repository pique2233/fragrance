"use client";

export default function MainVisual({ banner, title, subtitle }) {
  return (
    <section className="main-visual">
      <img src={banner} className="main-banner" alt="文化主视觉" />
      <div className="main-text">
        <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>{title}</h1>
        <p style={{ fontSize: '1.2rem' }}>{subtitle}</p>
      </div>
    </section>
  );
}