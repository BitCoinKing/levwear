import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
}

const StatCard = ({ title, value, description, icon, className, ...props }: StatCardProps) => {
  return (
    <Card className={cn('flex flex-col', className)} {...props}>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-sm font-medium'>{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className='text-2xl font-bold'>{value}</div>
        {description && <p className='text-xs text-muted-foreground'>{description}</p>}
      </CardContent>
    </Card>
  );
};

export default StatCard;
