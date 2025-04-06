import React, { useState } from 'react';
import { BookOpen, Video, Search, ExternalLink, PlayCircle, BookOpenCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const resources = [
  {
    type: 'video',
    title: 'ASL Alphabet Basics',
    url: 'https://www.youtube.com/embed/tkMg8g8vVUo',
    description: 'Learn the basics of ASL alphabet signs with clear demonstrations.',
    category: 'Beginner',
  },
  {
    type: 'video',
    title: 'Common ASL Phrases',
    url: 'https://www.youtube.com/embed/v1desDduz5M',
    description: 'Essential everyday phrases in American Sign Language.',
    category: 'Intermediate',
  },
  {
    type: 'article',
    title: 'History of ASL',
    url: 'https://www.nidcd.nih.gov/health/american-sign-language',
    description: 'Discover the rich history and evolution of American Sign Language.',
    image: 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=800&auto=format&fit=crop',
    category: 'History',
  },
  {
    type: 'article',
    title: 'ASL Grammar Structure',
    url: 'https://www.handspeak.com/learn/grammar/',
    description: 'Understanding the unique grammar rules and sentence structure in ASL.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop',
    category: 'Advanced',
  },
  {
    type: 'video',
    title: 'ASL Numbers and Counting',
    url: 'https://www.youtube.com/embed/cJ6UFIP-Vt0',
    description: 'Master numbers, counting, and basic math expressions in ASL.',
    category: 'Beginner',
  },
  {
    type: 'article',
    title: 'Deaf Culture Awareness',
    url: 'https://www.nad.org/resources/american-sign-language/culture/',
    description: 'Learn about Deaf culture, community, and etiquette.',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop',
    category: 'Culture',
  },
];

const categories = ['All', 'Beginner', 'Intermediate', 'Advanced', 'History', 'Culture'];

function Learn() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">ASL Learning Resources</h1>
        <p className="text-lg opacity-90">Explore our curated collection of ASL learning materials, from beginner basics to advanced concepts.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-6 rounded-lg shadow-md">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredResources.map((resource, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            {resource.type === 'video' ? (
              <div className="aspect-w-16 aspect-h-9 relative group">
                <iframe
                  src={resource.url}
                  title={resource.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-64"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlayCircle className="w-16 h-16 text-white" />
                </div>
              </div>
            ) : (
              <div className="relative h-48 group">
                <img src={resource.image} alt={resource.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <BookOpenCheck className="w-16 h-16 text-white" />
                </div>
              </div>
            )}
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  resource.category === 'Beginner' ? 'bg-green-100 text-green-800' :
                  resource.category === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  resource.category === 'Advanced' ? 'bg-red-100 text-red-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {resource.category}
                </span>
                {resource.type === 'video' ? (
                  <Video className="w-5 h-5 text-blue-500" />
                ) : (
                  <BookOpen className="w-5 h-5 text-green-500" />
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                Learn more
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Learn;