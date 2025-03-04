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
      {/* 左侧容器 */}
      <div className="nav-left flex-1 flex items-center gap-8">
        <Link href="/">
          <img src="/pic/logo.png" className="logo h-12" alt="观夏" />
        </Link>

        {/* 桌面导航（仅在md以上显示） */}
        <div className="hidden md:flex gap-6 nav-links desktop-links">
          <Link href="/products" className="nav-link">文化</Link>
          <Link href="/" className="nav-link">产品</Link>
          <Link href="/map" className="nav-link">气味地图</Link>
          <Link href="/about" className="nav-link">品牌介绍</Link>
        </div>
      </div>

      {/* 右侧容器 */}
      <div className="nav-right flex items-center gap-6">
        {/* 桌面图标（仅在md以上显示） */}
        <div className="hidden md:flex items-center gap-4">
          <i className="ri-wechat-line text-white cursor-pointer" />
          <i className="ri-phone-line text-white cursor-pointer" />
          <i className="ri-mail-line text-white cursor-pointer" />
          <button 
            onClick={toggleLanguage}
            className="language-switch px-3 py-1 rounded-md"
          >
            {currentLang.toUpperCase()}
          </button>
        </div>

        {/* 移动端语言切换（仅在md以下显示） */}
        <button 
          className="md:hidden language-switch-mobile"
          onClick={toggleLanguage}
        >
          {currentLang.toUpperCase()}
        </button>

        {/* 汉堡菜单按钮（仅在md以下显示） */}
        <button 
          className="md:hidden hamburger-btn p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-white text-xl`} />
        </button>
      </div>

      {/* 移动端导航菜单（固定在左侧） */}
      <div className={`md:hidden mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-links flex flex-col gap-4 p-6">
          <Link href="/products" onClick={() => setIsMenuOpen(false)}>文化</Link>
          <Link href="/" onClick={() => setIsMenuOpen(false)}>产品</Link>
          <Link href="/map" onClick={() => setIsMenuOpen(false)}>气味地图</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>品牌介绍</Link>
        </div>
      </div>
    </nav>
  );
}