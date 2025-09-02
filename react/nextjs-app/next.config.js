// Next.js 설정 파일입니다
// 이 파일은 Next.js 애플리케이션의 동작을 커스터마이징할 수 있게 해줍니다

// TypeScript 타입 힌트를 제공하는 JSDoc 주석입니다
// 이 주석은 코드 에디터에서 자동완성과 타입 검사를 도와줍니다
/** @type {import('next').NextConfig} */

// Next.js 설정 객체를 정의합니다
const nextConfig = {
  // React Strict Mode를 활성화합니다
  // 개발 모드에서 잠재적인 문제를 미리 발견하고 경고를 표시해줍니다
  // 프로덕션 빌드에서는 자동으로 제거됩니다
  reactStrictMode: true,
  
  // SWC를 사용하여 코드를 압축합니다
  // SWC는 Rust로 작성된 빠른 JavaScript/TypeScript 컴파일러입니다
  // 기존의 Terser보다 훨씬 빠르게 빌드할 수 있습니다
  swcMinify: true,
}

// 설정 객체를 모듈로 내보냅니다
// Next.js가 이 설정을 읽어서 애플리케이션에 적용합니다
module.exports = nextConfig
