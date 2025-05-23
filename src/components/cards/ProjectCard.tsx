"use client"

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { IconBrandGithubFilled } from '@tabler/icons-react'
import { Project } from '@/data/projects'


export const ProjectCard = ({ project }: { project: Project }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span key={i} className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all">
              {tech}
            </span>
          ))}
        </div>
        <a 
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline inline-flex items-center"
        >
          <div className="ml-2 inline-flex items-center justify-center w-6 h-6 bg-black rounded-full">
            <IconBrandGithubFilled className="w-4 h-4 text-white" />
          </div>
        </a>
      </div>
    </motion.div>
  )
} 