"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Hackathons", href: "#hackathons" },
    { name: "Certifications", href: "#certifications" },
    { name: "Freelance", href: "#freelance" },
    { name: "Contact", href: "#contact" },
  ]

  const services = [
    "Full-Stack Development",
    "Web3 Integration",
    "AI/ML Solutions",
    "Mobile Development",
    "UI/UX Design",
    "Technical Consulting",
  ]

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/shribreeze",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/sameergautam07",
      label: "LinkedIn",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://twitter.com/ImSameerGautam",
      label: "Twitter",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:samgautam.in@gmail.com",
      label: "Email",
    },
  ]

  return (
    <footer className="relative bg-black/50 backdrop-blur-sm border-t border-gray-800" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            {/* <div className="text-3xl font-bold text-gradient mb-4">SG.dev</div> */}
            {/* <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Front-End focused Full-Stack Developer & Web3 Innovator crafting the future with cutting-edge technologies. Building
              scalable solutions that bridge the gap between innovation and user experience.
            </p> */}
            <Image
              src="/og-image.png"
              alt="OG Image Banner"
              width={300}
              height={165}
              priority
              className="rounded-xl shadow-lg mb-4"
            />
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="p-3 glass rounded-full text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-cyan-400 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                >
                  <a href={link.href} className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold text-cyan-400 mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                  className="text-gray-400 text-sm"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800"
        >
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>© 2025 Sameer Gautam.
               {/* Made with */}
               </span>
            {/* <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>and lots of ☕</span> */}
          </div>

          <div className="flex items-center space-x-6">
            <motion.button
              onClick={scrollToTop}
              className="p-2 glass rounded-full text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
