'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnnouncementProps extends HTMLMotionProps<'div'> {
  message: string;
  linkHref?: string;
  linkText?: string;
  className?: string;
}

const Announcement = ({
  message,
  linkHref,
  linkText = 'Learn More',
  className,
  ...props
}: AnnouncementProps) => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.2 }}
      className={cn(
        'w-full bg-levwear-slate text-levwear-white py-2 text-center text-sm font-medium',
        className,
      )}
      {...props}
    >
      <div className='container flex items-center justify-center gap-2'>
        <p>{message}</p>
        {linkHref && (
          <a href={linkHref} className='underline hover:text-levwear-electric-blue'>
            {linkText}
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default Announcement;
