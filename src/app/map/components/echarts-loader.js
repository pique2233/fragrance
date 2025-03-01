// src/lib/echarts-loader.js   
let cachedECharts = null;  
 
export const loadECharts = async () => {  
  if (cachedECharts) return cachedECharts;  
 
  // 分阶段加载模块  
  const { default: echarts } = await import('echarts/core');  
  const [{ Tooltip }, { VisualMap }, { GeoComponent }, { CanvasRenderer }] =  
    await Promise.all([   
      import('echarts/components'),  
      import('echarts/features'),  
      import('echarts/renderers')  
    ]);  
 
  // 沙箱化注册  
  echarts.use([Tooltip,  VisualMap, GeoComponent, CanvasRenderer]);  
  cachedECharts = echarts;  
 
  return echarts;  
};  