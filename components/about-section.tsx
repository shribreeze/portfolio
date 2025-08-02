"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skills = [
  { name: "React", icon: "⚛️", level: 95 },
  { name: "Next.js", icon: "▲", level: 90 },
  { name: "Firebase", icon: "🔥", level: 85 },
  { name: "Three.js", icon: "🎮", level: 80 },
  { name: "Web3", icon: "🌐", level: 75 },
  { name: "Node.js", icon: "🟢", level: 80 },
  { name: "TypeScript", icon: "📘", level: 92 },
  { name: "Python", icon: "🐍", level: 85 },
]

const badges = [
  { name: "Full-Stack", color: "from-yellow-500 to-green-500" },
  { name: "AI Expert", color: "from-purple-500 to-pink-500" },
  { name: "Web3 Developer", color: "from-blue-500 to-cyan-500" },
  { name: "Freelancer", color: "from-green-500 to-teal-500" },
  { name: "UI/UX", color: "from-orange-500 to-red-500" },

]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a passionate front-end focused full-stack developer with 2+ years of experience building cutting-edge web applications,
            AI-powered solutions, and blockchain technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-2xl hover-lift">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">My Journey</h3>
              <p className="text-gray-300 leading-relaxed">
                Started as a curious developer exploring React, evolved into a full-stack architect building scalable
                applications. Now I'm pushing boundaries with Web3, AI integration, and creating immersive user
                experiences that bridge the gap between technology and human interaction.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {badges.map((badge, index) => (
                <motion.div
                  key={badge.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className={`px-4 py-2 rounded-full bg-gradient-to-r ${badge.color} text-white font-semibold text-sm cursor-pointer hover-lift`}
                >
                  {badge.name}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">Technical Skills</h3>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="glass p-4 rounded-xl hover-lift"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="font-semibold">{skill.name}</span>
                  </div>
                  <span className="text-cyan-400 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
