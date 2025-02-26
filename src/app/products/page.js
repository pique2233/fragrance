// src/app/products/page.js
import MainVisual from '../components/MainVisual';
import CultureSection from '../components/CultureSection';

export default function ProductsPage() {
  return (
    <>
      <MainVisual 
        banner="/pic/products-banner.jpg"
        title="东方香氛系列"
        subtitle="探索自然馈赠的香气艺术"
      />
      {/* 双图区块 */}
      <section className="double-image">
        <img src="/pic/1.png" alt="天然原料" />
        <img src="/pic/2.png" alt="制作工艺" />
      </section>

      {/* 全宽文字图片 */}
      <div className="full-width-section">
        <img src="/pic/ct.png" className="craft-image" alt="传统工艺" />
        <div className="craft-text">
          <h2 style={{ fontSize: '2.8rem', marginBottom: '25px' }}>传统手工艺复兴</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            传承千年制香技艺<br />与非遗大师共同复原古法配方
          </p>
        </div>
      </div>

    </>
  );
}
