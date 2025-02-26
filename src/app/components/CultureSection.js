// src/app/components/CultureSection.js
"use client";
export default function CultureSection({ title, description, imageUrl }) {
    return (
      <section className="culture-section">
        <div className="culture-content">
          <h2 className="culture-title">{title}</h2>
          <p className="culture-desc">{description}</p>
          <a href="#" className="culture-link">了解更多</a>
        </div>
        <div className="culture-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      </section>
    );
  }