'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Trophy, Award, Medal, Star, Calendar, ExternalLink } from 'lucide-react'

const Awards = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const awards = [
    {
      title: '차세대여성과학자상',
      organization: '한국정보보호학회',
      category: 'academic',
      date: '2021',
      description: 'StyleGan2를 이용한 얼굴탐지 분석 연구로 하계 정보보호 학술대회에서 수상',
      details: [
        'StyleGAN2 기반 딥러닝 모델 구현',
        '얼굴 탐지 및 분석 알고리즘 개발',
        '정보보호 학술대회 여성과학자 부문 선정'
      ],
      link: 'https://kiisc.or.kr',
      color: 'gold'
    },
    {
      title: '최종 앱 프로젝트 대상',
      organization: '멋쟁이 사자처럼',
      category: 'competition',
      date: '2023.08',
      description: 'iOS 앱 개발 프로젝트 `제노`로 최종 대상 수상',
      details: [
        '아이디어의 창의성과 완성도 인정',
        'iOS Swift 기반 네이티브 앱 개발',
        '사용자 경험과 디자인 우수 평가'
      ],
      link: 'https://likelion.net',
      color: 'gold'
    },
    {
      title: '농업 환경 변화에 따른 작물 병해 진단 AI 경진대회',
      organization: '데이콘 × LG AI Research',
      category: 'competition',
      date: '2023',
      description: 'AI 머신러닝을 활용한 작물 병해 진단 모델로 동메달(상위 10%) 수상',
      details: [
        '팀 프로젝트로 3명이 협업하여 진행',
        '컴퓨터 비전 기반 이미지 분류 모델 구현',
        '전체 참가팀 중 상위 10% 성과 달성'
      ],
      link: 'https://dacon.io',
      color: 'bronze'
    },
    {
      title: '교통 수신호 동작 인식 AI 경진대회',
      organization: '데이콘 × 한국 지능정보사회진흥원(NIA)',
      category: 'competition',
      date: '2021',
      description: '개인 참가로 교통 수신호 동작 인식 AI 모델 개발하여 동메달(상위 10%) 수상',
      details: [
        '개인 프로젝트로 단독 참여',
        '컴퓨터 비전 및 동작 인식 기술 활용',
        '실시간 동작 인식 알고리즘 구현'
      ],
      link: 'https://dacon.io',
      color: 'bronze'
    },
    {
      title: '공공데이터 기반 서비스 개발 표창장',
      organization: '한국데이터산업단지',
      category: 'work',
      date: '2022',
      description: '산업단지 재해 사고 분석 및 시각화 서비스 개발로 표창장 수상',
      details: [
        '공공데이터를 활용한 데이터 분석',
        '산업단지 안전 관리 시각화 대시보드 구현',
        '실무진과 협업하여 실용적 솔루션 제공'
      ],
      color: 'silver'
    }
  ]

  const getIcon = (category: string) => {
    switch (category) {
      case 'competition':
        return <Trophy size={24} />
      case 'contribution':
        return <Star size={24} />
      case 'hackathon':
        return <Medal size={24} />
      case 'work':
        return <Award size={24} />
      case 'certification':
        return <Award size={24} />
      case 'academic':
        return <Trophy size={24} />
      default:
        return <Award size={24} />
    }
  }

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'gold':
        return 'bg-yellow-100 text-yellow-600 border-yellow-200'
      case 'silver':
        return 'bg-gray-100 text-gray-600 border-gray-200'
      case 'bronze':
        return 'bg-orange-100 text-orange-600 border-orange-200'
      case 'blue':
        return 'bg-blue-100 text-blue-600 border-blue-200'
      case 'purple':
        return 'bg-purple-100 text-purple-600 border-purple-200'
      default:
        return 'bg-primary-100 text-primary-600 border-primary-200'
    }
  }

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'competition': return '대회'
      case 'contribution': return '기여상'
      case 'hackathon': return '해커톤'
      case 'work': return '사내상'
      case 'certification': return '자격증'
      case 'academic': return '학술상'
      default: return '기타'
    }
  }

  return (
    <section id="awards" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            수상 실적
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            개발 역량과 노력을 인정받은 다양한 수상 경력을 소개합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg border hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* 카테고리 헤더 */}
              <div className={`px-6 py-3 border-b ${getColorClasses(award.color)}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {getIcon(award.category)}
                    <span className="font-semibold text-sm">
                      {getCategoryName(award.category)}
                    </span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Calendar size={16} className="mr-1" />
                    {award.date}
                  </div>
                </div>
              </div>

              {/* 본문 내용 */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">
                    {award.title}
                  </h3>
                  {award.link && (
                    <a
                      href={award.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-800 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>

                <p className="text-primary-600 font-semibold mb-3">
                  {award.organization}
                </p>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {award.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-900">
                    주요 성과:
                  </h4>
                  <ul className="space-y-1">
                    {award.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="text-sm text-gray-600 flex items-start"
                      >
                        <span className="text-primary-500 mr-2 mt-1">•</span>
                        <span className="flex-1">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 통계 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gradient-primary rounded-lg p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-6">수상 통계</h3>
                         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
               <div>
                 <div className="text-3xl font-bold mb-2">5</div>
                 <div className="text-sm opacity-90">총 수상 횟수</div>
               </div>
               <div>
                 <div className="text-3xl font-bold mb-2">2</div>
                 <div className="text-sm opacity-90">대상 수상</div>
               </div>
               <div>
                 <div className="text-3xl font-bold mb-2">2023</div>
                 <div className="text-sm opacity-90">최근 수상 연도</div>
               </div>
               <div>
                 <div className="text-3xl font-bold mb-2">4</div>
                 <div className="text-sm opacity-90">분야별 수상</div>
               </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Awards 