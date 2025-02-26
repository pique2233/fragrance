"use client"; // 确保这是客户端组件
import MainVisual from '../components/MainVisual';
import ChinaMap from './components/ChinaMap';

export default function ProductsPage() {
  return (
    <>
      <MainVisual 
        banner="/pic/products-banner.jpg"
        title="东方香氛系列"
        subtitle="探索自然馈赠的香气艺术"
      />
      <ChinaMap /> {/* 添加中国地图 */}
    </>
  );
}
