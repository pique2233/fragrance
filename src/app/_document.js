// app/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="zh-CN">
      <Head>
        {/* 加载中国地图数据 */}
        <script src="https://cdn.jsdelivr.net/npm/echarts@5.4.1/map/js/china.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
