// src/app/components/Navbar.js
"use client"; // 必须添加，因为使用了 useState

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [currentLang, setCurrentLang] = useState('zh');

  const toggleLanguage = () => {
    setCurrentLang(prev => (prev === 'zh' ? 'en' : 'zh'));
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link href="/">
          <img src="/pic/logo.png" className="logo" alt="观夏" />
        </Link>
        <div className="nav-links">
          <Link href="/products">产品</Link>
          <Link href="/">文化</Link> {/* 首页链接 */}
          <Link href="/map">气味地图</Link>
          <Link href="/about">品牌介绍</Link>
        </div>
      </div>
      <div className="nav-right">
        <i className="ri-wechat-line icon" style={{ color: '#fff' }}></i>
        <i className="ri-phone-line icon" style={{ color: '#fff' }}></i>
        <i className="ri-mail-line icon" style={{ color: '#fff' }}></i>
        <button className="language-switch" onClick={toggleLanguage}>
          {currentLang.toUpperCase()}
        </button>
      </div>
    </nav>
  );
}