import MainVisual from '../components/MainVisual';

export default function ProductsPage() {
  return (
    <>
      <MainVisual 
        banner="/pic/products-banner.jpg"
        title="东方香氛系列"
        subtitle="探索自然馈赠的香气艺术"
      />
      
      {/* 品牌介绍内容区 */}
      <section className="brand-intro">
        <h2>品牌名称</h2>
        <p>沁识。意为通过香味来唤醒记忆，认识文明。</p>
        
        <div className="intro-grid">
          <div className="intro-item">
            <h3>品牌理念</h3>
            <p>品牌的核心概念是“一地一香，一香一脉” 。每个地域都有着自己独特的香味记忆，品牌则致力于通过香味来体现地域特色，以气味为媒介，将各地的自然、人文与个体记忆编织成可佩戴的“文化香谱”。
            </p>
          </div>
          <div className="intro-item">
            <h3>营销渠道</h3>
            <p>覆盖全国一线城市高端商场，线上商城同步发售，提供全球配送服务。</p>
          </div>
          <div className="intro-item">
            <h3>出版露出</h3>
            <p>多次登上《Vogue》、《Elle》、《时尚芭莎》等国际时尚杂志。</p>
          </div>
        </div>

        <div className="brand-images">
          <img src="/pic/pinpai1.png" alt="品牌图片1" />
          <img src="/pic/pinpai2.png" alt="品牌图片2" />
          <img src="/pic/pinpai1.png" alt="品牌图片1" />
          <img src="/pic/pinpai2.png" alt="品牌图片2" />
        </div>
      </section>
    </>
  );
}
