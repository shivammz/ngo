'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[#7C3AED]/20 to-[#0EA5A4]/20 rounded-2xl blur-2xl" />
            <img
              src="https://images.pexels.com/photos/8422265/pexels-photo-8422265.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Foundation in action"
              className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#7C3AED] to-[#0EA5A4] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">15+ Years</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Of Impact</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-[#7C3AED] bg-[#7C3AED]/10 px-4 py-2 rounded-full">
                Who We Are
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Empowering Communities,{' '}
              <span className="bg-gradient-to-r from-[#7C3AED] to-[#0EA5A4] bg-clip-text text-transparent">
                Changing Lives
              </span>
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              The D.V. Singh Foundation is dedicated to creating lasting social impact through education, empowerment, and community development. Founded with a vision to transform lives, we work tirelessly to provide quality education to underprivileged children, empower young girls, and build sustainable communities.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Our approach combines innovative programs with grassroots action, ensuring that every initiative creates meaningful, measurable change. We believe that education is the cornerstone of progress, and empowerment is the key to sustainable development.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gradient-to-r from-[#7C3AED] to-[#0EA5A4] rounded-full" />
                <span className="text-gray-700 dark:text-gray-300">Child Education</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gradient-to-r from-[#7C3AED] to-[#0EA5A4] rounded-full" />
                <span className="text-gray-700 dark:text-gray-300">Girl Empowerment</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gradient-to-r from-[#7C3AED] to-[#0EA5A4] rounded-full" />
                <span className="text-gray-700 dark:text-gray-300">Community Development</span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-[#7C3AED] to-[#0EA5A4] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Read Full Story
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
