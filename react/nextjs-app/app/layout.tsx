// 전역 SCSS 스타일 파일을 가져옵니다
// 이 파일에는 웹사이트 전체에 적용되는 기본 스타일이 정의되어 있습니다
import './globals.scss'

// Next.js 13+ App Router의 메타데이터를 정의합니다
// 이 정보는 SEO(검색 엔진 최적화)와 소셜 미디어 공유에 사용됩니다
export const metadata = {
  title: 'Next.js 애플리케이션',        // 브라우저 탭에 표시될 제목
  description: 'Next.js 14 boilerplate', // 검색 결과에 표시될 설명
}

// RootLayout은 모든 페이지의 공통 레이아웃을 정의하는 컴포넌트입니다
// children prop은 각 페이지의 내용을 받아서 렌더링합니다
// 이 컴포넌트는 모든 페이지에서 공통으로 사용되는 HTML 구조를 제공합니다
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // html 요소: 웹페이지의 루트 요소
    // lang="ko": 한국어 페이지임을 명시 (접근성과 SEO에 중요)
    <html lang="ko">
      {/* body 요소: 웹페이지의 본문 내용을 담습니다 */}
      {/* children: 각 페이지의 고유한 내용이 여기에 렌더링됩니다 */}
      <body>{children}</body>
    </html>
  )
}
