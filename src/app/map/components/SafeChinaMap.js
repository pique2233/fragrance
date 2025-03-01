// src/app/map/components/SafeChinaMap.js   
'use client';  
import { useEffect } from 'react';  
import useDynamicECharts from '../hooks/useDynamicECharts' 
import ProvinceModal from './ProvinceModal';  
 
export default function SafeChinaMap() {  
  const { chartRef, setOption, getInstance } = useDynamicECharts();  
  const [selectedProvince, setSelectedProvince] = useState(null);  
 
  // 配置地图  
  useEffect(() => {  
    if (!getInstance()) return;  
 
    setOption({  
      geo: {  
        map: 'china',  
        roam: true,  
        itemStyle: {  
          areaColor: '#F3F4F6',  
          borderColor: '#94A3B8'  
        },  
        emphasis: {  
          itemStyle: {  
            areaColor: '#BFDBFE'  
          }  
        }  
      }  
    });  
 
    // 事件绑定  
    const chart = getInstance();  
    chart.on('click',  handleMapClick);  
  }, [getInstance]);  
 
  // 点击处理逻辑...  
 
  return (  
    <div className="h-[600px] w-full">  
      <div ref={chartRef} className="w-full h-full" />  
      <ProvinceModal {...modalProps} />  
    </div>  
  );  
}  