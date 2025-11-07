'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Student, Scholarship Recipient',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'The D.V. Singh Foundation gave me wings to fly. Their scholarship program not only covered my education but also provided mentorship that shaped my future. Today, I am pursuing my engineering degree.',
      location: 'Bihar'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Community Leader',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Our village has been transformed through their community development program. We now have a library, digital learning center, and healthcare facility. The foundation truly cares about holistic development.',
      location: 'Uttar Pradesh'
    },
    {
      name: 'Anjali Verma',
      role: 'Teacher & Volunteer',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Working with the foundation has been incredibly rewarding. Their approach to education is innovative and child-centric. I have witnessed countless children discover their potential.',
      location: 'Madhya Pradesh'
    },
    {
      name: 'Vikram Singh',
      role: 'Parent & Supporter',
      image: 'https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'My daughter was on the verge of dropping out. The foundation not only ensured her education continued but also helped her excel. She is now inspiring other girls in our community.',
      location: 'Rajasthan'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-[#7C3AED]/10 via-transparent to-[#0EA5A4]/10 dark:from-[#7C3AED]/20 dark:to-[#0EA5A4]/20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 text-[200px] font-bold text-gray-900 dark:text-white">"</div>
        <div className="absolute bottom-10 left-10 text-[200px] font-bold text-gray-900 dark:text-white rotate-180">"</div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-[#7C3AED] bg-[#7C3AED]/10 px-4 py-2 rounded-full">
            Impact Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-6 mb-4">
            Voices of{' '}
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#0EA5A4] bg-clip-text text-transparent">
              Transformation
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real stories from the people whose lives we have touched
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20"
                  >
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="relative flex-shrink-0"
                      >
                        <div className="absolute -inset-4 bg-gradient-to-br from-[#7C3AED] to-[#0EA5A4] rounded-full blur-xl opacity-50" />
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="relative w-32 h-32 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
                        />
                      </motion.div>

                      <div className="flex-1 text-center md:text-left">
                        <div className="mb-6">
                          <svg className="w-12 h-12 text-[#7C3AED] mx-auto md:mx-0 mb-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6 italic">
                            {testimonial.quote}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            {testimonial.name}
                          </h4>
                          <p className="text-[#7C3AED] font-medium mb-1">
                            {testimonial.role}
                          </p>
                          <div className="flex items-center justify-center md:justify-start space-x-2 text-gray-500 dark:text-gray-400">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>{testimonial.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-gradient-to-r from-[#7C3AED] to-[#0EA5A4]'
                    : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
