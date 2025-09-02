'use client'

import { useEffect, useRef } from 'react'
import styles from './about.module.scss'
import { 
  fadeInUp, 
  scaleIn, 
  slideInLeft, 
  slideInRight, 
  createScrollTrigger,
  createTimelineAnimation,
  animateCounter,
  cleanupAnimations
} from './animations'

// 회사 연혁 데이터의 타입을 정의합니다
interface TimelineItem {
  year: string
  title: string
  description: string
}

// About 페이지 컴포넌트를 정의합니다
export default function AboutPage() {
  // 각 섹션의 ref 생성
  const keyVisualRef = useRef<HTMLElement>(null)
  const introRef = useRef<HTMLElement>(null)
  const historyRef = useRef<HTMLElement>(null)
  const locationRef = useRef<HTMLElement>(null)
  
  // 회사 연혁 데이터
  const timelineData: TimelineItem[] = [
    {
      year: '2024',
      title: '글로벌 시장 진출',
      description: '동남아시아 및 유럽 시장 진출, 해외 지사 설립'
    },
    {
      year: '2022',
      title: '시리즈 B 투자 유치',
      description: '100억원 규모의 투자 유치, 기술 개발 및 인재 채용 확대'
    },
    {
      year: '2020',
      title: '회사 설립',
      description: '혁신적인 기술 솔루션으로 지속 가능한 미래를 만들어갑니다'
    },
    {
      year: '2019',
      title: '아이디어 구상',
      description: '세상을 바꿀 혁신 기술에 대한 비전과 열정으로 시작'
    }
  ]

  // GSAP 애니메이션 설정
  useEffect(() => {
    // 페이지 로드 시 즉시 실행되는 애니메이션
    const initAnimations = () => {
      console.log('Initializing animations...')
      
      // Key Visual 애니메이션
      if (keyVisualRef.current) {
        console.log('Setting up Key Visual animation')
        createScrollTrigger(keyVisualRef.current, () => {
          console.log('Key Visual animation triggered')
          fadeInUp(keyVisualRef.current!, 0.1)
        })
      }

      // 회사 소개 섹션 애니메이션
      if (introRef.current) {
        console.log('Setting up Intro section animation')
        createScrollTrigger(introRef.current, () => {
          console.log('Intro section animation triggered')
          const cards = Array.from(introRef.current!.querySelectorAll(`.${styles.introCard}`)) as HTMLElement[]
          createTimelineAnimation(cards)
        })
      }

      // 연혁 섹션 애니메이션
      if (historyRef.current) {
        console.log('Setting up History section animation')
        createScrollTrigger(historyRef.current, () => {
          console.log('History section animation triggered')
          const timelineItems = Array.from(historyRef.current!.querySelectorAll(`.${styles.timelineItem}`))
          timelineItems.forEach((item, index) => {
            if (index % 2 === 0) {
              slideInLeft(item as HTMLElement, index * 0.2)
            } else {
              slideInRight(item as HTMLElement, index * 0.2)
            }
          })
        })
      }

      // 위치 섹션 애니메이션
      if (locationRef.current) {
        console.log('Setting up Location section animation')
        createScrollTrigger(locationRef.current, () => {
          console.log('Location section animation triggered')
          const locationCards = Array.from(locationRef.current!.querySelectorAll(`.${styles.branchCard}`)) as HTMLElement[]
          createTimelineAnimation(locationCards)
        })
      }
    }

    // DOM이 완전히 로드된 후 애니메이션 초기화
    if (typeof window !== 'undefined') {
      // 약간의 지연을 두고 애니메이션 초기화
      setTimeout(initAnimations, 100)
      
      // 테스트용: 페이지 로드 시 즉시 첫 번째 섹션 애니메이션 실행
      setTimeout(() => {
        if (keyVisualRef.current) {
          console.log('Testing immediate animation...')
          fadeInUp(keyVisualRef.current, 0)
        }
      }, 500)
    }

    // 컴포넌트 언마운트 시 정리
    return () => cleanupAnimations()
  }, [])

  return (
    <div className={styles.aboutPage}>
      {/* 홈으로 돌아가는 링크 */}
      <div className={styles.homeLink}>
        <a href="/" className={styles.homeButton}>
          ← 홈으로 돌아가기
        </a>
      </div>
      
      {/* Key Visual 섹션 */}
      <section 
        ref={keyVisualRef}
        className={styles.keyVisual}
      >
        <div className={styles.keyVisualContent}>
          <h1 className={styles.mainTitle}>혁신으로 미래를 만듭니다</h1>
          <p className={styles.subtitle}>
            지속 가능한 기술로 더 나은 세상을 만들어가는<br />
            글로벌 테크 기업입니다
          </p>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>글로벌 파트너</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>200+</span>
              <span className={styles.statLabel}>전문 인력</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>15+</span>
              <span className={styles.statLabel}>국가 진출</span>
            </div>
          </div>
        </div>
        <div className={styles.keyVisualImage}>
          <div className={styles.placeholderImage}>
            🚀
          </div>
        </div>
      </section>

                          {/* 회사 소개 섹션 */}
        <section 
          ref={introRef}
          className={styles.introSection}
        >
         <div className={styles.contentWrapper}>
           <h2 className={styles.sectionTitle}>회사 소개</h2>
           <div className={styles.introGrid}>
             <div className={styles.introCard}>
               <div className={styles.cardIcon}>🎯</div>
               <h3>비전</h3>
               <p>
                 기술의 힘으로 모든 사람이 더 나은 삶을 살 수 있는 
                 지속 가능한 미래를 만드는 것입니다.
               </p>
             </div>
             <div className={styles.introCard}>
               <div className={styles.cardIcon}>💡</div>
               <h3>미션</h3>
               <p>
                 혁신적인 솔루션을 통해 고객의 디지털 전환을 
                 가속화하고 비즈니스 성장을 지원합니다.
               </p>
             </div>
             <div className={styles.introCard}>
               <div className={styles.cardIcon}>🌟</div>
               <h3>핵심 가치</h3>
               <p>
                 혁신, 협력, 투명성, 지속가능성을 바탕으로 
                 신뢰받는 파트너가 되겠습니다.
               </p>
             </div>
           </div>
           
           <div className={styles.companyInfo}>
             <h3>주요 사업 분야</h3>
             <ul>
               <li>인공지능 및 머신러닝 솔루션</li>
               <li>클라우드 인프라 및 보안 서비스</li>
               <li>데이터 분석 및 비즈니스 인텔리전스</li>
               <li>모바일 앱 및 웹 개발</li>
               <li>IoT 및 스마트 시티 솔루션</li>
             </ul>
           </div>
         </div>
       </section>

                               {/* 연혁 섹션 */}
         <section 
           ref={historyRef}
           className={styles.historySection}
         >
         <div className={styles.contentWrapper}>
           <h2 className={styles.sectionTitle}>회사 연혁</h2>
           <div className={styles.timeline}>
             {timelineData.map((item, index) => (
               <div key={index} className={styles.timelineItem}>
                 <div className={styles.timelineYear}>{item.year}</div>
                 <div className={styles.timelineContent}>
                   <h3>{item.title}</h3>
                   <p>{item.description}</p>
                 </div>
               </div>
             ))}
           </div>
         </div>
       </section>

                               {/* 위치 섹션 */}
         <section 
           ref={locationRef}
           className={styles.locationSection}
         >
         <div className={styles.contentWrapper}>
           <h2 className={styles.sectionTitle}>오시는 길</h2>
           <div className={styles.locationGrid}>
             <div className={styles.locationInfo}>
               <h3>본사</h3>
               <div className={styles.addressInfo}>
                 <p><strong>주소:</strong> 서울특별시 강남구 테헤란로 123, 45층</p>
                 <p><strong>전화:</strong> 02-1234-5678</p>
                 <p><strong>이메일:</strong> contact@company.com</p>
                 <p><strong>운영시간:</strong> 평일 09:00 - 18:00</p>
               </div>
               
               <h4>대중교통</h4>
               <div className={styles.transportInfo}>
                 <p><strong>지하철:</strong> 2호선 강남역 3번 출구에서 도보 5분</p>
                 <p><strong>버스:</strong> 강남역 정류장 하차 (간선 146, 360, 740)</p>
               </div>
             </div>
             
             <div className={styles.mapContainer}>
               <div className={styles.mapPlaceholder}>
                 🗺️<br />
                 지도가 여기에 표시됩니다
               </div>
             </div>
           </div>
           
           <div className={styles.branchOffices}>
             <h3>해외 지사</h3>
             <div className={styles.branchGrid}>
               <div className={styles.branchCard}>
                 <h4>🇺🇸 미국 (실리콘밸리)</h4>
                 <p>123 Innovation Drive, San Francisco, CA 94105</p>
               </div>
               <div className={styles.branchCard}>
                 <h4>🇯🇵 일본 (도쿄)</h4>
                 <p>1-1-1 Shibuya, Shibuya City, Tokyo 150-0002</p>
               </div>
               <div className={styles.branchCard}>
                 <h4>🇸🇬 싱가포르</h4>
                 <p>71 Robinson Road, #14-01 Robinson 77, Singapore 068895</p>
               </div>
             </div>
           </div>
         </div>
       </section>
    </div>
  )
}
