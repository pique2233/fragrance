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
        <h2>关于观夏</h2>
        <p>观夏，一个致力于传承东方美学的现代香氛品牌，以自然之道，制东方香气，将传统与现代完美融合。</p>
        
        <div className="intro-grid">
          <div className="intro-item">
            <h3>荣获奖项</h3>
            <p>荣获2022年度最佳香氛品牌奖，2021年度设计大奖，2020年度创新品牌奖。</p>
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
