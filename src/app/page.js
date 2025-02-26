// src/app/page.js
import MainVisual from './components/MainVisual';
import CultureSection from './components/CultureSection';

const Page = () => (
  <div>
    <MainVisual />
    <CultureSection
      title="香道源流"
      description="香道文化始于先秦，兴于唐宋，是中国传统文化的重要组成部分。"
      imgUrl="/pic/taoci.png"
    />
    <CultureSection
      title="制香工艺"
      description="遵循古法，精选天然香料，经过数十道工序精心调配。"
      imgUrl="/pic/taoci.png"
    />
    <CultureSection
      title="香与生活"
      description="香道不仅是嗅觉的艺术，更是生活的美学。"
      imgUrl="/pic/taoci.png"
    />
  </div>
);

export default Page;
