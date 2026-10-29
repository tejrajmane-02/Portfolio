import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

const Certifications = () => {
  const certifications = [
    {
      title: 'Data Science in Python',
      issuer: 'Corizo',
      year: '2024',
      description: 'Comprehensive training in data science concepts using Python'
    },
    {
      title: 'Data Analytics using Power BI',
      issuer: 'Tech Tip 24',
      year: '2024',
      description: 'Hands-on experience with Power BI for data visualization and analytics'
    },
    {
      title: 'Prompt Engineering',
      issuer: 'NSDC',
      year: '2024',
      description: 'Certification in prompt engineering for AI applications'
    },
    {
      title: 'Leadership and Team Effectiveness',
      issuer: 'NPTEL',
      year: '2024',
      description: 'Silver certification in leadership and team management'
    }
  ]

  return (
    <section id="certifications" className="py-20 px-4 bg-dark/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional certifications and courses completed
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl flex items-start gap-4 glass-hover"
            >
              <div className="p-4 bg-gradient-to-br from-primary to-secondary rounded-xl shrink-0">
                <Award size={32} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
                <p className="text-accent mb-2">{cert.issuer} | {cert.year}</p>
                <p className="text-gray-400 text-sm">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
