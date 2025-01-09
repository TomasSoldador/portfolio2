'use client'

import { motion } from 'framer-motion'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
}

export function ProjectCard({ title, description, technologies }: ProjectCardProps) {
  return (
    <motion.div 
      className="bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md p-6 m-2 h-full flex flex-col justify-between"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <motion.span 
            key={index} 
            className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold px-2.5 py-0.5 rounded"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

