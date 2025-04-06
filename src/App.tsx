import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { GraduationCap, Brain, Languages, User, LayoutDashboard } from 'lucide-react';
import Learn from './components/Learn';
import Practice from './components/Practice';
import Translate from './components/Translate';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <nav className="bg-gray-800 border-b border-blue-500/20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0 flex items-center">
                  <h1 className="text-xl font-bold text-blue-400">ASL Learning</h1>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link
                    to="/dashboard"
                    className="inline-flex items-center px-3 py-2 text-blue-300 hover:text-blue-100 hover:bg-blue-900/30 rounded-lg transition-colors"
                  >
                    <LayoutDashboard className="w-5 h-5 mr-2" />
                    Dashboard
                  </Link>
                  <Link
                    to="/"
                    className="inline-flex items-center px-3 py-2 text-blue-300 hover:text-blue-100 hover:bg-blue-900/30 rounded-lg transition-colors"
                  >
                    <GraduationCap className="w-5 h-5 mr-2" />
                    Learn
                  </Link>
                  <Link
                    to="/practice"
                    className="inline-flex items-center px-3 py-2 text-blue-300 hover:text-blue-100 hover:bg-blue-900/30 rounded-lg transition-colors"
                  >
                    <Brain className="w-5 h-5 mr-2" />
                    Practice
                  </Link>
                  <Link
                    to="/translate"
                    className="inline-flex items-center px-3 py-2 text-blue-300 hover:text-blue-100 hover:bg-blue-900/30 rounded-lg transition-colors"
                  >
                    <Languages className="w-5 h-5 mr-2" />
                    Translate
                  </Link>
                </div>
              </div>
              <div className="flex items-center">
                <Link
                  to="/profile"
                  className="inline-flex items-center px-3 py-2 text-blue-300 hover:text-blue-100 hover:bg-blue-900/30 rounded-lg transition-colors"
                >
                  <User className="w-5 h-5 mr-2" />
                  Profile
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Learn />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/translate" element={<Translate />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;