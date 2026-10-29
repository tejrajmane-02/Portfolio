import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get to know more about me and my journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-8 rounded-2xl space-y-6"
          >
            <h3 className="text-2xl font-bold mb-4 text-gradient">Professional Summary</h3>
            <p className="text-gray-300 leading-relaxed">
              Detail-oriented B.Tech student in AI & Data Science with strong Python fundamentals and a growing focus on GenAI and LLM applications. Hands-on experience in building AI-based projects and solving real-world problems. Quick learner, eager to develop and contribute to impactful AI solutions in a fast-paced environment.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-gradient">Education</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-semibold text-white">B.Tech in AI & Data Science</h4>
                <p className="text-gray-400">Annasaheb Dange College of Engineering & Tech, Ashta</p>
                <p className="text-accent text-sm">CGPA: 8.23 | 2026</p>
              </div>
              <div className="border-l-2 border-secondary pl-4">
                <h4 className="font-semibold text-white">HSC [CBSE]</h4>
                <p className="text-gray-400">Sainik School Satara, Maharashtra</p>
                <p className="text-accent text-sm">Percentage: 60.80% | 2022</p>
              </div>
              <div className="border-l-2 border-accent pl-4">
                <h4 className="font-semibold text-white">SSC [CBSE]</h4>
                <p className="text-gray-400">Sainik School Satara, Maharashtra</p>
                <p className="text-accent text-sm">Percentage: 79.80% | 2020</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="glass p-6 rounded-xl text-center glass-hover">
              <h4 className="text-3xl font-bold text-gradient mb-2">2+</h4>
              <p className="text-gray-400">Internships</p>
            </div>
            <div className="glass p-6 rounded-xl text-center glass-hover">
              <h4 className="text-3xl font-bold text-gradient mb-2">2</h4>
              <p className="text-gray-400">AI Projects</p>
            </div>
            <div className="glass p-6 rounded-xl text-center glass-hover">
              <h4 className="text-3xl font-bold text-gradient mb-2">4</h4>
              <p className="text-gray-400">Certifications</p>
            </div>
            <div className="glass p-6 rounded-xl text-center glass-hover">
              <h4 className="text-3xl font-bold text-gradient mb-2">8.23</h4>
              <p className="text-gray-400">CGPA</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
