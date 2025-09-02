// 순수 JavaScript 애니메이션 구현
export class VanillaAnimations {
  private static instance: VanillaAnimations
  private observers: IntersectionObserver[] = []
  private animations: Map<string, () => void> = new Map()

  static getInstance(): VanillaAnimations {
    if (!VanillaAnimations.instance) {
      VanillaAnimations.instance = new VanillaAnimations()
    }
    return VanillaAnimations.instance
  }

  // 기본 애니메이션 설정
  private config = {
    duration: 800,
    easing: 'ease-out',
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
  }

  // 이징 함수들
  private easings = {
    'ease-out': (t: number) => 1 - Math.pow(1 - t, 3),
    'ease-in': (t: number) => t * t * t,
    'ease-in-out': (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
    'bounce': (t: number) => {
      if (t < 1 / 2.75) return 7.5625 * t * t
      if (t < 2 / 2.75) return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
      if (t < 2.5 / 2.75) return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
      return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375
    }
  }

  // 애니메이션 실행 함수
  private animate(
    element: HTMLElement,
    properties: Record<string, { from: number; to: number }>,
    options: { duration?: number; easing?: keyof typeof this.easings; delay?: number } = {}
  ): Promise<void> {
    return new Promise((resolve) => {
      const duration = options.duration || this.config.duration
      const easing = options.easing || 'ease-out'
      const delay = options.delay || 0
      const startTime = Date.now() + delay

      const animate = () => {
        const currentTime = Date.now()
        if (currentTime < startTime) {
          requestAnimationFrame(animate)
          return
        }

        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        const easedProgress = this.easings[easing as keyof typeof this.easings](progress)

        // 각 속성에 대해 애니메이션 적용
        Object.entries(properties).forEach(([property, values]) => {
          const currentValue = values.from + (values.to - values.from) * easedProgress
          
          if (property === 'opacity') {
            element.style.opacity = currentValue.toString()
          } else if (property === 'scale') {
            element.style.transform = `scale(${currentValue})`
          } else if (property === 'x' || property === 'y') {
            const transform = element.style.transform || ''
            const translateMatch = transform.match(/translate\(([^)]+)\)/)
            let translateX = '0px'
            let translateY = '0px'
            
            if (translateMatch) {
              const parts = translateMatch[1].split(',')
              translateX = parts[0] || '0px'
              translateY = parts[1] || '0px'
            }
            
            if (property === 'x') translateX = `${currentValue}px`
            if (property === 'y') translateY = `${currentValue}px`
            
            element.style.transform = transform.replace(
              /translate\([^)]+\)/,
              `translate(${translateX}, ${translateY})`
            ) || `translate(${translateX}, ${translateY})`
          } else if (property === 'rotation') {
            element.style.transform = (element.style.transform || '') + ` rotate(${currentValue}deg)`
          }
        })

        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          resolve()
        }
      }

      requestAnimationFrame(animate)
    })
  }

  // 페이드인 애니메이션
  fadeIn(element: HTMLElement, delay: number = 0): Promise<void> {
    element.style.opacity = '0'
    return this.animate(element, {
      opacity: { from: 0, to: 1 }
    }, { delay })
  }

  // 페이드인 업 애니메이션
  fadeInUp(element: HTMLElement, delay: number = 0): Promise<void> {
    element.style.opacity = '0'
    element.style.transform = 'translateY(50px)'
    return this.animate(element, {
      opacity: { from: 0, to: 1 },
      y: { from: 50, to: 0 }
    }, { delay })
  }

  // 스케일인 애니메이션
  scaleIn(element: HTMLElement, delay: number = 0): Promise<void> {
    element.style.transform = 'scale(0.8)'
    element.style.opacity = '0'
    return this.animate(element, {
      scale: { from: 0.8, to: 1 },
      opacity: { from: 0, to: 1 }
    }, { delay })
  }

  // 슬라이드인 애니메이션
  slideInLeft(element: HTMLElement, delay: number = 0): Promise<void> {
    element.style.transform = 'translateX(-100px)'
    element.style.opacity = '0'
    return this.animate(element, {
      x: { from: -100, to: 0 },
      opacity: { from: 0, to: 1 }
    }, { delay })
  }

  slideInRight(element: HTMLElement, delay: number = 0): Promise<void> {
    element.style.transform = 'translateX(100px)'
    element.style.opacity = '0'
    return this.animate(element, {
      x: { from: 100, to: 0 },
      opacity: { from: 0, to: 1 }
    }, { delay })
  }

  // 회전 애니메이션
  rotateIn(element: HTMLElement, delay: number = 0): Promise<void> {
    element.style.transform = 'rotate(-180deg)'
    element.style.opacity = '0'
    return this.animate(element, {
      rotation: { from: -180, to: 0 },
      opacity: { from: 0, to: 1 }
    }, { delay })
  }

  // 스크롤 트리거 애니메이션
  createScrollTrigger(
    element: HTMLElement,
    animation: () => Promise<void>,
    options: {
      threshold?: number
      rootMargin?: string
      once?: boolean
    } = {}
  ): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animation()
            if (options.once !== false) {
              observer.unobserve(element)
            }
          }
        })
      },
      {
        threshold: options.threshold || this.config.threshold,
        rootMargin: options.rootMargin || this.config.rootMargin
      }
    )

    observer.observe(element)
    this.observers.push(observer)
  }

  // 순차 애니메이션
  staggerAnimation(elements: HTMLElement[], animation: (el: HTMLElement) => Promise<void>, stagger: number = 100): Promise<void> {
    return new Promise((resolve) => {
      let completed = 0
      const total = elements.length

      elements.forEach((element, index) => {
        setTimeout(async () => {
          await animation(element)
          completed++
          if (completed === total) resolve()
        }, index * stagger)
      })
    })
  }

  // 통계 카운터 애니메이션
  animateCounter(element: HTMLElement, targetValue: number, duration: number = 2000): Promise<void> {
    const startValue = 0
    const startTime = Date.now()

    return new Promise((resolve) => {
      const animate = () => {
        const currentTime = Date.now()
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        const easedProgress = this.easings['ease-out'](progress)
        const currentValue = Math.floor(startValue + (targetValue - startValue) * easedProgress)

        element.textContent = `${currentValue}+`

        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          resolve()
        }
      }

      requestAnimationFrame(animate)
    })
  }

  // 배경 그라데이션 애니메이션
  animateBackground(element: HTMLElement, duration: number = 3000): void {
    const colors = [
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    ]

    let currentIndex = 0
    const animate = () => {
      element.style.background = colors[currentIndex]
      currentIndex = (currentIndex + 1) % colors.length
      setTimeout(animate, duration)
    }

    animate()
  }

  // 모든 애니메이션 정리
  cleanup(): void {
    this.observers.forEach(observer => observer.disconnect())
    this.observers = []
    this.animations.clear()
  }
}

// 싱글톤 인스턴스 내보내기
export const vanillaAnimations = VanillaAnimations.getInstance()
