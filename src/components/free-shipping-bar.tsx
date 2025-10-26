'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FreeShippingBarProps extends HTMLMotionProps<'div'> {
  message?: string;
  threshold?: number; // e.g., 50 for $50 threshold
  currentCartTotal?: number;
  className?: string;
}

const FreeShippingBar = ({
  message = 'Free shipping on all orders over $50!',
  threshold = 50,
  currentCartTotal = 0,
  className,
  ...props
}: FreeShippingBarProps) => {
  const remaining = threshold - currentCartTotal;
  const progress = (currentCartTotal / threshold) * 100;

  if (currentCartTotal >= threshold) {
    message = 'Congratulations! Your order qualifies for FREE shipping!';
  } else if (currentCartTotal > 0) {
    message = `Spend $${remaining.toFixed(2)} more for FREE shipping!`;
  }

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 10 }}
      className={cn(
        'w-full bg-levwear-electric-blue text-levwear-white py-2 text-center text-sm font-medium',
        className,
      )}
      {...props}
    >
      <div className='container'>
        <p>{message}</p>
        {currentCartTotal < threshold && currentCartTotal > 0 && (
          <div className='mt-1 h-1 w-full rounded-full bg-levwear-white/30'>
            <div
              className='h-full rounded-full bg-levwear-white'
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default FreeShippingBar;
