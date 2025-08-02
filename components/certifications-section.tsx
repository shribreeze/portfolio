"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { X, ExternalLink, Calendar, Award } from "lucide-react"

const certifications = [
  {
    id: 1,
    title: "Front-End Development with React",
    issuer: "Coursera",
    date: "2022",
    category: "Frontend",
    image: "/placeholder.svg?height=300&width=400",
    credentialId: "GCP-DEV-2024-001",
    skills: ["Google Cloud Platform", "Kubernetes", "Docker", "CI/CD"],
    description:
      "Comprehensive certification covering cloud-native application development, deployment, and monitoring on Google Cloud Platform.",
    verifyUrl: "#",
  },
  {
    id: 2,
    title: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    date: "2024",
    category: "Cloud",
    image: "/placeholder.svg?height=300&width=400",
    credentialId: "AWS-SAA-2024-002",
    skills: ["AWS", "EC2", "S3", "Lambda", "RDS"],
    description: "Validates expertise in designing distributed systems and applications on the AWS platform.",
    verifyUrl: "#",
  },
  {
    id: 3,
    title: "Meta Frontend Developer Professional",
    issuer: "Meta (Coursera)",
    date: "2023",
    category: "Frontend",
    image: "/placeholder.svg?height=300&width=400",
    credentialId: "META-FE-2023-003",
    skills: ["React", "JavaScript", "HTML/CSS", "UI/UX"],
    description:
      "Professional certificate program covering modern frontend development with React and advanced JavaScript.",
    verifyUrl: "#",
  },
  {
    id: 4,
    title: "Ethereum Developer Bootcamp",
    issuer: "ConsenSys Academy",
    date: "2023",
    category: "Web3",
    image: "/placeholder.svg?height=300&width=400",
    credentialId: "ETH-DEV-2023-004",
    skills: ["Solidity", "Web3.js", "Smart Contracts", "DeFi"],
    description: "Intensive bootcamp covering Ethereum development, smart contract programming, and DeFi protocols.",
    verifyUrl: "#",
  },
  {
    id: 5,
    title: "Machine Learning Specialization",
    issuer: "Stanford University (Coursera)",
    date: "2023",
    category: "AI",
    image: "/placeholder.svg?height=300&width=400",
    credentialId: "STAN-ML-2023-005",
    skills: ["Python", "TensorFlow", "Neural Networks", "Deep Learning"],
    description:
      "Comprehensive specialization covering machine learning algorithms, neural networks, and practical applications.",
    verifyUrl: "#",
  },
  {
    id: 6,
    title: "Next.js Developer Certification",
    issuer: "Vercel",
    date: "2023",
    category: "Frontend",
    image: "/placeholder.svg?height=300&width=400",
    credentialId: "NEXT-DEV-2023-006",
    skills: ["Next.js", "React", "Server Components", "Edge Functions"],
    description:
      "Official certification demonstrating expertise in Next.js framework and modern React development patterns.",
    verifyUrl: "#",
  },
  {
    id: 7,
    title: "Blockchain Fundamentals",
    issuer: "IBM (Coursera)",
    date: "2022",
    category: "Web3",
    image: "/placeholder.svg?height=300&width=400",
    credentialId: "IBM-BC-2022-007",
    skills: ["Blockchain", "Hyperledger", "Cryptography", "Consensus"],
    description:
      "Foundational course covering blockchain technology, cryptographic principles, and distributed ledger systems.",
    verifyUrl: "#",
  },
  {
    id: 8,
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI (Coursera)",
    date: "2022",
    category: "AI",
    image: "/placeholder.svg?height=300&width=400",
    credentialId: "DL-AI-2022-008",
    skills: ["Deep Learning", "CNN", "RNN", "PyTorch"],
    description:
      "Advanced specialization in deep learning covering convolutional networks, sequence models, and generative AI.",
    verifyUrl: "#",
  },
]

const categories = ["All", "Cloud", "Frontend", "Web3", "AI"]

export default function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedCert, setSelectedCert] = useState<(typeof certifications)[0] | null>(null)

  const filteredCertifications = certifications.filter(
    (cert) => selectedCategory === "All" || cert.category === selectedCategory,
  )

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Cloud":
        return "from-blue-500 to-cyan-500"
      case "Frontend":
        return "from-green-500 to-teal-500"
      case "Web3":
        return "from-purple-500 to-pink-500"
      case "AI":
        return "from-orange-500 to-red-500"
      default:
        return "from-gray-500 to-gray-600"
    }
  }

  return (
    <section id="certifications" className="py-20 px-6 relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">Certifications</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Continuous learning and professional development across cutting-edge technologies
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-cyan-400 to-purple-500 text-black"
                    : "glass text-gray-300 hover:text-cyan-400"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCertifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="glass rounded-2xl overflow-hidden hover-lift group cursor-pointer"
              onClick={() => setSelectedCert(cert)}
              whileHover={{ y: -10 }}
            >
              <div className="relative">
                <img
                  src={cert.image || "/placeholder.svg"}
                  alt={cert.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 right-4">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getCategoryColor(cert.category)} text-white`}
                  >
                    {cert.category}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-white mb-2 line-clamp-2 group-hover:text-gradient transition-colors">
                  {cert.title}
                </h3>
                <p className="text-cyan-400 text-sm mb-2">{cert.issuer}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-gray-400 text-xs">
                    <Calendar className="w-3 h-3" />
                    <span>{cert.date}</span>
                  </div>
                  <Award className="w-4 h-4 text-yellow-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedCert.image || "/placeholder.svg"}
                  alt={selectedCert.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors cursor-pointer"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${getCategoryColor(selectedCert.category)} text-white`}
                  >
                    {selectedCert.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gradient mb-2">{selectedCert.title}</h3>
                <p className="text-cyan-400 text-lg mb-4">{selectedCert.issuer}</p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Issue Date</h4>
                    <p className="text-white">{selectedCert.date}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Credential ID</h4>
                    <p className="text-white font-mono text-sm">{selectedCert.credentialId}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Description</h4>
                  <p className="text-gray-300 leading-relaxed">{selectedCert.description}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Skills Covered</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-800 rounded-full text-sm text-cyan-400 border border-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.a
                  href={selectedCert.verifyUrl}
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-black px-6 py-3 rounded-full font-semibold cursor-pointer hover:shadow-lg hover:shadow-cyan-400/25"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Verify Certificate</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
