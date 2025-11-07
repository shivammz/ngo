'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const quickLinks = ['Home', 'About', 'Initiatives', 'Campaigns', 'Blog', 'Contact'];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#7C3AED] to-[#0EA5A4] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-[#0EA5A4] to-[#7C3AED] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <div className="h-1 bg-gradient-to-r from-[#7C3AED] via-[#0EA5A4] to-[#7C3AED]" />

        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 mb-6"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#7C3AED] to-[#0EA5A4] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">D</span>
                </div>
                <div>
                  <div className="font-bold text-xl">D.V. Singh</div>
                  <div className="text-sm text-gray-400">Foundation</div>
                </div>
              </motion.div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Creating lasting impact through education, empowerment, and community development.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-[#7C3AED] hover:to-[#0EA5A4] transition-all duration-300"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 relative inline-block">
                Quick Links
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#7C3AED] to-[#0EA5A4]" />
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={`#${link.toLowerCase()}`}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <span className="w-0 h-0.5 bg-gradient-to-r from-[#7C3AED] to-[#0EA5A4] group-hover:w-4 transition-all duration-300" />
                      <span>{link}</span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 relative inline-block">
                Contact Info
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#7C3AED] to-[#0EA5A4]" />
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 text-gray-400">
                  <svg className="w-6 h-6 text-[#0EA5A4] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <div className="font-semibold text-white mb-1">Email</div>
                    <a href="mailto:info@dvsinghfoundation.org" className="hover:text-[#0EA5A4] transition-colors">
                      info@dvsinghfoundation.org
                    </a>
                  </div>
                </li>
                <li className="flex items-start space-x-3 text-gray-400">
                  <svg className="w-6 h-6 text-[#0EA5A4] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <div className="font-semibold text-white mb-1">Phone</div>
                    <a href="tel:+911234567890" className="hover:text-[#0EA5A4] transition-colors">
                      +91 123 456 7890
                    </a>
                  </div>
                </li>
                <li className="flex items-start space-x-3 text-gray-400">
                  <svg className="w-6 h-6 text-[#0EA5A4] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <div className="font-semibold text-white mb-1">Address</div>
                    <span>New Delhi, India</span>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 relative inline-block">
                Newsletter
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#7C3AED] to-[#0EA5A4]" />
              </h3>
              <p className="text-gray-400 mb-4">
                Stay updated with our latest initiatives and impact stories.
              </p>
              <div className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#7C3AED] transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-gradient-to-r from-[#7C3AED] to-[#0EA5A4] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © 2025 D.V. Singh Foundation. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm text-center md:text-right">
                Built by{' '}
                <motion.a
                  href="https://denthinkers.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="text-[#0EA5A4] hover:text-[#7C3AED] transition-colors font-semibold"
                >
                  Denthinkers.in
                </motion.a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
