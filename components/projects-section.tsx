"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "PGLoom",
    description: "A smart PG management platform that streamlines room rentals, tenant services, and payments with real-time tracking and automation.",
    image: "/PGLoom.jpg?height=300&width=500",
    tech: ["Next.js", "TypeScript", "Aceternity", "Firebase", "Node.js"],
    github: "#",
    demo: "#",
    category: "Ongoing",
  },
  {
    id: 2,
    title: "****** - Confidential Project",
    description: "A confidential Web3 project involving real-time Data visualization of crypto market.",
    image: "/OrderBook.webp?height=300&width=500",
    tech: ["Next.js", "TypeScript", "Three.js", "Tailwind", "WebSocket"],
    github: "#",
    demo: "#",
    category: "Web3",
  },
  {
    id: 3,
    title: "RapidQ",
    description: "A real-time food ordering platform that lets customers place orders in advance and receive live updates from shopkeepers, streamlining queue management and payment.",
    image: "/RapidQ.png?height=300&width=500",
    tech: ["React", "JavaScript", "Bootstrap", "Firebase", "RestAPI"],
    github: "#",
    demo: "https://www.rapidq.in/",
    category: "Web App",
  },
  {
    id: 4,
    title: "Tantu",
    description: "A real-time chat web app enabling seamless one-on-one and group conversations with typing indicators and message history using Socket.io.",
    image: "/Tantu.png?height=300&width=500",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "Chakra UI"],
    github: "#",
    demo: "https://tantu.onrender.com",
    category: "Web App",
  },
  {
    id: 5,
    title: "EssayGrader",
    description: "An AI-powered tool that evaluates essays instantly based on grammar, coherence, and relevance, offering constructive feedback.",
    image: "/EssayGrader.png?height=300&width=500",
    tech: ["Next.js", "JavaScript", "Tailwind CSS", "Gemini API"],
    github: "#",
    demo: "https://essaygrader-ai.vercel.app/",
    category: "AI",
  },
  {
    id: 6,
    title: "Dr.Foodie",
    description: " A health-focused website offering personalized diet tips, nutrition plans, and food recommendations for a balanced lifestyle.",
    image: "/DrFoodie.png?height=300&width=500",
    tech: ["HTML", "CSS", "JavaScript", "MySQL"],
    github: "#",
    demo: "https://drfoodie-01.web.app/",
    category: "Web App",
  },
  {
    id: 7,
    title: "Kiddo Cash",
    description: "A Web3 wallet where parents send crypto to children, automatically split into on-chain savings and spendable allowance using Andromeda ADOs for secure, smart fund management.",
    image: "/KiddoCash.png?height=300&width=500",
    tech: ["Next.js", "CSS", "TypeScript", "Andromeda.js", "ADOs"],
    github: "#",
    demo: "https://kiddo-cash.vercel.app/",
    category: "Web3",
  },
  {
    id: 8,
    title: "SRP Enterprises",
    description: "A freelance project delivering a professional company profile website for a pharmaceutical packaging firm, built using HTML, Tailwind CSS, and JavaScript.",
    image: "/SRP.png?height=300&width=500",
    tech: ["HTML", "Tailwind CSS", "JavaScript", "Vercel"],
    github: "#",
    demo: "https://www.srpgroups.co.in/",
    category: "Web App",
  },
  {
    id: 9,
    title: "ViriyAi",
    description: "An EdTech quiz platform integrated with a LangChain-powered AI chatbot that helps students understand concepts through interactive Q&A and instant feedback.",
    image: "/ViriyAi.png?height=300&width=500",
    tech: ["Next.js","Tailwind", "LangChain", "MCP Server", "Gemini"],
    github: "#",
    demo: "#",
    category: "Ongoing",
  },
  
]

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-20 px-6" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing innovative solutions that push the boundaries of technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden hover-lift group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                    <motion.a
                      href={project.github}
                      className="p-2 bg-black/50 rounded-full hover:bg-cyan-400 hover:text-black transition-colors cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      className="p-2 bg-black/50 rounded-full hover:bg-cyan-400 hover:text-black transition-colors cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.category === "AI"
                        ? "bg-purple-500"
                        : project.category === "Web3"
                          ? "bg-blue-500"
                          : "bg-green-500"
                    }`}
                  >
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-3 group-hover:text-gradient transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-800 rounded text-xs text-cyan-400 border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            className="glass px-8 py-4 rounded-full text-lg font-semibold neon-glow cursor-pointer hover-lift"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
