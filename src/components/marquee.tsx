import React from 'react';
import { motion, RepeatType, Easing } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  duration?: number; // Duration in seconds for one full scroll
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
}

const Marquee = ({
  children,
  className,
  duration = 20,
  direction = 'left',
  pauseOnHover = true,
  ...props
}: MarqueeProps) => {
  const marqueeVariants = {
    animate: {
      x:
        direction === 'left'
          ? ['0%', '-100%']
          : ['-100%', '0%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop' as RepeatType,
          duration: duration,
          ease: 'linear' as Easing,
        },
      },
    },
  };

  return (
    <div
      className={cn(
        'relative flex overflow-hidden [--duration:20s] [--gap:1rem] [--marquee-gap:1rem] group',
        className,
      )}
      {...props}
    >
      <motion.div
        className='flex flex-row justify-around gap-[var(--gap)]'
        variants={marqueeVariants}
        animate='animate'
        style={{ width: 'fit-content' }}
      >
        {children}
        {children} {/* Duplicate children for seamless loop */}
      </motion.div>
    </div>
  );
};

export default Marquee;
