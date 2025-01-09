import Image from 'next/image'
import { SkillGrid } from './components/SkillGrid'
import { ProjectCarousel } from './components/ProjectCarousel'
import { ContactForm } from './components/ContactForm'
import { AnimateInView } from './components/AnimateInView'
import { ThemeToggle } from './components/ThemeToggle'
import { SocialLinks } from './components/SocialLinks'
import { AboutMe } from './components/AboutMe'
import { FaJava, FaJs, FaPython, FaPhp, FaHtml5, FaCss3, FaReact, FaNodeJs, FaAndroid } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs, SiMysql, SiMongodb, SiC } from 'react-icons/si'

export default function Home() {
  const skills = [
    { name: "Java", icon: <FaJava /> },
    { name: "C", icon: <SiC /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Python", icon: <FaPython /> },
    { name: "PHP", icon: <FaPhp /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3 /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Android", icon: <FaAndroid /> }
  ]

  const projects = [
    { title: "Projeto 1", description: "Descrição do projeto 1. Este é um projeto incrível que demonstra minhas habilidades em desenvolvimento web.", technologies: ["React", "Node.js", "MongoDB"] },
    { title: "Projeto 2", description: "Descrição do projeto 2. Uma aplicação móvel inovadora que resolve problemas do mundo real.", technologies: ["Java", "Android", "MySQL"] },
    { title: "Projeto 3", description: "Descrição do projeto 3. Uma solução backend robusta que lida com grandes volumes de dados.", technologies: ["Python", "Django", "PostgreSQL"] },
  ]

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
      <ThemeToggle />
      <AnimateInView>
        <header className="bg-white dark:bg-gray-800 py-16">
          <div className="container mx-auto px-4 flex flex-col items-center">
            <Image 
              src="https://github.com/TomasSoldador.png" 
              alt="Seu Nome" 
              width={150} 
              height={150} 
              className="rounded-full mb-4"
            />
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Tomás Soldador</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">Desenvolvedor Full Stack</p>
              <SocialLinks />
            </div>
          </div>
        </header>
      </AnimateInView>

      <AnimateInView>
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-600 dark:text-blue-400">Sobre Mim</h2>
          <AboutMe />
        </section>
      </AnimateInView>

      <AnimateInView>
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-600 dark:text-blue-400">Minhas Habilidades</h2>
          <SkillGrid skills={skills} />
        </section>
      </AnimateInView>

      <AnimateInView>
        <section className="bg-white dark:bg-gray-800 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-600 dark:text-blue-400">Projetos</h2>
            <div className="max-w-4xl mx-auto">
              <ProjectCarousel projects={projects} />
            </div>
          </div>
        </section>
      </AnimateInView>

      <AnimateInView>
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-600 dark:text-blue-400">Contato</h2>
          <ContactForm />
        </section>
      </AnimateInView>

      <AnimateInView>
        <footer className="bg-white dark:bg-gray-800 py-8">
          <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-300">
            <p>&copy; 2025 Tomás Soldador. Todos os direitos reservados.</p>
          </div>
        </footer>
      </AnimateInView>
    </main>
  )
}

