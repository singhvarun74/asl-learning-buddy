import React from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  Calendar, 
  Clock, 
  Award, 
  TrendingUp, 
  BarChart2,
  BookOpen,
  Target
} from 'lucide-react';

function Dashboard() {
  const stats = [
    { icon: Activity, label: 'Daily Streak', value: '7 days' },
    { icon: Clock, label: 'Time Spent', value: '12.5 hrs' },
    { icon: Target, label: 'Accuracy', value: '92%' },
    { icon: Award, label: 'Level', value: '8' },
  ];

  const recentActivities = [
    { type: 'practice', letter: 'A', result: 'success', time: '2 mins ago' },
    { type: 'learn', topic: 'Numbers', time: '15 mins ago' },
    { type: 'translate', text: 'Hello World', time: '1 hour ago' },
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-blue-500/20"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Welcome back, John!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-700/50 p-6 rounded-xl border border-blue-500/10"
            >
              <div className="flex items-center justify-between mb-4">
                <stat.icon className="w-8 h-8 text-blue-400" />
                <span className="text-2xl font-bold text-white">{stat.value}</span>
              </div>
              <p className="text-blue-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-blue-500/20"
        >
          <div className="flex items-center mb-6">
            <TrendingUp className="w-6 h-6 text-blue-400 mr-3" />
            <h3 className="text-xl font-bold text-white">Learning Progress</h3>
          </div>
          <div className="h-64 bg-gray-700/50 rounded-xl border border-blue-500/10 p-4">
            <div className="relative h-full">
              {/* Add your chart component here */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-blue-300">Progress chart coming soon...</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-blue-500/20"
        >
          <div className="flex items-center mb-6">
            <Calendar className="w-6 h-6 text-blue-400 mr-3" />
            <h3 className="text-xl font-bold text-white">Recent Activity</h3>
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center p-4 bg-gray-700/50 rounded-xl border border-blue-500/10"
              >
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mr-4">
                  {activity.type === 'practice' && <Target className="w-5 h-5 text-blue-400" />}
                  {activity.type === 'learn' && <BookOpen className="w-5 h-5 text-blue-400" />}
                  {activity.type === 'translate' && <Activity className="w-5 h-5 text-blue-400" />}
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">
                    {activity.type === 'practice' && `Practiced letter ${activity.letter}`}
                    {activity.type === 'learn' && `Learned ${activity.topic}`}
                    {activity.type === 'translate' && `Translated "${activity.text}"`}
                  </p>
                  <p className="text-blue-300 text-sm">{activity.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-blue-500/20"
      >
        <div className="flex items-center mb-6">
          <BarChart2 className="w-6 h-6 text-blue-400 mr-3" />
          <h3 className="text-xl font-bold text-white">Weekly Performance</h3>
        </div>
        <div className="h-64 bg-gray-700/50 rounded-xl border border-blue-500/10 p-4">
          <div className="relative h-full">
            {/* Add your performance chart component here */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-blue-300">Performance metrics coming soon...</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Dashboard;