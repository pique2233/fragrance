// src/app/page.js
import MainVisual from './components/MainVisual';
import CultureSection from './components/CultureSection';

const Page = () => (
  <div>
    <MainVisual />
    <CultureSection
      title="系列介绍"
      description="本系列以中国非物质文化遗产为核心概念，旨在以嗅觉重构“非遗即日常”的东方美学叙事。"
      imgUrl="taoci.png"
    />
    <CultureSection
      title="系列概念"
      description="以香气为引，复刻散落于时光长河的非遗碎片——
古法冷吸的茉莉、窖藏三十年的檀香木、手作蓝染的蓼蓝气息……
「南柯遗梦」将匠人指尖的温度、失传的香方密码、文明的余晖，
凝练为可佩戴的“嗅觉史诗”。
让每一缕香，穿越千年，唤醒那封尘已久的文化记忆"
      imgUrl="taoci.png"
    />
    <CultureSection
      title="品牌寄语"
      description="我们相信，真正的非遗传承不在博物馆的玻璃柜中，
而在日常的呼吸之间。
当一缕香成为跨越千年的信使，
文明的基因便永远鲜活。"
      imgUrl="/pic/taoci.png"
    />
  </div>
);

export default Page;
