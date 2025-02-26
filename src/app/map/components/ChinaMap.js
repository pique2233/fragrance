'use client';
import { useEffect, useRef } from 'react';
import * as echarts from 'echarts/core';
import { TooltipComponent, VisualMapComponent } from 'echarts/components';
import { MapChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import useSWR from 'swr';
 
// 模块注册 
echarts.use([TooltipComponent,  VisualMapComponent, MapChart, CanvasRenderer]);
 
export default function ChinaMap() {
  const chartRef = useRef(null);
  
  // 直接调用阿里云接口 
  const { data: geoJson, error } = useSWR(
    'https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json', 
    url => fetch(url).then(res => res.json()), 
    { dedupingInterval: 600_000 } // 10分钟缓存 
  );
 
  // 渲染逻辑 
  useEffect(() => {
    if (!geoJson || !chartRef.current)  return;
 
    const chart = echarts.init(chartRef.current); 
    echarts.registerMap('china',  geoJson);
    
    const option = {
      series: [{
        type: 'map',
        map: 'china',
        // ...保持原有配置 
      }]
    };
    
    chart.setOption(option); 
    return () => chart.dispose(); 
  }, [geoJson]);
 
  // 状态提示增强 
  if (error) return (
    <div className="error-box">
      <p>⚠️ 数据加载失败</p>
      <button onClick={() => window.location.reload()}> 点击重试</button>
    </div>
  );
 
  return (
    <div 
      ref={chartRef}
      style={{ width: '100%', height: '80vh', minHeight: '600px' }}
    />
  );
}