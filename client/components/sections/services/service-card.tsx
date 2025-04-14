import TextReveal from '@/components/motion/text-reveal';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { Service } from '@/lib/types/service';

const ServiceCardSkeleton = () => {
  return (
    <>
      <Skeleton className="h-8 w-1/4" />
      <Separator className="mb-6" />
    </>
  );
};

const ServiceCard: React.FC<Service> = ({ name }) => {
  return (
    <>
      <div className="text-xl md:text-2xl">
        <TextReveal>{name}</TextReveal>
      </div>
      <Separator className="mb-3 md:mb-6" />
    </>
  );
};

export { ServiceCard, ServiceCardSkeleton };
