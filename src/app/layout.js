// src/app/layout.js
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>
        <Navbar />
        {/* 所有页面的内容会注入到此处 */}
        {children}
        <Footer />
      </body>
    </html>
  );
}