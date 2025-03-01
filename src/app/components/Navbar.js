// src/app/components/Navbar.js
"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [currentLang, setCurrentLang] = useState('zh');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setCurrentLang(prev => (prev === 'zh' ? 'en' : 'zh'));
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link href="/">
          <img src="/pic/logo.png" className="logo" alt="观夏" />
        </Link>
        
        {/* 桌面导航 */}
        <div className="nav-links hidden md:flex">
          <Link href="/products">产品</Link>
          <Link href="/">文化</Link>
          <Link href="/map">气味地图</Link>
          <Link href="/about">品牌介绍</Link>
        </div>
      </div>

      {/* 移动汉堡菜单按钮 */}
      <button 
        className="md:hidden hamburger-btn"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="导航菜单"
      >
        <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-white text-xl`} />
      </button>

      {/* 移动端导航菜单 */}
      <div className={`md:hidden mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-links">
          <Link href="/products" onClick={() => setIsMenuOpen(false)}>产品</Link>
          <Link href="/" onClick={() => setIsMenuOpen(false)}>文化</Link>
          <Link href="/map" onClick={() => setIsMenuOpen(false)}>气味地图</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>品牌介绍</Link>
        </div>
      </div>

      <div className="nav-right">
        {/* 桌面图标 */}
        <div className="hidden md:flex icons-container">
          <i className="ri-wechat-line icon" />
          <i className="ri-phone-line icon" />
          <i className="ri-mail-line icon" />
          <button className="language-switch" onClick={toggleLanguage}>
            {currentLang.toUpperCase()}
          </button>
        </div>

        {/* 移动端语言切换 */}
        <button 
          className="md:hidden language-switch-mobile" 
          onClick={toggleLanguage}
        >
          {currentLang.toUpperCase()}
        </button>
      </div>
    </nav>
  );
}