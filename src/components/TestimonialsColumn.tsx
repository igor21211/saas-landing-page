'use client';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import React from 'react';
import { motion } from 'motion/react';
export const TestimonialsColumn = ({
  testimonials,
  className,
  duration = 10,
}: {
  testimonials: {
    text: string;
    imageSrc: string;
    name: string;
    username: string;
  }[];
  duration?: number;
  className?: string;
}) => {
  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: '-50%' }}
        transition={{
          duration: duration,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(testimonial => (
              <div key={testimonial.name} className="card">
                <div>{testimonial.text}</div>
                <div className="flex items-center gap-2 mt-5">
                  <Image
                    width={40}
                    height={40}
                    src={testimonial.imageSrc}
                    alt={testimonial.name}
                  />
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5">
                      {testimonial.name}
                    </div>
                    <div className="leading-5 tracking-tight">
                      {testimonial.username}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
