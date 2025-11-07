'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function InitiativesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const initiatives = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Quality Education',
      description: 'Building schools, providing learning materials, and training teachers to deliver world-class education to underprivileged children.',
      image: 'https://images.pexels.com/photos/8500435/pexels-photo-8500435.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-[#7C3AED] to-[#9F7AEA]'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Girl Empowerment',
      description: 'Scholarship programs, skill development workshops, and mentorship to empower girls and break barriers to their success.',
      image: 'https://images.pexels.com/photos/8500404/pexels-photo-8500404.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-[#0EA5A4] to-[#14B8A6]'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'Community Development',
      description: 'Infrastructure development, healthcare access, and livelihood programs to create sustainable, thriving communities.',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-[#7C3AED] to-[#0EA5A4]'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Digital Literacy',
      description: 'Technology training and digital skills development to prepare communities for the future economy.',
      image: 'https://images.pexels.com/photos/8466711/pexels-photo-8466711.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-[#0EA5A4] to-[#7C3AED]'
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-[#7C3AED] bg-[#7C3AED]/10 px-4 py-2 rounded-full">
            Our Programs
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-6 mb-4">
            Transformative{' '}
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#0EA5A4] bg-clip-text text-transparent">
              Initiatives
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive programs designed to create lasting social impact
          </p>
        </motion.div>

        <div className="space-y-12">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative group overflow-hidden rounded-2xl"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${initiative.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                  <img
                    src={initiative.image}
                    alt={initiative.title}
                    className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </motion.div>
              </div>

              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <motion.div
                  whileHover={{ x: index % 2 === 0 ? 10 : -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${initiative.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                    {initiative.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {initiative.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {initiative.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-[#7C3AED] font-semibold group"
                  >
                    <span>Learn More</span>
                    <svg
                      className="w-5 h-5 group-hover:translate-x-2 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
