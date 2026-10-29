import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-gradient"
          >
            Portfolio
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <a href="https://github.com/tejrajmane" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full glass-hover">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/tejrajmane" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full glass-hover">
              <Linkedin size={20} />
            </a>
            <a href="mailto:manetejraj009@gmail.com" className="p-3 glass rounded-full glass-hover">
              <Mail size={20} />
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 flex items-center gap-2"
          >
            Made with <Heart size={16} className="text-red-500 fill-red-500" /> by Tejraj Mane
          </motion.p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
