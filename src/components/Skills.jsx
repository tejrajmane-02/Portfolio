import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Technical Skills',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'Pandas', level: 80 },
        { name: 'NumPy', level: 75 },
        { name: 'SQL', level: 75 },
        { name: 'OOPS', level: 70 },
      ]
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Jupyter Notebook', level: 85 },
        { name: 'Google Colab', level: 80 },
        { name: 'VS Code', level: 85 },
        { name: 'Power BI', level: 70 },
      ]
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Communication', level: 85 },
        { name: 'Teamwork', level: 90 },
        { name: 'Problem-solving', level: 85 },
        { name: 'Attention to Detail', level: 80 },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-dark/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="glass p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-gradient">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-accent">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
