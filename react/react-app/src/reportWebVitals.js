// 웹 성능을 측정하는 함수입니다
// 이 함수는 웹사이트가 얼마나 빠르게 로드되고 사용자와 상호작용할 수 있는지 측정합니다
const reportWebVitals = (onPerfEntry) => {
  // onPerfEntry가 존재하고 함수인지 확인합니다
  // 이는 안전한 프로그래밍을 위한 검증 과정입니다
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // web-vitals 라이브러리를 동적으로 가져옵니다 (lazy loading)
    // 이렇게 하면 초기 번들 크기를 줄일 수 있습니다
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // 각각의 성능 지표를 측정합니다:
      
      // CLS (Cumulative Layout Shift): 레이아웃이 얼마나 안정적인지 측정
      // 페이지 로딩 중에 요소들이 움직이면 사용자 경험이 나빠집니다
      getCLS(onPerfEntry);
      
      // FID (First Input Delay): 첫 번째 사용자 입력까지의 지연 시간
      // 버튼 클릭이나 타이핑이 얼마나 빠르게 반응하는지 측정합니다
      getFID(onPerfEntry);
      
      // FCP (First Contentful Paint): 첫 번째 콘텐츠가 화면에 나타나는 시간
      // 사용자가 페이지에 무언가 보기 시작하는 시점을 측정합니다
      getFCP(onPerfEntry);
      
      // LCP (Largest Contentful Paint): 가장 큰 콘텐츠가 화면에 나타나는 시간
      // 메인 콘텐츠가 완전히 로드되는 시점을 측정합니다
      getLCP(onPerfEntry);
      
      // TTFB (Time to First Byte): 서버 응답 시간
      // 서버가 첫 번째 데이터를 보내기까지 걸리는 시간을 측정합니다
      getTTFB(onPerfEntry);
    });
  }
};

// reportWebVitals 함수를 다른 파일에서 사용할 수 있도록 내보냅니다
export default reportWebVitals;
