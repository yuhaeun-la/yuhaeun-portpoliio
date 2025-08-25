'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillLevels = {
    expert: {
      title: '자신있게 다룰 수 있어요',
      color: 'bg-pink-100 text-pink-800 border-pink-200',
      skills: ['Flutter', 'Dart', 'Swift', 'iOS']
    },
    experienced: {
      title: '해본 적이 있어요',
      color: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      skills: [
        'TypeScript', 'React', 'Next.js', 'HTML/CSS', 'Tailwind CSS',
        'REST API', 'GraphQL', 'Firebase', 'BLE', 'Python', 
        'Machine Learning', 'Computer Vision', 'StyleGAN2',
        'Git', 'Fastlane', 'Xcode', 'Figma', 'Data Analysis',
        'OOP', 'AI/ML', 'Mobile Development', 'Cross Platform'
      ]
    }
  }

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            기술 스킬
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            다양한 기술을 경험하며 지속적으로 학습하고 성장하고 있습니다.
          </p>
        </motion.div>

        <div className="space-y-12">
          {Object.entries(skillLevels).map(([level, data], levelIndex) => (
            <motion.div
              key={level}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: levelIndex * 0.3 }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center justify-center">
                <span className="mr-3">
                  {level === 'expert' ? '🌟' : '💡'}
                </span>
                {data.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {data.skills.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: levelIndex * 0.3 + techIndex * 0.05 
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all hover:scale-105 ${data.color}`}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills 