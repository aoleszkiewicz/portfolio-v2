import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils/class-helpers';
import TextReveal from '@/components/motion/text-reveal';
import { rubik } from '@/lib/constants/fonts';
import { Experience } from '@/lib/types/experience';
import { formatDate } from '@/lib/utils/api/strapi-helpers';
import { Skeleton } from '@/components/ui/skeleton';

const ExperienceCardSkeleton = () => {
  return (
    <Card className="!bg-transparent' !border-none" disableShadow>
      <CardContent className="p-1">
        <div className="flex items-baseline justify-between">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-20" />
        </div>
        <Skeleton className="mt-2 h-4 w-40" />
        <Skeleton className="mt-2 h-28 w-3/4" />
        <hr className="my-6 border-t border-border" />
      </CardContent>
    </Card>
  );
};

type ExperienceCardProps = Experience & {
  className?: React.HTMLProps<HTMLElement>['className'];
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  position,
  company,
  description,
  startDate,
  endDate,
  className,
}) => {
  const duration = `${formatDate(startDate)} - ${endDate ? formatDate(endDate) : 'Present'}`;
  return (
    <Card
      className={cn('!border-none !bg-transparent', className)}
      disableShadow
    >
      <CardContent className="p-1">
        <div
          className={cn(rubik.className, 'flex items-baseline justify-between')}
        >
          <h3 className="text-lg font-thin uppercase text-slate-500 md:text-xl">
            <TextReveal>@{company}</TextReveal>
          </h3>
          <span className="text-base font-thin uppercase text-slate-500">
            <TextReveal>{duration}</TextReveal>
          </span>
        </div>
        <h4 className="mt-2 text-xl font-medium uppercase md:text-2xl">
          <TextReveal>{position}</TextReveal>
        </h4>
        <p className="mt-2 max-w-2xl text-lg font-light text-zinc-700 dark:text-zinc-400 md:text-xl">
          <TextReveal>{description}</TextReveal>
        </p>
        <hr className="my-6 border-t border-border" />
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
export { ExperienceCardSkeleton };
