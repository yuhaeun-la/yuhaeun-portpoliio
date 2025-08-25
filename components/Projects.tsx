'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Eye } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: '버스어디',
      description: '버스를 이용하는 유저들에게 편리한 대중교통 서비스를 제공하는 iOS/Flutter 앱입니다. 20k+ 다운로드, MAU 100+ 달성으로 검증된 실용성을 자랑합니다.',
      image: '/api/placeholder/600/400',
      technologies: ['iOS', 'Swift', 'UIKit', 'Flutter', 'RxSwift', 'Tuist', 'RESTful API', 'CoreData'],
      liveUrl: 'https://apps.apple.com/kr/app/%EB%B2%84%EC%8A%A4%EC%96%B4%EB%94%94-%EC%8B%A4%EC%8B%9C%EA%B0%84-%EB%B2%84%EC%8A%A4-%EC%A0%95%EA%B8%B0-%EC%95%8C%EB%9E%8C-%EC%A6%90%EA%B2%A8%EC%B0%BE%EA%B8%B0/id6479689895?l=en-GB',
      githubUrl: 'https://github.com/Pepsi-Club/WhereMyBus-iOS',
      features: [
        '자주가는 버스 즐겨찾기',
        '버스 정규알람 설정',
        '실시간 버스 위치 확인',
        '근처 정류장 위치 안내',
        '깔끔한 UI/UX 디자인',
        '다크모드 지원'
      ],
      period: '2024.03 - 2024.08 (현재 운영 중)',
      role: '홈 화면, 버스 정류장 검색 기능, 다크모드 개발',
      architecture: 'MVVM-C, Clean Architecture, Modular Architecture',
      stats: {
        downloads: '20,000+',
        mau: '100+',
        platform: 'iOS 출시 완료, Flutter 개발 중'
      }
    },
    {
      title: 'H-Room',
      description: '멘토와 멘티가 함께 쓸 수 있는 앱 플랫폼 입니다. 게이미피케이션을 통해 할 일을 완수하고 포인트를 획득하여 상점에서 원하는 것을 구매할 수 있는 동기부여 시스템을 제공합니다.',
      image: '/api/placeholder/600/400',
      technologies: ['Flutter', 'Dart', 'Riverpod', 'Supabase', 'Clean Architecture', 'Provider Pattern', 'Custom Animations'],
      liveUrl: '',
      githubUrl: '#',
      features: [
        '멘토-멘티 매칭 시스템',
        '게이미피케이션 기반 포인트 시스템',
        '할 일 관리 및 진행률 추적',
        '실시간 알림 및 피드백',
        '포인트 상점 및 리워드 시스템',
        '커스텀 차트 및 진척도 시각화',
        '반응형 디자인'
      ],
      period: '2025.08.01 ~ 2025.08.25',
      role: 'Flutter 풀스택 개발, UI/UX 디자인, 아키텍처 설계',
      architecture: 'Clean Architecture, Repository Pattern, Riverpod 상태관리',
      stats: {
        development: '2주' ,
        status: '개발완료, 출시준비중'
      },
      highlights: [
        '복잡한 상태 관리 및 Provider 생명주기 최적화',
        '동적 폼 생성 및 실시간 검증 시스템 구현',
        '커스텀 차트 위젯 및 애니메이션 최적화',
        '7개 Provider 간 복잡한 의존성 관리',
        '실시간 UI 동기화 및 성능 최적화 달성'
      ]
    },
    {
      title: 'Zeno (제노)',
      description: '공통 커뮤니티에 속한 사람들끼리 퀴즈 질문을 통해 서로의 속마음을 전달하는 소셜 게임 앱입니다. 앱스토어 정식 출시 완료.',
      image: '/api/placeholder/600/400',
      technologies: ['iOS', 'SwiftUI', 'Tuist', 'FCM', 'Firebase', 'KingFisher', 'Lottie'],
      liveUrl: 'https://www.youtube.com/watch?v=j-ts8wLkrUE',
      githubUrl: 'https://github.com/APP-iOS2/ZENO-iOS',
      features: [
        '퀴즈 기반 소셜 게임',
        '커뮤니티 기반 상호작용',
        '실시간 알림 시스템',
        '소셜 로그인 연동',
        '인앱결제 시스템',
        '딥링크 지원'
      ],
      period: '2023.10.03 - 2023.10.24 (3주)',
      role: '홈화면, 탭 애니메이션, 제노 게임 로직 개발',
      architecture: 'SwiftUI 기반 선언형 UI',
      stats: {
        development: '3주 스프린트',
        platform: 'iOS 16.4+',
        status: '앱스토어 출시 완료'
      }
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            프로젝트
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            다양한 기술을 활용하여 완성한 프로젝트들을 소개합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-primary flex items-center justify-center">
                  <span className="text-white text-6xl">
                    {project.title === '버스어디' ? '🚌' : 
                     project.title === 'H-Room' ? '🎯' : '🎮'}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <Eye size={20} className="text-gray-800" />
                    </a>
                  )}
                  {project.githubUrl !== '#' && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <Github size={20} className="text-gray-800" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-800 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>

                {/* 프로젝트 기간 및 역할 */}
                <div className="mb-4 space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-medium">기간:</span>
                    <span className="ml-2">{project.period}</span>
                  </div>
                  <div className="flex items-start text-sm text-gray-500">
                    <span className="font-medium">담당:</span>
                    <span className="ml-2">{project.role}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* 프로젝트 통계 */}
                {project.stats && (
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      프로젝트 현황:
                    </h4>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-gray-600">
                            {key === 'downloads' ? '다운로드' : 
                             key === 'mau' ? 'MAU' : 
                             key === 'platform' ? '플랫폼' :
                             key === 'development' ? '개발기간' :
                             key === 'status' ? '상태' :
                             key === 'modules' ? '모듈 구조' :
                             key === 'optimization' ? '최적화' :
                             key === 'architecture' ? '아키텍처' : key}:
                          </span>
                          <span className="font-medium text-gray-900">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 기술적 하이라이트 (H-Room 전용) */}
                {project.highlights && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      🚀 기술적 하이라이트:
                    </h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="text-sm text-gray-600 flex items-start">
                          <span className="text-blue-500 mr-2">▸</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    주요 기능:
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 flex items-start">
                        <span className="text-primary-500 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    아키텍처:
                  </h4>
                  <p className="text-sm text-gray-600">{project.architecture}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gradient-primary rounded-lg p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-6">프로젝트 성과</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold mb-2">3</div>
                <div className="text-sm opacity-90">프로젝트 완성</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">5K+</div>
                <div className="text-sm opacity-90">실제 사용자</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">1000+</div>
                <div className="text-sm opacity-90">월 활성 사용자</div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 