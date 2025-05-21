"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">연락처</h2>
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="text-center">
              <h3 className="font-semibold mb-2">이메일</h3>
              <a href="mailto:example@email.com" className="text-blue-600 hover:underline">
                example@email.com
              </a>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">전화번호</h3>
              <a href="tel:+821012345678" className="text-blue-600 hover:underline">
                +82 10-1234-5678
              </a>
            </div>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-gray-900">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-gray-900">
              LinkedIn
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-gray-900">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 