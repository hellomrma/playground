# SCSS 사용법 가이드

이 프로젝트는 React와 Next.js 모두에서 SCSS를 사용할 수 있도록 설정되어 있습니다.

## 🚀 SCSS 설치 및 설정

### React 프로젝트
```bash
cd react-app
npm install sass --save-dev
```

### Next.js 프로젝트
```bash
cd nextjs-app
npm install sass --save-dev
```

## ✨ SCSS 주요 기능

### 1. 변수 (Variables)
```scss
// 색상 변수
$primary-color: #667eea;
$secondary-color: #764ba2;

// 사용법
.button {
  background: $primary-color;
  color: white;
}
```

### 2. 중첩 (Nesting)
```scss
.card {
  background: white;
  border-radius: 8px;
  
  .header {
    padding: 20px;
    border-bottom: 1px solid #eee;
    
    h1 {
      margin: 0;
      font-size: 24px;
    }
  }
  
  .content {
    padding: 20px;
  }
}
```

### 3. 믹스인 (Mixins)
```scss
@mixin glass-effect {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
}

// 사용법
.modal {
  @include glass-effect;
  padding: 30px;
}
```

### 4. 확장/상속 (Extend/Inheritance)
```scss
%button-base {
  padding: 12px 24px;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.primary-button {
  @extend %button-base;
  background: $primary-color;
  color: white;
}

.secondary-button {
  @extend %button-base;
  background: $secondary-color;
  color: white;
}
```

### 5. 연산 (Operations)
```scss
$container-width: 100%;
$sidebar-width: 250px;

.main-content {
  width: $container-width - $sidebar-width;
  margin-left: $sidebar-width;
}
```

### 6. 함수 (Functions)
```scss
@function calculate-width($n) {
  @return $n * 100%;
}

.column {
  width: calculate-width(1/3); // 33.333%
}
```

### 7. 조건문과 반복문
```scss
// 조건문
@mixin responsive($breakpoint) {
  @if $breakpoint == sm {
    @media (max-width: 576px) { @content; }
  } @else if $breakpoint == md {
    @media (max-width: 768px) { @content; }
  }
}

// 반복문
@for $i from 1 through 4 {
  .col-#{$i} {
    width: percentage($i / 4);
  }
}
```

## 📁 프로젝트 구조

### React 프로젝트
```
react-app/
├── src/
│   ├── styles/
│   │   └── variables.scss      # 공통 변수 및 믹스인
│   ├── App.scss               # 메인 컴포넌트 스타일
│   └── index.scss             # 전역 스타일
```

### Next.js 프로젝트
```
nextjs-app/
├── app/
│   ├── styles/
│   │   └── variables.scss      # 공통 변수 및 믹스인
│   ├── page.module.scss        # 페이지 스타일
│   └── globals.scss            # 전역 스타일
```

## 🎨 실제 사용 예시

### 컴포넌트별 SCSS 파일
```scss
// Button.scss
@import '../styles/variables';

.button {
  @include button-style();
  
  &.primary {
    background: $primary-color;
  }
  
  &.secondary {
    background: $secondary-color;
  }
  
  &.large {
    padding: 16px 32px;
    font-size: 1.2rem;
  }
}
```

### 반응형 디자인
```scss
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  
  @include responsive(md) {
    padding: 0 15px;
  }
  
  @include responsive(sm) {
    padding: 0 10px;
  }
}
```

## 🔧 SCSS 컴파일

### React (Create React App)
- 자동으로 SCSS를 CSS로 컴파일
- 별도 설정 불필요

### Next.js
- 자동으로 SCSS를 CSS로 컴파일
- CSS Modules와 함께 사용 가능

## 💡 SCSS 모범 사례

### 1. 변수 네이밍
```scss
// 좋은 예
$primary-color: #667eea;
$font-size-large: 24px;
$spacing-unit: 8px;

// 피해야 할 예
$color1: #667eea;
$size: 24px;
$space: 8px;
```

### 2. 믹스인 사용
```scss
// 재사용 가능한 스타일은 믹스인으로
@mixin card-style {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.card, .modal, .tooltip {
  @include card-style;
}
```

### 3. 중첩 깊이 제한
```scss
// 3단계 이상 중첩은 피하기
.card {
  .header {
    .title {
      // 여기까지만
    }
  }
}
```

## 🚨 주의사항

1. **CSS 파일 삭제**: 기존 CSS 파일은 삭제하고 SCSS 파일로 대체
2. **import 경로**: SCSS 파일 import 시 확장자 변경 필요
3. **변수 스코프**: 변수는 사용하기 전에 정의되어야 함
4. **컴파일 시간**: SCSS 컴파일로 인한 약간의 빌드 시간 증가

## 📚 추가 학습 자료

- [Sass 공식 문서](https://sass-lang.com/documentation)
- [Sass 가이드](https://sass-lang.com/guide)
- [CSS Modules + Sass](https://github.com/css-modules/css-modules)

---

**SCSS를 활용하여 더욱 효율적이고 유지보수하기 쉬운 스타일링을 경험해보세요! 🎨**
