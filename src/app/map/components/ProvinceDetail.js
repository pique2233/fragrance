'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { provinceData } from './provinces';
import CommentSection from './CommentSection';
export default function ProvinceDetail({ province }) {
  const router = useRouter();
  const data = provinceData[province];

  const handleClose = () => {
    router.replace('/map', { scroll: false });
  };

  useEffect(() => {
    const handleKeyDown = (e) => e.key === 'Escape' && handleClose();
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!data) return null;

  // 辅助函数：处理换行和段首空格
  const renderDescription = (text) => {
    return text.split('\n').map((line, index) => (
      <span key={index}>
        {/* 添加段首空格 */}
        {line.startsWith('  ') ? '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0' + line.trim() : line}
        <br />
      </span>
    ));
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* 头部 */}
        <div className="modal-header">
          <h2 className="text-2xl font-bold text-gray-800">{data.chineseName}</h2>
          <button
            onClick={handleClose}
            className="text-3xl text-gray-400 hover:text-gray-600 transition-colors"
          >
            &times;
          </button>
        </div>

        <div className="modal-content">
          {/* 主图 */}
          {data.mainImage && (
            <div className="modal-image-container">
              <Image
                src={data.mainImage}
                alt={data.chineseName}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
          )}

          {/* 气味镜头区块 */}
          {data.scentLens && (data.scentLens.description || data.scentLens.image) && (
            <section className="mb-10">
              <h3 className="text-xl font-semibold border-l-4 border-amber-500 pl-3 mb-6">
                🌀 气味镜头
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 items-start">
                {/* 文字描述 */}
                {data.scentLens.description && (
                  <p className="text-gray-600 leading-relaxed text-justify whitespace-pre-wrap">
                    {renderDescription(data.scentLens.description)}
                  </p>
                )}

                {/* 图片容器 */}
                {data.scentLens.image && (
                  <div className="relative aspect-video lg:aspect-square rounded-xl overflow-hidden bg-gray-100 transition-all hover:shadow-lg">
                    <Image
                      src={data.scentLens.image}
                      alt="气味镜头示意图"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                  </div>
                )}
              </div>
            </section>
          )}

          {/* 文化链接 */}
          {data.culturalLinks && data.culturalLinks.description && (
            <section className="mb-10">
              <h3 className="text-xl font-semibold border-l-4 border-green-500 pl-3 mb-4">
                📜 文化链接
              </h3>
              <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                {renderDescription(data.culturalLinks.description)}
              </p>
            </section>
          )}

          {/* 香气匹配 */}
          {data.aromaMatches && data.aromaMatches.length > 0 && (
            <section>
              <h3 className="text-xl font-semibold border-l-4 border-purple-500 pl-3 mb-6">
                💫 香气匹配
              </h3>
              <div className="grid grid-cols-1 gap-8">
                {data.aromaMatches.map((match, index) => (
                  <div key={index} className="aroma-match-card bg-gray-50 p-4 rounded-xl">
                    <div className="space-y-2">
                      {match.description && (
                        <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                          {renderDescription(match.description)}
                        </p>
                      )}
                      {match.image && (
                        <div className="relative aspect-lock md:aspect-square rounded-lg overflow-hidden">
                          <Image
                            src={match.image}
                            alt={`香气匹配 ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
              <CommentSection />
        </div>
     
      </div>
    </div>
  );
}