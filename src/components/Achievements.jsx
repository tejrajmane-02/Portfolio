import { motion } from 'framer-motion'
import { Trophy, Target, Users, BookOpen } from 'lucide-react'

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'Winner at Innovation 2023',
      description: 'National Level Competition winner showcasing innovative solutions',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Target,
      title: 'Football Champion',
      description: 'Winner in Football zonal and Inter zonal competitions affiliated by Shivaji University',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Student Coordinator',
      description: 'Coordinated Hackathon 2025 Season 2 at ADCET Ashta',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BookOpen,
      title: 'AI Green Skill Workshop',
      description: 'Completed the AI Green Skill [Python] Workshop',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Trophy,
      title: 'Paper Presentation',
      description: 'Participated in National Level Paper Presentation Conference',
      color: 'from-red-500 to-rose-500'
    }
  ]

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Extracurricular activities and accomplishments
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-6 rounded-2xl glass-hover"
              >
                <div className={`p-4 bg-gradient-to-br ${achievement.color} rounded-xl w-fit mb-4`}>
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-gray-400 text-sm">{achievement.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Achievements
