'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: 'Flutter 개발자',
      company: '뉴마핏',
      period: '2024.11 - 2025.02',
      location: '서울, 한국',
      description: [
        'Flutter 기반 피트니스 애플리케이션 개발 및 유지보수',
        'BLE(Bluetooth Low Energy) 서비스 구현으로 자체 기기와 데이터 송수신 지원',
        'flutter_blue_plus 패키지를 활용한 블루투스 기기 스캔 및 연결 기능 구현',
        '블루투스 연결 지연 문제 디버깅 및 로그 분석을 통한 사용자 경험 개선',
        '작은 버그 수정부터 새로운 기능 제안까지 적극적인 개발 참여'
      ],
      achievements: [
        {
          title: '메타데이터 기반 테스트 시스템 아키텍처 설계',
          description: '기존 앱에서 새로운 운동 테스트 타입 추가 시 5개 이상 파일 수정이 필요한 비효율성을 해결하기 위해, Dart 2.17+의 Enhanced Enum을 활용한 혁신적인 메타데이터 기반 자동화 시스템을 설계했습니다.',
          details: [
            'TestType enum에 테스트별 프로토콜, UI 메타데이터, 측정 지표를 중앙 집중화',
            'Factory Pattern을 적용한 TestProtocol 클래스로 런타임 동적 객체 생성',
            '사용자 정의 커스텀 테스트 지원으로 확장성 확보',
            'CPET, Max Test, FatMax Test, 페이스 고정 테스트 등 8가지 테스트 타입 지원'
          ]
        },
        {
          title: '동적 UI 렌더링 및 성능 최적화',
          description: 'TestType의 메타데이터를 기반으로 ListView.builder가 자동 생성하여 아이콘, 제목, 설명을 동적 렌더링하며, visible 플래그로 조건부 표시까지 구현했습니다.',
          details: [
            '메타데이터 기반 동적 UI 자동 생성 시스템',
            'ListView.builder를 활용한 효율적인 렌더링',
            '조건부 표시 로직으로 유연한 UI 관리',
            '새로운 테스트 추가 시간 기존 2-3일 → 30분으로 95% 단축'
          ]
        },
        {
          title: '코드 품질 및 유지보수성 향상',
          description: '체계적인 아키텍처 설계를 통해 코드 중복을 대폭 제거하고 유지보수성을 크게 향상시켜, 향후 확장이 용이한 플랫폼을 구축했습니다.',
          details: [
            '코드 중복 90% 제거로 유지보수성 대폭 향상',
            '향후 10가지 이상 추가 테스트 타입 확장 준비 완료',
            'enum 항목 추가만으로 새로운 테스트 타입 완성 가능',
            '확장 가능한 플랫폼 아키텍처 구축'
          ]
        }
      ],
      technologies: ['Flutter', 'Dart', 'BLE', 'flutter_blue_plus', 'GraphQL'],
      link: 'https://newmafit.com'
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            경력
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            다양한 프로젝트를 통해 쌓은 경험과 성장 과정을 소개합니다.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-primary-300"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-12 md:ml-0`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-primary-600 mb-2">
                          <span className="font-semibold">{exp.company}</span>
                          {exp.link && (
                            <a
                              href={exp.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ml-2 text-primary-400 hover:text-primary-600"
                            >
                              <ExternalLink size={16} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-700 flex items-start">
                          <span className="text-primary-500 mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* 주요 성과 섹션 */}
                    {exp.achievements && (
                      <div className="mb-4">
                        <h4 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                          🏆 주요 성과 및 기술적 기여
                        </h4>
                        <div className="space-y-4">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <div key={achievementIndex} className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                              <h5 className="font-semibold text-gray-900 mb-2 flex items-start">
                                <span className="text-blue-600 mr-2">▶</span>
                                {achievement.title}
                              </h5>
                              <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                                {achievement.description}
                              </p>
                              <ul className="space-y-1">
                                {achievement.details.map((detail, detailIndex) => (
                                  <li key={detailIndex} className="text-xs text-gray-600 flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience 