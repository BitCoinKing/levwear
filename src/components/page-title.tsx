import React from 'react';
import { cn } from '@/lib/utils';

interface PageTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'display' | 'lead';
}

const PageTitle = ({ children, className, level = 'h1', ...props }: PageTitleProps) => {
  const Tag = level.startsWith('h') ? (level as 'h1' | 'h2' | 'h3' | 'h4') : 'h1';

  return (
    <Tag className={cn(level, className)} {...props}>
      {children}
    </Tag>
  );
};

export default PageTitle;
