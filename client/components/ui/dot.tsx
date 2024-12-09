import { cn } from '@/lib/utils/class-helpers';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

const dotVariants = cva('rounded-full aspect-square', {
  variants: {
    variant: {
      standard: 'bg-black',
      pulse: 'bg-green-500 relative z-[1]',
    },
    size: {
      small: 'w-1 h-1',
      medium: 'w-3 h-3',
      large: 'w-5 h-5',
    },
    defaultVariants: {
      variant: 'standard',
      size: 'medium',
    },
  },
});

type DotProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof dotVariants>;

const Dot = React.forwardRef<HTMLDivElement, DotProps>(
  ({ className, variant = 'standard', size = 'medium', ...props }, ref) => {
    return (
      <div
        className={cn(dotVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {variant === 'pulse' && (
          <div className="absolute -inset-1 animate-pulse rounded-full bg-green-400" />
        )}
      </div>
    );
  },
);

Dot.displayName = 'Dot';

export default Dot;
