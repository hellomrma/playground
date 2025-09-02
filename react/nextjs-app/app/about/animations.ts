import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// GSAP 플러그인 등록
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// 애니메이션 설정
export const animationConfig = {
  duration: 1,
  ease: 'power2.out',
  stagger: 0.2,
  y: 50,
  opacity: 0
}

// 기본 페이드인 애니메이션
export const fadeInUp = (element: HTMLElement, delay: number = 0) => {
  console.log('fadeInUp called for element:', element.className)
  
  // 초기 상태 설정
  gsap.set(element, {
    y: animationConfig.y,
    opacity: animationConfig.opacity
  })
  
  console.log('Initial state set, starting animation...')
  
  // 애니메이션 실행
  return gsap.to(element, {
    y: 0,
    opacity: 1,
    duration: animationConfig.duration,
    ease: animationConfig.ease,
    delay: delay,
    onStart: () => console.log('Animation started for:', element.className),
    onComplete: () => console.log('Animation completed for:', element.className)
  })
}

// 스케일 애니메이션
export const scaleIn = (element: HTMLElement, delay: number = 0) => {
  gsap.set(element, {
    scale: 0.8,
    opacity: animationConfig.opacity
  })
  
  return gsap.to(element, {
    scale: 1,
    opacity: 1,
    duration: animationConfig.duration,
    ease: animationConfig.ease,
    delay: delay
  })
}

// 슬라이드 인 애니메이션 (좌우)
export const slideInLeft = (element: HTMLElement, delay: number = 0) => {
  gsap.set(element, {
    x: -100,
    opacity: animationConfig.opacity
  })
  
  return gsap.to(element, {
    x: 0,
    opacity: 1,
    duration: animationConfig.duration,
    ease: animationConfig.ease,
    delay: delay
  })
}

export const slideInRight = (element: HTMLElement, delay: number = 0) => {
  gsap.set(element, {
    x: 100,
    opacity: animationConfig.opacity
  })
  
  return gsap.to(element, {
    x: 0,
    opacity: 1,
    duration: animationConfig.duration,
    ease: animationConfig.ease,
    delay: delay
  })
}

// 회전 애니메이션
export const rotateIn = (element: HTMLElement, delay: number = 0) => {
  gsap.set(element, {
    rotation: -180,
    opacity: animationConfig.opacity
  })
  
  return gsap.to(element, {
    rotation: 0,
    opacity: 1,
    duration: animationConfig.duration,
    ease: animationConfig.ease,
    delay: delay
  })
}

// 스크롤 트리거 애니메이션
export const createScrollTrigger = (
  element: HTMLElement, 
  animation: () => gsap.core.Tween | gsap.core.Timeline | void,
  options: {
    start?: string
    end?: string
    scrub?: boolean
    markers?: boolean
  } = {}
) => {
  return ScrollTrigger.create({
    trigger: element,
    start: options.start || 'top 80%',
    end: options.end || 'bottom 20%',
    scrub: options.scrub || false,
    markers: options.markers || false,
    onEnter: () => {
      console.log('ScrollTrigger onEnter:', element.className)
      animation()
    },
    onEnterBack: () => {
      console.log('ScrollTrigger onEnterBack:', element.className)
      animation()
    }
  })
}

// 타임라인 애니메이션
export const createTimelineAnimation = (elements: HTMLElement[]) => {
  const tl = gsap.timeline()
  
  elements.forEach((element, index) => {
    tl.add(fadeInUp(element), index * animationConfig.stagger)
  })
  
  return tl
}

// 통계 카운터 애니메이션
export const animateCounter = (element: HTMLElement, targetValue: number, duration: number = 2) => {
  const text = element.textContent || '0'
  const startValue = parseInt(text.replace(/\D/g, '')) || 0
  
  return gsap.to(element, {
    duration: duration,
    ease: 'power2.out',
    onUpdate: function() {
      const currentValue = Math.floor(this.progress() * (targetValue - startValue) + startValue)
      element.textContent = `${currentValue}+`
    }
  })
}

// 배경 그라데이션 애니메이션
export const animateBackground = (element: HTMLElement) => {
  return gsap.to(element, {
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    duration: 3,
    ease: 'power2.inOut',
    yoyo: true,
    repeat: -1
  })
}

// 모든 애니메이션 정리
export const cleanupAnimations = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  gsap.killTweensOf('*')
}
