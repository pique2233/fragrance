// src/app/components/Footer.js
"use client";
export default function Footer() {
    return (
      <footer>
        <div className="footer-grid">
          <div className="footer-column">
            <h4>联系我们</h4>
            <p>服务时间:9:00-18:00</p>
            <p>办公地点:重庆市北碚区天生路2号</p>
        
          </div>
          <div className="footer-column">
            <h4>线上服务</h4>
            <p>官方网站</p>
            <p> lover.fragrance-love.top</p>
          </div>
          <div className="footer-column">
            <h4>关注我们</h4>
            <p>微信公众号：沁识工作室</p>
            <p>小红书 @沁识工作室</p>
          </div>
        </div>
        <div style={{ textAlign: 'center', opacity: 0.8 }}>
         
        </div>
      </footer>
    );
  }