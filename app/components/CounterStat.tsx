"use client";

import React, { useState } from "react";
import { motion, useInView } from "framer-motion";

interface CounterStatProps {
  end: number;
  suffix?: string;
  label: string;
}

export default function CounterStat({ 
  end, 
  suffix = "", 
  label
}: CounterStatProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const duration = 2000;
      const animate = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end]);

  return (
    <motion.div 
      className="text-center" 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="text-5xl font-header text-[#485BFF] mb-2"
        initial={{ scale: 0.8 }}
        animate={isInView ? { scale: 1 } : { scale: 0.8 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {count.toLocaleString()}{suffix}
      </motion.div>
      <div className="text-gray-600">{label}</div>
    </motion.div>
  );
}
