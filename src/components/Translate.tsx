import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import { Camera, Trash2, Volume2, Loader2, MessageSquare, Keyboard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Translate() {
  const [translation, setTranslation] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const webcamRef = useRef<Webcam>(null);

  const capture = async () => {
    if (webcamRef.current) {
      setIsProcessing(true);
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        // Simulated response until backend is connected
        setTimeout(() => {
          const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
          const detectedLetter = letters[Math.floor(Math.random() * letters.length)];
          setTranslation(prev => prev + detectedLetter);
          setIsProcessing(false);
        }, 1000);
      }
    }
  };

  const clearTranslation = () => {
    setTranslation('');
  };

  const speakTranslation = () => {
    const speech = new SpeechSynthesisUtterance(translation);
    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 rounded-lg shadow-lg text-white"
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">ASL to Text Translator</h2>
            <p className="text-purple-100">Convert ASL signs into text in real-time</p>
          </div>
          <Keyboard className="w-12 h-12 text-purple-200" />
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
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
                isProcessing ? 'bg-gray-400' : 'bg-purple-600 hover:bg-purple-700'
              } text-white p-3 rounded-full transition-colors`}
            >
              {isProcessing ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                <Camera className="w-6 h-6" />
              )}
            </motion.button>
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-700 flex items-center">
                <MessageSquare className="w-5 h-5 mr-2" />
                Translation
              </h3>
              <div className="flex space-x-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={speakTranslation}
                  disabled={!translation}
                  className={`p-2 rounded-full ${
                    translation 
                      ? 'text-purple-600 hover:bg-purple-100' 
                      : 'text-gray-300'
                  } transition-colors`}
                >
                  <Volume2 className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={clearTranslation}
                  disabled={!translation}
                  className={`p-2 rounded-full ${
                    translation 
                      ? 'text-red-600 hover:bg-red-100' 
                      : 'text-gray-300'
                  } transition-colors`}
                >
                  <Trash2 className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={translation}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="min-h-[150px] p-4 bg-gray-50 rounded-lg border border-gray-200"
              >
                {translation ? (
                  <div className="text-lg font-medium text-gray-800">{translation}</div>
                ) : (
                  <span className="text-gray-400">Translation will appear here...</span>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-semibold mb-6">How to Use</h3>
          <div className="space-y-4">
            {[
              'Position your hand clearly in the camera view',
              'Make an ASL letter sign',
              'Click the camera button to capture',
              'Wait for the letter to be recognized',
              'Continue spelling out your word or sentence',
              'Use the speak button to hear the translation',
              'Clear the text to start a new translation'
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center p-4 bg-purple-50 rounded-lg"
              >
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mr-3">
                  {index + 1}
                </div>
                <span className="text-gray-700">{step}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Translate;