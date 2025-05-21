"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

export default function Experience() {
  const titleRef = useRef(null)
  const [cardRefs, setCardRefs] = useState<(HTMLDivElement | null)[]>([])
  const titleInView = useInView(titleRef, { once: true, amount: 0.3 })
  const [cardInViews, setCardInViews] = useState<boolean[]>([])

  useEffect(() => {
    const observers = cardRefs.map((ref, index) => {
      if (!ref) return null
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          setCardInViews(prev => {
            const newState = [...prev]
            newState[index] = entry.isIntersecting
            return newState
          })
        },
        { threshold: 0.3 }
      )
      
      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach(observer => observer?.disconnect())
    }
  }, [cardRefs])

  const experiences = [
    {
      title: "시니어 개발자",
      company: "ABC 테크",
      period: "2021 - 현재",
      description: "주요 프로젝트 리드, 팀 멘토링, 기술 스택 개선",
      icon: "💼"
    },
    {
      title: "주니어 개발자",
      company: "XYZ 소프트웨어",
      period: "2019 - 2021",
      description: "프론트엔드 개발, API 통합, 성능 최적화",
      icon: "👨‍💻"
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          경력 사항
        </motion.h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              ref={el => {
                const refs = [...cardRefs]
                refs[index] = el
                setCardRefs(refs)
              }}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={cardInViews[index] ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-4xl mb-4">{exp.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{exp.title}</h3>
              <p className="text-blue-600 text-lg font-semibold mb-2">{exp.company}</p>
              <p className="text-gray-500 mb-4">{exp.period}</p>
              <p className="text-gray-600 leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 