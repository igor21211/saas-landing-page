'use client';
import Image from 'next/image';
import productShowcaseImage from '@/assets/product-image.png';
import pyramidImage from '@/assets/pyramid.png';
import tubeImage from '@/assets/tube.png';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export const ProductShowcase = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={ref}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            {/* Tag */}
            <div className="tag">Boost your productivity</div>
          </div>

          {/* Title */}
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>

          {/* Description */}
          <p className="section-description">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
        </div>
        {/* Image */}
        <div className="relative">
          <Image
            src={productShowcaseImage}
            alt="Product Showcase"
            className="mt-10"
          />
          <motion.img
            src={pyramidImage.src}
            alt="Piramid"
            height={282}
            width={282}
            className="hidden md:block absolute -right-36 -top-32"
            style={{
              translateY: translateY,
            }}
          />
          <motion.img
            src={tubeImage.src}
            alt="Tube"
            height={282}
            width={282}
            className="hidden md:block absolute -left-36 bottom-24"
            style={{
              translateY: translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
