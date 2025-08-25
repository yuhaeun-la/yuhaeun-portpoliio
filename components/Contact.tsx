'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Github, Globe } from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: '이메일',
      value: 'exok1and1m@gmail.com',
      link: 'mailto:exok1and1m@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      title: '전화번호',
      value: '+82 10-7762-2120',
      link: 'tel:+821077622120'
    },
    {
      icon: <MapPin size={24} />,
      title: '위치',
      value: '서울 영등포구, 한국',
      link: null
    }
  ]

  const socialLinks = [
    {
      icon: <Github size={24} />,
      title: 'GitHub',
      url: 'https://github.com/yuhaeun-la',
      color: 'hover:text-gray-900'
    },
    {
      icon: <Globe size={24} />,
      title: 'Blog',
      url: 'https://yuia.tistory.com/',
      color: 'hover:text-green-600'
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      url: 'mailto:exok1and1m@gmail.com',
      color: 'hover:text-red-600'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            연락처
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            새로운 기회 혹은 즐거운 협업은 언제나 환영입니다. 자유롭게 연락해주세요!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                연락 정보
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex flex-col items-center space-y-3">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                      {item.icon}
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h4>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-gray-600 hover:text-primary-600 transition-colors text-sm"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-gray-600 text-sm">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                소셜 미디어
              </h3>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-all hover:scale-110 ${social.color}`}
                    title={social.title}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-primary-50 rounded-lg p-8 text-center">
              <h4 className="font-semibold text-gray-900 mb-4 text-xl">
                함께 일하고 싶으시다면? 😊
              </h4>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                새로운 프로젝트, 협업 기회, 또는 단순히 기술에 대한 이야기를 나누고 싶으시다면 
                언제든지 연락해 주세요. 커피챗은 언제나 환영입니다!
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                  프론트엔드 개발
                </span>
                <span className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                  React/TypeScript
                </span>
                <span className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                  Flutter
                </span>
                <span className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                  iOS
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600">
            <p>© 2025 yuhaeun - Portfolio. All rights reserved.</p>
            <p className="mt-2">
              Made with using React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Contact 