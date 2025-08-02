"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Check, Star, Zap, Rocket, Crown, MessageCircle, Calendar, ArrowRight } from "lucide-react"

const pricingPlans = [
  {
    name: "Starter",
    icon: <Zap className="w-8 h-8" />,
    price: "$100",
    duration: "per project",
    description: "Personal portfolios, static business websites, blogs",
    features: [
      "Responsive Website",
      "Modern UI/UX Design",
      "Basic SEO Optimization",
      "Mobile-First Approach",
      "2 Weeks Delivery",
      "Source Code + Deployment",
      "1 Month Support",
    ],
    popular: false,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Professional",
    icon: <Rocket className="w-8 h-8" />,
    price: "$350",
    duration: "per project",
    description: "Startups, service-based businesses, educational sites",
    features: [
      "Dynamic Web Application",
      "Authentication & Routing",
      "API Development",
      "Advanced Animations",
      "Performance Optimization",
      "5 Weeks Delivery",
      "Source Code + Deployment",
      "3 Months Support",
    ],
    popular: true,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Enterprise",
    icon: <Crown className="w-8 h-8" />,
    price: "$500+",
    duration: "per project",
    description: "Large-scale projects, SaaS, AI tools, real-time platforms",
    features: [
      "Full-Stack Web Application",
      "Admin Panel or Dashboard",
      "Scalable Architecture",
      "Real-time Features",
      "Advanced Security",
      "Payment Gateway Integration",
      "Custom AI Integration*",
      "Source Code + Deployment",
      "6 Month Support",
    ],
    popular: false,
    gradient: "from-orange-500 to-red-500",
  },
]

const testimonials = [
  {
    name: "Kumar Kush",
    role: "Founder, Shri R.P. Enterprises",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Sameer understood our requirements quickly and delivered a clean, professional website that aligns perfectly with our brand. We're very satisfied with the outcome and his timely communication.",
  },
  {
    name: "Smriti Kumari",
    role: "IT Professional",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Impressive work! The portfolio is clean, responsive, and clearly showcases your skills. With a few tweaks, this could easily compete with top-tier developer portfolios.",
  },
]

const stats = [
  { number: "5+", label: "Projects Completed" },
  { number: "100%", label: "Client Satisfaction" },
  { number: "24/7", label: "Support Available" },
  { number: "5★", label: "Average Rating" },
]

export default function FreelanceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedPlan, setSelectedPlan] = useState(1)

  return (
    <section id="freelance" className="py-20 px-6 relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">Hire Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Ready to bring your vision to life? Let's build something extraordinary together.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="glass p-6 rounded-xl text-center hover-lift"
              >
                <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Plans */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-cyan-400 mb-12">Choose Your Plan</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className={`relative glass rounded-2xl p-8 hover-lift cursor-pointer transition-all duration-300 ${
                  plan.popular ? "ring-2 ring-cyan-400 scale-105" : ""
                }`}
                onClick={() => setSelectedPlan(index)}
                whileHover={{ y: -10 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-400 to-purple-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${plan.gradient} mb-4`}>
                    {plan.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">{plan.name}</h4>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-gradient mb-1">{plan.price}</div>
                  <div className="text-gray-400 text-sm">{plan.duration}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.3, delay: 0.6 + featureIndex * 0.05 }}
                      className="flex items-center space-x-3"
                    >
                      <Check className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-cyan-400 to-purple-500 text-black hover:shadow-lg hover:shadow-cyan-400/25"
                      : "border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-cyan-400 mb-12">What Clients Say</h3>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="glass p-6 rounded-2xl hover-lift"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h5 className="font-semibold text-white">{testimonial.name}</h5>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    {/* <p className="text-cyan-400 text-sm">{testimonial.company}</p> */}
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 italic leading-relaxed">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="glass p-12 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-gradient mb-6">Ready to Start Your Project?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and create something amazing together. I'm available for new projects and
              excited to help bring your ideas to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                className="flex items-center space-x-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-cyan-400/25 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5" />
                <span>Start a Conversation</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                className="flex items-center space-x-2 border border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule a Call</span>
              </motion.button>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>Available for new projects</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <span>Response within 24 hours</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
