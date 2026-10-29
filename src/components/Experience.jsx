import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'DBMS-SQL Intern',
      company: 'Tecspeak It Sol.',
      location: 'Sangli, Maharashtra',
      period: 'June 2024',
      description: [
        'Gained hands-on experience in database management systems',
        'Worked with SQL queries and database operations',
        'Learned database design and optimization techniques',
      ]
    },
    {
      title: 'Data Science Intern',
      company: 'Corizo powered by Wipro (Virtual)',
      location: 'Remote',
      period: 'February 2024',
      description: [
        'Completed virtual internship in Data Science using Python',
        'Worked on data analysis and visualization projects',
        'Gained practical experience in Python for data science applications',
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and achievements
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass p-8 rounded-2xl relative"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary rounded-l-2xl" />

              <div className="pl-6">
                <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                <p className="text-xl text-gradient mb-3">{exp.company}</p>

                <div className="flex flex-wrap gap-4 text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <ul className="space-y-2 text-gray-300">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
