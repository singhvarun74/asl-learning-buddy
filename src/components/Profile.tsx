import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Target, Clock, BarChart2, Star } from 'lucide-react';

function Profile() {
  const stats = [
    { icon: Trophy, label: 'Total Score', value: '2,547' },
    { icon: Target, label: 'Accuracy', value: '87%' },
    { icon: Clock, label: 'Practice Time', value: '24h' },
    { icon: Star, label: 'Achievements', value: '12' },
  ];

  const achievements = [
    { title: 'First Steps', description: 'Complete your first lesson', date: '2024-03-01' },
    { title: 'Quick Learner', description: 'Practice 5 days in a row', date: '2024-03-05' },
    { title: 'Perfect Score', description: 'Get 100% accuracy in practice', date: '2024-03-10' },
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-blue-500/20"
      >
        <div className="flex items-center space-x-6">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-4xl text-white font-bold">JD</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">John Doe</h2>
            <p className="text-blue-300">ASL Enthusiast • Learning since March 2024</p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-800 p-6 rounded-xl border border-blue-500/20"
          >
            <div className="flex items-center justify-between mb-4">
              <stat.icon className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">{stat.value}</span>
            </div>
            <p className="text-blue-300">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-blue-500/20"
      >
        <div className="flex items-center mb-6">
          <Award className="w-6 h-6 text-blue-400 mr-3" />
          <h3 className="text-xl font-bold text-white">Recent Achievements</h3>
        </div>
        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center p-4 bg-gray-700/50 rounded-xl border border-blue-500/10"
            >
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mr-4">
                <Trophy className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h4 className="text-white font-medium">{achievement.title}</h4>
                <p className="text-blue-300 text-sm">{achievement.description}</p>
              </div>
              <div className="ml-auto">
                <span className="text-blue-400 text-sm">{achievement.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-blue-500/20"
      >
        <div className="flex items-center mb-6">
          <BarChart2 className="w-6 h-6 text-blue-400 mr-3" />
          <h3 className="text-xl font-bold text-white">Progress Graph</h3>
        </div>
        <div className="h-64 bg-gray-700/50 rounded-xl border border-blue-500/10 p-4">
          {/* Add your graph component here */}
          <div className="flex items-center justify-center h-full">
            <p className="text-blue-300">Progress visualization coming soon...</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Profile;