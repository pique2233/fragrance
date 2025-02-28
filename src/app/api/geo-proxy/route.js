// app/api/geo-proxy/route.js  
export async function GET() {
    const targetUrl = 'https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json'; 
    
    try {
      const response = await fetch(targetUrl, {
        headers: {
          'Referer': 'https://datav.aliyun.com', 
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
        },
        next: { revalidate: 86400 } // ISR增量静态再生 
      });
   
      const data = await response.json(); 
      
      return new Response(JSON.stringify(data),  {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'public, max-age=86400'
        }
      });
    } catch (error) {
      return new Response(JSON.stringify({  error: '数据代理失败' }), {
        status: 500 
      });
    }
  }