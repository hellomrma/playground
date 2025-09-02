# Next.js 애플리케이션

이 프로젝트는 Next.js 14를 사용하여 생성된 기본 boilerplate입니다.

## 주요 기능

- ✅ Next.js 14
- ✅ App Router (새로운 라우팅 시스템)
- ✅ React 18
- ✅ Hooks 사용 (useState)
- ✅ CSS Modules
- ✅ 서버 사이드 렌더링 (SSR)
- ✅ 정적 사이트 생성 (SSG)
- ✅ 카운터 기능
- ✅ 할 일 목록 관리

## 시작하기

### 필수 요구사항

- Node.js 16.14.0 이상
- npm 또는 yarn

### 설치

```bash
cd nextjs-app
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 애플리케이션을 확인하세요.

### 빌드

```bash
npm run build
```

### 프로덕션 서버 실행

```bash
npm start
```

### 린트

```bash
npm run lint
```

## 프로젝트 구조

```
nextjs-app/
├── app/
│   ├── layout.js          # 루트 레이아웃
│   ├── page.js            # 메인 페이지
│   ├── page.module.css    # 페이지 스타일
│   └── globals.css        # 전역 스타일
├── next.config.js         # Next.js 설정
├── package.json
└── README.md
```

## 사용된 기술

- **Next.js 14**: React 프레임워크
- **App Router**: 새로운 파일 기반 라우팅 시스템
- **React 18**: 사용자 인터페이스 구축
- **CSS Modules**: 컴포넌트별 스타일링
- **Hooks**: 상태 관리
- **서버 사이드 렌더링**: SEO 최적화

## Next.js의 장점

- **자동 코드 분할**: 페이지별로 자동으로 번들 분할
- **서버 사이드 렌더링**: 초기 로딩 속도 향상
- **정적 사이트 생성**: 빠른 페이지 로딩
- **API 라우트**: 백엔드 API 없이도 API 엔드포인트 생성 가능
- **자동 최적화**: 이미지, 폰트 등 자동 최적화
