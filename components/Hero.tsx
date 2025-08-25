'use client'

import { motion } from 'framer-motion'
import { Github, Mail, Globe } from 'lucide-react'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rotate-45"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-white rotate-12"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-white rotate-45"></div>
        <div className="absolute bottom-32 right-10 w-12 h-12 border-2 border-white rotate-12"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            코드로 꿈을 실현하는 <br />
            <span className="text-white-300">개발자 유하은</span>
          </h1>
          
          <motion.p
            className="text-xl md:text-2xl mb-8 text-white-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            🚀 <strong>Flutter</strong>와 <strong>iOS</strong>로 사용자의 일상을 더 편리하게 만드는 <br />
            모바일 앱 개발자입니다. <br />
            <span className="text-lg opacity-90"></span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#contact"
              className="px-8 py-3 bg-white text-primary-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              연락하기
            </a>
            <a
              href="#about"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary-600 transition-colors"
            >
              더 알아보기
            </a>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="https://github.com/yuhaeun-la"
              className="p-3 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>
            <a
              href="https://yuia.tistory.com/"
              className="p-3 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe size={24} />
            </a>
            <a
              href="mailto:exok1and1m@gmail.com"
              className="p-3 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero 