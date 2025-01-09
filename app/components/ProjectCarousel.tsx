'use client'

import { useState } from 'react'
import { ProjectCard } from "./ProjectCard"
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Project {
  title: string
  description: string
  technologies: string[]
}

interface ProjectCarouselProps {
  projects: Project[]
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity"
        aria-label="Previous project"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity"
        aria-label="Next project"
      >
        <ChevronRight size={24} />
      </button>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

