import { cn } from '@/lib/utils/class-helpers';
import { motion, MotionProps } from 'motion/react';

type MotionWrapProps = MotionProps & {
  children: React.ReactNode;
  className?: React.HTMLProps<HTMLElement>['className'];
  id?: string;
};

const MotionWrap: React.FC<MotionWrapProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <motion.section
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.section>
  );
};

export default MotionWrap;
