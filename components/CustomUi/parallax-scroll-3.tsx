"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/utils/cn";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={cn("h-[80vh] items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-7xl mx-auto gap-10 py-40 px-4"
        ref={gridRef}
      >
        <Column images={firstPart} translate={translateFirst} />
        <Column images={secondPart} translate={translateSecond} />
        <Column images={thirdPart} translate={translateThird} />
      </div>
    </div>
  );
};

const Column = ({ images, translate }: { images: string[], translate: any }) => (
  <motion.div className="grid gap-10" style={{ y: translate }}>
    {images.map((src, idx) => (
      <motion.div
        key={`image-${idx}`}
        className="relative overflow-hidden rounded-lg shadow-xl"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={src}
          className="w-full object-cover"
          height={600}
          width={400}
          alt={`Transformation ${idx + 1}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-lg font-bold">Member Transformation</p>
          <p className="text-sm">Before & After</p>
        </div>
      </motion.div>
    ))}
  </motion.div>
);