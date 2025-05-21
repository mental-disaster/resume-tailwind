"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Skills() {
  const titleRef = useRef(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const titleInView = useInView(titleRef, { once: true, amount: 0.3 })
  const cardInViews = cardRefs.current.map((_, index) => 
    useInView(cardRefs.current[index], { once: true, amount: 0.3 })
  )

  const skills = {
    frontend: {
      icon: "🎨",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    backend: {
      icon: "⚙️",
      items: ["Node.js", "Express", "Python", "Django"]
    },
    database: {
      icon: "🗄️",
      items: ["MongoDB", "PostgreSQL", "Redis"]
    },
    devops: {
      icon: "🚀",
      items: ["Docker", "AWS", "CI/CD", "Git"]
    }
  }

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          기술 스택
        </motion.h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, data], index) => (
            <motion.div
              key={category}
              ref={el => cardRefs.current[index] = el}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={cardInViews[index] ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-4xl mb-4">{data.icon}</div>
              <h3 className="text-2xl font-bold mb-6 capitalize text-gray-800">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {data.items.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={cardInViews[index] ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + (i * 0.1) }}
                    whileHover={{ scale: 1.1 }}
                    className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all"
                  >
                    {skill}
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