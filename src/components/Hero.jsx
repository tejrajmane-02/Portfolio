import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 glass rounded-full text-sm text-accent"
          >
            AI & Data Science Engineer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Hi, I'm{' '}
            <span className="text-gradient">Tejraj Mane</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-400 max-w-lg"
          >
            B.Tech student in AI & Data Science with strong Python fundamentals and a growing focus on GenAI and LLM applications. Building AI-based solutions for real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="group flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Get in Touch
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/RESUME_2026.pdf"
              download
              className="flex items-center gap-2 px-8 py-3 glass rounded-full font-semibold glass-hover"
            >
              <Download size={18} />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex gap-4 pt-4"
          >
            <a href="https://github.com/tejrajmane" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full glass-hover">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/tejrajmane" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full glass-hover">
              <Linkedin size={24} />
            </a>
            <a href="mailto:manetejraj009@gmail.com" className="p-3 glass rounded-full glass-hover">
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Content - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex justify-center"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-20 blur-3xl"
            />
            <div className="absolute inset-4 rounded-full overflow-hidden glass">
              <img
                src="/PHOTO_.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
