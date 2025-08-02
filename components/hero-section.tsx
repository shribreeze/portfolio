"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import { useRef } from "react"

function Stars() {
  const ref = useRef<any>()

  // Generate a more controlled sphere of points
  const generateSphere = () => {
    const positions = new Float32Array(5000 * 3)
    for (let i = 0; i < 5000; i++) {
      // Generate points in a sphere using spherical coordinates
      const radius = Math.random() * 2 + 0.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)

      // Ensure no NaN values
      positions[i * 3] = isNaN(x) ? 0 : x
      positions[i * 3 + 1] = isNaN(y) ? 0 : y
      positions[i * 3 + 2] = isNaN(z) ? 0 : z
    }
    return positions
  }

  const [sphere] = useState(() => generateSphere())

  useEffect(() => {
    const interval = setInterval(() => {
      if (ref.current) {
        ref.current.rotation.x += 0.0005
        ref.current.rotation.y += 0.0005
      }
    }, 16)
    return () => clearInterval(interval)
  }, [])

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#00ffff" size={0.002} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}

export default function HeroSection() {
  const [text, setText] = useState("")
  const fullText = "Hey, I'm Sameer Gautam"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 150)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars />
        </Canvas>
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-20 z-10" />

      {/* Floating Particles */}
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8"
        >
          <h1 className="glitch" data-text={fullText}>
            <span className="typing-animation inline-block">{text}</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-12"
        >
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Front-End Developer & Web3 Innovator crafting the future with{" "}
            <span className="text-gradient font-semibold">AI</span>,{" "}
            <span className="text-gradient font-semibold">Blockchain</span>, and{" "}
            <span className="text-gradient font-semibold">Next-Gen Tech</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            className="glass px-8 py-4 rounded-full text-lg font-semibold neon-glow cursor-pointer hover-lift"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open("/Sameer_Gautam-Resume-0725.pdf", "_blank")}
          >
            📄 Resume →
          </motion.button>

          <motion.button
            className="border border-cyan-400 px-8 py-4 rounded-full text-lg font-semibold cursor-pointer hover:bg-cyan-400 hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = "#contact"}
          >
            Let's Connect
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
