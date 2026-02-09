import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Animation Variants for smoother, staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const VisionCard = ({ imageSrc, altText, description }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -10 }} // Lifts the card up
      className="h-full  rounded-xl overflow-hidden border-2 border-[#BD7500] relative transition-shadow duration-300 hover:shadow-[0_20px_40px_-15px_rgba(189,117,0,0.3)]"
    >
      <div className="flex flex-col items-center justify-center p-6 lg:p-8 h-full">
        
        {/* Image Container */}
        <div className="mb-6 relative w-full flex justify-center">
          <div className="p-4 rounded-full bg-gray-50 group-hover:bg-[#BD7500]/5 transition-colors duration-300">
            <Image
              src={imageSrc}
              alt={altText}
              width={150}
              height={150}
              className="object-contain w-24 h-24 lg:w-28 lg:h-28 transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>

        {/* Text */}
        <h3 className="text-base lg:text-lg font-medium text-gray-800 text-center leading-relaxed">
          {description}
        </h3>
      </div>
    </motion.div>
  );
};

const VisionMission = () => {
  const visionItems = [
    {
      imageSrc: '/home/vision/v1.svg',
      altText: 'Service 1',
      description: 'Establish leadership in electrical solutions in a rapidly growing India.',
    },
    {
      imageSrc: '/home/vision/v2.svg',
      altText: 'Service 2',
      description: 'Set industry standards for quality, innovation, and customer satisfaction.',
    },
    {
      imageSrc: '/home/vision/v3.svg',
      altText: 'Service 3',
      description: 'Deliver innovative and reliable electrical solutions to industries and enterprises.',
    },
    {
      imageSrc: '/home/vision/v4.svg',
      altText: 'Service 4',
      description: 'Enhance safety, efficiency, and sustainability, contributing to a prosperous India.',
    },
  ];

  return (
    <section className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Title Section */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="inline-block lg:text-3xl text-xl font-bold text-[#2E414B] bg-[#C0DBE1] px-10 py-3 rounded-full shadow-sm">
            VISION & MISSION
          </h2>
        </div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {visionItems.map((item, index) => (
            <VisionCard
              key={index}
              imageSrc={item.imageSrc}
              altText={item.altText}
              description={item.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission;