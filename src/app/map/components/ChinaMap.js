'use client';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import * as echarts from 'echarts/core';
import { TooltipComponent, VisualMapComponent } from 'echarts/components';
import { MapChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import useSWR from 'swr';

echarts.use([TooltipComponent, VisualMapComponent, MapChart, CanvasRenderer]);

const provinceMap = {
    '北京市': 'beijing',
    '天津市': 'tianjin',
    '河北省': 'hebei',
    '山西省': 'shanxi',
    '内蒙古自治区': 'neimenggu',
    '辽宁省': 'liaoning',
    '吉林省': 'jilin',
    '黑龙江省': 'heilongjiang',
    '上海市': 'shanghai',
    '江苏省': 'jiangsu',
    '浙江省': 'zhejiang',
    '安徽省': 'anhui',
    '福建省': 'fujian',
    '江西省': 'jiangxi',
    '山东省': 'shandong',
    '河南省': 'henan',
    '湖北省': 'hubei',
    '湖南省': 'hunan',
    '广东省': 'guangdong',
    '广西壮族自治区': 'guangxi',
    '海南省': 'hainan',
    '重庆市': 'chongqing',
    '四川省': 'sichuan',
    '贵州省': 'guizhou',
    '云南省': 'yunnan',
    '西藏自治区': 'xizang',
    '陕西省': 'shaanxi',
    '山西省': 'shanxi',
    '甘肃省': 'gansu',
    '青海省': 'qinghai',
    '宁夏回族自治区': 'ningxia',
    '新疆维吾尔自治区': 'xinjiang',
    '澳门特别行政区': 'macau',
    '香港特别行政区': 'hongkong',
    '台湾省': 'taiwan'
}

export default function ChinaMap() {
  const router = useRouter();
  const chartRef = useRef(null);

  const { data: geoJson, error } = useSWR(
    '/api/geo-proxy',
    url => fetch(url).then(res => {
      if (!res.ok) throw new Error(`地图加载失败 (HTTP ${res.status})`);
      return res.json();
    }),
    { dedupingInterval: 600_000, fallbackData: { features: [] } }
  );

  useEffect(() => {
    if (!geoJson || !chartRef.current) return;

    const chart = echarts.init(chartRef.current);
    echarts.registerMap('china', geoJson);

    const option = {
      tooltip: {
        trigger: 'item',
        formatter: '{b}'
      },
      series: [{
        type: 'map',
        map: 'china',
        emphasis: {
          itemStyle: {
            areaColor: '#FFD700',
            borderColor: '#333'
          }
        },
        select: {
          itemStyle: {
            areaColor: '#FF4500'
          }
        }
      }]
    };

    chart.setOption(option);

    const handleClick = (params) => {
      const provinceEN = provinceMap[params.name] || params.name.toLowerCase();
      router.push(`/map?province=${provinceEN}`, { scroll: false });
    };

    chart.on('click', handleClick);
    return () => {
      chart.off('click', handleClick);
      chart.dispose();
    };
  }, [geoJson, router]);

  if (error) return (
    <div className="p-4 bg-red-50 text-red-700 rounded-lg">
      <p>地图加载失败，请<a href="#" onClick={() => window.location.reload()} className="underline">点击重试</a></p>
    </div>
  );

  return (
    <div 
      ref={chartRef}
      className="bg-white rounded-xl shadow-lg p-4"
      style={{ width: '100%', height: '80vh', minHeight: '600px' }}
    />
  );
}