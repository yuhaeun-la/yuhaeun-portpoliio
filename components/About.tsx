'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            소개
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            사용자 중심의 웹 애플리케이션을 개발하는 프론트엔드 개발자입니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              안녕하세요! 저는 <strong>웹 개발자</strong>로서 사용자 경험을 최우선으로 생각하는 개발자입니다.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              TypeScript와 React를 주력으로 사용하며, Flutter 및 iOS 앱 개발 경험이 있습니다.
              iOS, Flutter를 이용해 다양한 앱을 기획 및 배포 했으며 특히 BLE(저전력 블루투스) 연동을 활용한 앱 개발에 자신이 있습니다. 
              GraphQL 기반 Api 통신, shorebird를 통한 앱 배포 경험이 있습니다.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
            사용자 경험을 중요하게 생각하며, 유저 친화적인 인터페이스를 구현하는 것을 목표로 개발을 하고 있습니다.
            팀과의 협업을 통해 더 나은 결과물을 만들어내는 것에 열정을 가지고 있습니다.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                사용자 경험 중심
              </span>
              <span className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                성능 최적화
              </span>
              <span className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                접근성
              </span>
              <span className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                팀 협업
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="w-full h-96 bg-gradient-primary rounded-lg shadow-2xl flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-40 h-40 bg-white bg-opacity-20 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden relative">
                    <img
                      src="/profile.png"
                      alt="웹 개발자 프로필"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">유하은</h3>
                  <p className="text-gray-200">Frontend Developer</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-400 rounded-full opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 