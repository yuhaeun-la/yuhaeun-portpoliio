'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react'

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const educationData = [
    {
      type: 'education',
      institution: '서울여자대학교',
      degree: '정보보호학과 학사',
      period: '~ 2025.02',
      description: '컴퓨터 과학의 기초 이론과 실무 능력을 갖춘 정보보호 전문가 양성',
      details: [
        '자료구조 및 알고리즘',
        '운영체제',
        '데이터베이스',
        '소프트웨어 공학',
        '웹 프로그래밍'
      ],
    },

    {
      type: 'course',
      institution: '새싹',
      degree: 'Flutter 웹/앱개발 풀스택',
      period: '2024',
      description: 'Flutter를 활용한 크로스플랫폼 모바일 앱 개발 전문 과정',
      details: [
        'Dart 기초 문법 및 객체지향 프로그래밍',
        'Flutter 위젯 및 UI 구성',
        'Flutter 앱 완성 프로젝트',
        '앱 상태관리 (Provider, Riverpod)',
        '실전 앱 개발 및 배포'
      ]
    },
    {
      type: 'course',
      institution: '멋쟁이 사자처럼',
      degree: 'iOS APP SCHOOL 2기',
      period: '2023',
      description: 'iOS 네이티브 앱 개발을 위한 Swift 기초 및 실습 과정',
      details: [
        'Swift 프로그래밍 언어 기초',
        'iOS 앱 개발 환경 구축',
        'UIKit 기반 UI 구성',
        '기초 앱 만들기 프로젝트',
        'App Store 배포 과정'
      ]
    }
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case 'education':
        return <GraduationCap size={24} />
      case 'certification':
        return <Award size={24} />
      case 'course':
        return <BookOpen size={24} />
      default:
        return <GraduationCap size={24} />
    }
  }

  const getColor = (type: string) => {
    switch (type) {
      case 'education':
        return 'bg-blue-100 text-blue-600'
      case 'certification':
        return 'bg-green-100 text-green-600'
      case 'course':
        return 'bg-purple-100 text-purple-600'
      default:
        return 'bg-gray-100 text-gray-600'
    }
  }

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            학력 및 교육
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            체계적인 교육과 지속적인 학습을 통해 전문성을 키워가고 있습니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-full ${getColor(item.type)}`}>
                  {getIcon(item.type)}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      {item.degree}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={16} className="mr-1" />
                      {item.period}
                    </div>
                  </div>
                  
                  <p className="text-primary-600 font-semibold mb-3">
                    {item.institution}
                  </p>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-900">
                      주요 학습 내용:
                    </h4>
                    <ul className="grid grid-cols-1 gap-1">
                      {item.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="text-sm text-gray-600 flex items-start"
                        >
                          <span className="text-primary-500 mr-2">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              지속적인 학습 목표
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="text-primary-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  새로운 기술 습득
                </h4>
                <p className="text-sm text-gray-600">
                  최신 프론트엔드 기술과 도구를 꾸준히 학습
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-primary-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  전문 자격증 취득
                </h4>
                <p className="text-sm text-gray-600">
                  AWS, Google Cloud 등 클라우드 자격증 취득 예정
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="text-primary-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  온라인 강의 수강
                </h4>
                <p className="text-sm text-gray-600">
                  고급 알고리즘 및 시스템 설계 과정 수강 중
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education 