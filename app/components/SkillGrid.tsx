'use client'

import { motion } from 'framer-motion'

interface Skill {
  name: string
  icon: JSX.Element
}

interface SkillGridProps {
  skills: Skill[]
}

export function SkillGrid({ skills }: SkillGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
      {skills.map((skill, index) => (
        <motion.div 
          key={index} 
          className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="text-3xl md:text-4xl mb-2 text-blue-500 dark:text-blue-400">{skill.icon}</div>
          <span className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300 text-center">{skill.name}</span>
        </motion.div>
      ))}
    </div>
  )
}

