'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const blogs = [
    {
      title: 'Empowering 1000 Girls Through Digital Literacy',
      excerpt: 'Learn how our latest digital literacy campaign is breaking barriers and creating opportunities for young girls in rural India.',
      image: 'https://images.pexels.com/photos/8500404/pexels-photo-8500404.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Education',
      date: 'March 15, 2025',
      readTime: '5 min read'
    },
    {
      title: 'Building Sustainable Communities One Village at a Time',
      excerpt: 'Discover how our community development programs are creating lasting impact through infrastructure and livelihood initiatives.',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Development',
      date: 'March 10, 2025',
      readTime: '7 min read'
    },
    {
      title: 'Success Stories: From Dropout to Engineering Scholar',
      excerpt: 'Inspiring journey of three students who overcame odds with the foundation support and are now pursuing their dreams.',
      image: 'https://images.pexels.com/photos/8500377/pexels-photo-8500377.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Impact',
      date: 'March 5, 2025',
      readTime: '6 min read'
    },
    {
      title: 'Technology Meets Tradition: Innovation in Rural Education',
      excerpt: 'How we are blending modern technology with traditional wisdom to create engaging learning experiences.',
      image: 'https://images.pexels.com/photos/8466711/pexels-photo-8466711.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Innovation',
      date: 'February 28, 2025',
      readTime: '8 min read'
    }
  ];

  const categoryColors: Record<string, string> = {
    'Education': 'bg-[#7C3AED]',
    'Development': 'bg-[#0EA5A4]',
    'Impact': 'bg-gradient-to-r from-[#7C3AED] to-[#0EA5A4]',
    'Innovation': 'bg-[#7C3AED]'
  };

  return (
    <section ref={ref} className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-[#7C3AED] bg-[#7C3AED]/10 px-4 py-2 rounded-full">
            Latest Updates
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-6 mb-4">
            Stories & Insights from{' '}
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#0EA5A4] bg-clip-text text-transparent">
              Our Journey
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Stay updated with our latest initiatives, success stories, and community impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/0 to-[#0EA5A4]/0 group-hover:from-[#7C3AED]/10 group-hover:to-[#0EA5A4]/10 transition-all duration-500 z-10 pointer-events-none" />

                <div className="relative h-48 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`${categoryColors[blog.category]} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                      {blog.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{blog.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#7C3AED] transition-colors">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
                    {blog.excerpt}
                  </p>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-2 text-[#7C3AED] font-semibold"
                  >
                    <span>Read More</span>
                    <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-[#7C3AED] text-[#7C3AED] font-semibold rounded-full hover:bg-[#7C3AED] hover:text-white transition-all duration-300"
          >
            View All Articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
