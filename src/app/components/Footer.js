// src/app/components/Footer.js
"use client";
export default function Footer() {
    return (
      <footer>
        <div className="footer-grid">
          <div className="footer-column">
            <h4>联系我们</h4>
            <p>400 800 1234</p>
            <p>service@tosummer.cn</p>
            <p>北京市朝阳区观夏艺术中心</p>
          </div>
          <div className="footer-column">
            <h4>线下体验</h4>
            <p>北京三里屯旗舰店</p>
            <p>上海静安艺术空间</p>
            <p>成都太古里概念店</p>
          </div>
          <div className="footer-column">
            <h4>关注我们</h4>
            <p>微信公众号：观夏</p>
            <p>小红书 @观夏官方</p>
            <p>微博 @观夏官方</p>
          </div>
        </div>
        <div style={{ textAlign: 'center', opacity: 0.8 }}>
          <p>© 2023 TOSUMMER 观夏 京ICP备12345678号</p>
        </div>
      </footer>
    );
  }