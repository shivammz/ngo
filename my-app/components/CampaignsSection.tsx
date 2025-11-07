'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function CampaignsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const campaigns = [
    {
      title: 'Books for Every Child',
      image: 'https://images.pexels.com/photos/8500377/pexels-photo-8500377.jpeg?auto=compress&cs=tinysrgb&w=800',
      goal: 500000,
      raised: 375000,
      description: 'Providing quality educational materials to underprivileged children across rural India'
    },
    {
      title: 'Girls Education Initiative',
      image: 'https://images.pexels.com/photos/8363124/pexels-photo-8363124.jpeg?auto=compress&cs=tinysrgb&w=800',
      goal: 750000,
      raised: 620000,
      description: 'Empowering girls through scholarships and mentorship programs'
    },
    {
      title: 'Digital Learning Centers',
      image: 'https://images.pexels.com/photos/8466711/pexels-photo-8466711.jpeg?auto=compress&cs=tinysrgb&w=800',
      goal: 1000000,
      raised: 450000,
      description: 'Building technology-enabled learning centers in underserved communities'
    },
    {
      title: 'Community Health Drive',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800',
      goal: 300000,
      raised: 280000,
      description: 'Providing healthcare access and awareness in rural communities'
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? campaigns.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === campaigns.length - 1 ? 0 : prev + 1));
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
            Our Campaigns
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-6 mb-4">
            Support Our{' '}
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#0EA5A4] bg-clip-text text-transparent">
              Active Campaigns
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Every contribution helps us create lasting impact in communities across India
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {campaigns.map((campaign, index) => {
                const progress = (campaign.raised / campaign.goal) * 100;
                return (
                  <div key={index} className="min-w-full px-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      whileHover={{ y: -10 }}
                      className="group relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-2xl"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/10 to-[#0EA5A4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="grid md:grid-cols-2 gap-8 p-8">
                        <div className="relative overflow-hidden rounded-2xl h-[400px]">
                          <img
                            src={campaign.image}
                            alt={campaign.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        </div>

                        <div className="flex flex-col justify-center">
                          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            {campaign.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
                            {campaign.description}
                          </p>

                          <div className="mb-6">
                            <div className="flex justify-between mb-2">
                              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                Raised: ₹{campaign.raised.toLocaleString()}
                              </span>
                              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                Goal: ₹{campaign.goal.toLocaleString()}
                              </span>
                            </div>
                            <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={isInView ? { width: `${progress}%` } : {}}
                                transition={{ duration: 1.5, delay: 0.5 }}
                                className="h-full bg-gradient-to-r from-[#7C3AED] to-[#0EA5A4] rounded-full"
                              />
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                              {progress.toFixed(0)}% funded
                            </p>
                          </div>

                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gradient-to-r from-[#7C3AED] to-[#0EA5A4] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                          >
                            <span>Support Now</span>
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {campaigns.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-gradient-to-r from-[#7C3AED] to-[#0EA5A4]'
                    : 'w-2 bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
