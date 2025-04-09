// src/app/products/page.js
import MainVisual from '../components/MainVisual';
import CultureSection from '../components/CultureSection';
import CommentSection from '../map/components/CommentSection';
export default function ProductsPage() {
  return (
    <>
        <MainVisual 
                 banner="/pic/logo2.png"
                 title="中国非物质文化遗产"
                 subtitle="Chinese Traditional Culture"
               />
      {/* 双图区块 */}
      <section className="double-image">
        <img src="/pic/a1.png" alt="天然原料" />
        <img src="/pic/a2.png" alt="制作工艺" />
      </section>

      {/* 全宽文字图片 */}
      <div className="full-width-section">
        <img src="/pic/ct.png" className="craft-image" alt="传统工艺" />
        <div className="craft-text">
          <h2 style={{ fontSize: '2.8rem', marginBottom: '25px' }}>苏州评弹（Suzhou Pingtan）</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          苏州评弹是江南地区独特的传统说唱艺术，包括评话和弹词。它以吴侬软语表演，语言细腻婉转，唱腔优美动听，内容多为历史故事和民间传奇。评弹形式多样，表演生动，具有雅俗共赏的特点，是江南文化的瑰宝。2006年，苏州评弹入选第一批国家级非物质文化遗产名录。
          </p>
        </div>
      </div>

    </>
  );
}
