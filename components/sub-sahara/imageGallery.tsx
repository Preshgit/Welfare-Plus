"use client"

import { motion } from "framer-motion"
import Image, { StaticImageData } from "next/image";

interface GalleryImage {
  src: StaticImageData;
  alt: string;
  tall?: boolean;
}

interface ImageGalleryStripProps {
  images: GalleryImage[];
}

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const imageSlideUp = {
  initial: {
    opacity: 0,
    y: 80,
    scale: 0.95,
    clipPath: "inset(100% 0% 0% 0%)"
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1] as any
    }
  }
}

const ImageGalleryStrip = ({ images }: ImageGalleryStripProps) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="flex items-start gap-6 w-full overflow-x-hidden"
    >
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="relative w-[320px] shrink-0 overflow-hidden shadow-lg"
          style={{ height: image.tall ? "380px" : "320px" }}
          variants={imageSlideUp}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-700 hover:scale-110"
          />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default ImageGalleryStrip
