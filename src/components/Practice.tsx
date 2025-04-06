import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import { Camera, RefreshCw, Award, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function Practice() {
  const [currentLetter, setCurrentLetter] = useState('A');
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [streak, setStreak] = useState(0);
  const webcamRef = useRef<Webcam>(null);

  const getRandomLetter = () => {
    const newLetter = letters[Math.floor(Math.random() * letters.length)];
    setCurrentLetter(newLetter);
    setFeedback('');
  };

  const capture = async () => {
    if (webcamRef.current) {
      setIsProcessing(true);
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        // Simulated response until backend is connected
        setTimeout(() => {
          const detected = letters[Math.floor(Math.random() * letters.length)];
          if (detected === currentLetter) {
            setScore(prev => prev + 1);
            setStreak(prev => prev + 1);
            setFeedback('✅ Correct! Great job!');
          } else {
            setStreak(0);
            setFeedback(`❌ Not quite. The model detected "${detected}". Try again!`);
          }
          setIsProcessing(false);
        }, 1000);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-lg shadow-lg text-white"
      >
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">Practice Mode</h2>
            <p className="text-blue-100">Master ASL letters through interactive practice</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">{score}</div>
            <div className="text-sm text-blue-200">Total Score</div>
          </div>
        </div>
        <div className="mt-4 bg-white/10 rounded-lg p-3 flex items-center justify-between">
          <div className="flex items-center">
            <Award className="w-5 h-5 mr-2" />
            <span>Current Streak: {streak}</span>
          </div>
          <div className="h-2 bg-white/20 rounded-full w-32">
            <motion.div
              className="h-full bg-yellow-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(streak / 5) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <div className="text-center mb-6">
            <p className="text-gray-600 mb-2">Show this letter:</p>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentLetter}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                className="text-8xl font-bold text-blue-600"
              >
                {currentLetter}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative">
            <Webcam
              ref={webcamRef}
              audio={false}
              screenshotFormat="image/jpeg"
              className="w-full rounded-lg shadow-lg"
              mirrored={true}
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={capture}
              disabled={isProcessing}
              className={`absolute bottom-4 right-4 ${
                isProcessing ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
              } text-white p-3 rounded-full transition-colors`}
            >
              <Camera className="w-6 h-6" />
            </motion.button>
          </div>

          {feedback && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-4 p-4 rounded-lg text-center text-lg font-medium ${
                feedback.includes('Correct') 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {feedback}
            </motion.div>
          )}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={getRandomLetter}
            className="mt-4 w-full flex items-center justify-center px-4 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Next Letter
          </motion.button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-semibold mb-6">Practice Tips</h3>
          <div className="space-y-4">
            {[
              'Position your hand clearly in the center of the camera',
              'Ensure good lighting for better recognition',
              'Keep your hand steady when capturing',
              'Practice each letter multiple times',
              'Pay attention to finger positioning'
            ].map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center p-3 bg-gray-50 rounded-lg"
              >
                <ChevronRight className="w-5 h-5 text-blue-500 mr-2" />
                <span className="text-gray-700">{tip}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Practice;