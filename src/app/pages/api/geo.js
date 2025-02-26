export default async function handler(req, res) {
    try {
      const response = await fetch('https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json'); 
      const data = await response.json(); 
      res.setHeader('Cache-Control',  'public, max-age=86400');
      res.status(200).json(data); 
    } catch (error) {
      res.status(500).json({  error: '地理数据获取失败' });
    }
  }