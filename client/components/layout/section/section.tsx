import { cn } from '@/lib/utils/class-helpers';

type SectionProps = React.PropsWithChildren & {
  id?: string;
  className?: React.HTMLProps<HTMLElement>['className'];
  setAsContainer?: boolean;
  disablePadding?: boolean;
};

const Section: React.FC<SectionProps> = ({
  children,
  id,
  className,
  setAsContainer = false,
  disablePadding = false,
}) => {
  return (
    <section
      id={id}
      className={cn(
        setAsContainer && 'container mx-auto',
        !disablePadding && 'p-4 md:p-8',
        className,
        'relative w-full',
      )}
    >
      {children}
    </section>
  );
};

export default Section;
