"use client";
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import MainVisual from '../components/MainVisual';
import LoadingSpinner from '../components/LoadingSpinner';
import dynamic from 'next/dynamic';
import CommentSection from './components/CommentSection';

const ChinaMap = dynamic(
  () => import('./components/ChinaMap'),
  { 
    ssr: false,
    loading: () => (
      <div className="h-[600px] bg-gray-100 rounded-xl animate-pulse flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    )
  }
);

const ProvinceDetail = dynamic(
  () => import('./components/ProvinceDetail'),
  {
    loading: () => (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    )
  }
);

// 将页面内容提取到一个独立的客户端组件中
function PageContent() {
  const params = useSearchParams();
  const province = params.get('province');

  return (
    <>
      <MainVisual 
             banner="/pic/logo2.png"
             title="气味地图"
             subtitle="Scent map"
           />
      
           <div className="container mx-auto">
    
    </div>
      <section className="container mx-auto px-4 py-16 relative">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-green-600">
              中国特色香料产区分布
            </span>
          </h3>
          
          <ChinaMap />
          {province && <ProvinceDetail province={province} />}
        </div>
      </section>
      <CommentSection />
    </>
  );
}

// 主页面组件，包裹在 Suspense 中
export default function MapPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <PageContent />
    </Suspense>
  );
}