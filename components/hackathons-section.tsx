"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Trophy, Users, Calendar, ExternalLink, Award, Code, Zap } from "lucide-react"

const hackathons = [
  {
    id: 1,
    name: "Somnia x DoraHacks",
    event: "Somnia Mini Games Global Hackathon 2025",
    date: "August 2025",
    team: "HashHackers",
    position: "Ongoing",
    prize: "$5,000",
    project: "",
    description: "Built an AI-powered DeFi yield optimization platform with automated portfolio rebalancing.",
    tech: ["Somnia", "Web3", "GameFi"],
    demo: "#",
    logo: "/placeholder.svg?height=80&width=80",
    category: "Web3",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    name: "Stellarscape Explorer Hackathon",
    event: "Create UI and embeddable solutions for real-world use cases using andromeda.js and ADOs.",
    date: "April 2024",
    team: "BreezyBytes",
    position: "Winner",
    prize: "$1500",
    project: "Kiddo Cash",
    description: "A Web3 wallet where parents send crypto to children, automatically split into on-chain savings and spendable allowance using Andromeda ADOs for secure, smart fund management.",
    tech: ["Next.js", "CSS", "TypeScript", "Andromeda.js", "ADOs"],
    demo: "#",
    logo: "/placeholder.svg?height=80&width=80",
    category: "Web3",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 3,
    name: "Stellarscape Explorer Hackathon",
    event: "Use aOS to turn your ideas into real-world applications using provided no-code embeddable builders.",
    date: "April 2024",
    team: "Solo",
    position: "Winner",
    prize: "$150",
    project: "",
    description: "Built an AI-powered health monitoring system with real-time diagnostics.",
    tech: ["aOS", "ADOs", "MS Powerpoint"],
    demo: "#",
    logo: "/placeholder.svg?height=80&width=80",
    category: "Web3",
    color: "from-green-500 to-teal-500",
  },
  // {
  //   id: 4,
  //   name: "Flipkart GRiD 5.0",
  //   event: "E-commerce Innovation Challenge",
  //   date: "January 2024",
  //   team: "TechTitans",
  //   position: "Top 10 Finalist",
  //   prize: "Recognition",
  //   project: "Smart Inventory AI",
  //   description: "Developed an AI-powered inventory management system with predictive analytics.",
  //   tech: ["Python", "TensorFlow", "React", "FastAPI"],
  //   demo: "#",
  //   logo: "/placeholder.svg?height=80&width=80",
  //   category: "AI",
  //   color: "from-blue-500 to-cyan-500",
  // },
  // {
  //   id: 5,
  //   name: "HackTheNorth 2023",
  //   event: "Canada's Biggest Hackathon",
  //   date: "September 2023",
  //   team: "InnovatorsHub",
  //   position: "Top 20",
  //   prize: "Recognition",
  //   project: "EcoTracker",
  //   description: "Developed a carbon footprint tracking app with gamification elements.",
  //   tech: ["React Native", "Node.js", "MongoDB", "ML"],
  //   demo: "#",
  //   logo: "/placeholder.svg?height=80&width=80",
  //   category: "Mobile",
  //   color: "from-indigo-500 to-purple-500",
  // },
  // {
  //   id: 6,
  //   name: "Microsoft Imagine Cup",
  //   event: "Global Student Technology Competition",
  //   date: "August 2023",
  //   team: "FutureTech",
  //   position: "Regional Finalist",
  //   prize: "Recognition",
  //   project: "EduVR Platform",
  //   description: "Created an immersive VR education platform for remote learning.",
  //   tech: ["Unity", "C#", "WebXR", "React"],
  //   demo: "#",
  //   logo: "/placeholder.svg?height=80&width=80",
  //   category: "VR/AR",
  //   color: "from-cyan-500 to-blue-500",
  // },
]

const achievements = [
  { icon: <Trophy className="w-6 h-6" />, label: "5+ Hackathons", value: "Participated" },
  { icon: <Award className="w-6 h-6" />, label: "2 Wins", value: "& Top Positions" },
  { icon: <Users className="w-6 h-6" />, label: "10+ Developers", value: "Collaborated" },
  { icon: <Code className="w-6 h-6" />, label: "7+ Projects", value: "Built" },
]

export default function HackathonsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="hackathons" className="py-20 px-6 relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">Hackathon Journey</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Competing at the highest level, building innovative solutions under pressure
          </p>

          {/* Achievements */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="glass p-6 rounded-xl text-center hover-lift"
              >
                <div className="text-cyan-400 mb-3 flex justify-center">{achievement.icon}</div>
                <div className="text-2xl font-bold text-gradient mb-1">{achievement.label}</div>
                <div className="text-gray-400 text-sm">{achievement.value}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hackathons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hackathons.map((hackathon, index) => (
            <motion.div
              key={hackathon.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="glass rounded-2xl overflow-hidden hover-lift group cursor-pointer"
            >
              {/* Header */}
              <div className={`p-6 bg-gradient-to-r ${hackathon.color} relative`}>
                <div className="flex items-center justify-between mb-4">
                  <img
                    src={hackathon.logo || "/placeholder.svg"}
                    alt={hackathon.name}
                    className="w-12 h-12 rounded-lg bg-white/20 p-2"
                  />
                  <div className="text-right">
                    <div className="text-white font-bold text-lg">{hackathon.position}</div>
                    {hackathon.prize !== "Recognition" && (
                      <div className="text-white/80 text-sm">{hackathon.prize}</div>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{hackathon.name}</h3>
                <p className="text-white/80 text-sm">{hackathon.event}</p>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{hackathon.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <Users className="w-4 h-4" />
                    <span>{hackathon.team}</span>
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-cyan-400 mb-2">{hackathon.project}</h4>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{hackathon.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {hackathon.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-800 rounded text-xs text-cyan-400 border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      hackathon.category === "Web3"
                        ? "bg-purple-500/20 text-purple-400"
                        : hackathon.category === "AI"
                          ? "bg-blue-500/20 text-blue-400"
                          : hackathon.category === "Mobile"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-orange-500/20 text-orange-400"
                    }`}
                  >
                    {hackathon.category}
                  </span>
                  <motion.a
                    href={hackathon.demo}
                    className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-sm">View Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
            <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gradient mb-4">Ready for Your Next Hackathon?</h3>
            <p className="text-gray-300 mb-6">
              Looking for a skilled developer to join your team? Let's build something amazing together!
            </p>
            <motion.button
              className="bg-gradient-to-r from-cyan-400 to-purple-500 text-black px-8 py-3 rounded-full font-semibold cursor-pointer hover:shadow-lg hover:shadow-cyan-400/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = "#contact"}
            >
              Let's Team Up
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
