import MainVisual from '../components/MainVisual';

export default function ProductsPage() {
  return (
    <>
      <MainVisual 
        banner="/pic/logo2.png"
        title="品牌介绍"
        subtitle="brand introduction"
      />
      
      {/* 品牌介绍内容区 */}
      <section className="brand-intro">
        <h2>品牌名称</h2>
        <p>沁识。意为通过香味来唤醒记忆，认识文明。</p>
        
        <div className="intro-grid">
        <div className="intro-item">
            <h3>品牌口号</h3>
            <p>做年轻人的第一瓶文化香</p>
          </div>
         
          <div className="intro-item">
            <h3>品牌理念</h3>
            <p>品牌的核心概念是“一地一香，一香一脉” 。每个地域都有着自己独特的香味记忆，品牌则致力于通过香味来体现地域特色，以气味为媒介，将各地的自然、人文与个体记忆编织成可佩戴的“文化香谱”。
            </p>
          </div>
          <div className="intro-item">
            <h3>品牌团队</h3>
            <p>「沁识」工作室是由一群热爱传统文化及香氛的年轻创香者组成的团队，我们用年轻的视角解读经典，致力于打造年轻人喜爱的新锐香氛品牌。</p>
          </div>
          
        
        </div>

        <div className="brand-images">
          <img src="/pic/a1.png" alt="品牌图片1" />
          <img src="/pic/a2.png" alt="品牌图片2" />
          <img src="/pic/a1.png" alt="品牌图片1" />
          <img src="/pic/a2.png" alt="品牌图片2" />
        </div>
      </section>
    </>
  );
}
