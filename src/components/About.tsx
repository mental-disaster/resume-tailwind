"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            안녕하세요! 저는 5년차 풀스택 개발자입니다. 사용자 경험을 최우선으로 생각하며,
            깔끔하고 효율적인 코드 작성을 지향합니다. 새로운 기술을 배우는 것을 좋아하며,
            팀과의 협업을 통해 더 나은 결과물을 만들어내는 것을 즐깁니다.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-50 p-4 rounded-lg"
            >
              <h3 className="font-semibold mb-2">교육</h3>
              <p className="text-gray-600">컴퓨터공학 학사</p>
              <p className="text-gray-500 text-sm">서울대학교, 2015-2019</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-50 p-4 rounded-lg"
            >
              <h3 className="font-semibold mb-2">경력</h3>
              <p className="text-gray-600">시니어 개발자</p>
              <p className="text-gray-500 text-sm">ABC 테크, 2019-현재</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 