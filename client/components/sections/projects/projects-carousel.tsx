'use client';

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useMobile } from '@/lib/hooks/use-mobile';
import { Progress } from '@radix-ui/react-progress';
import { useEffect, useState } from 'react';

const ProjectsCarousel: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [progress, setProgress] = useState(0);
  const isMobile = useMobile();

  useEffect(() => {
    if (!api) {
      return;
    }

    const updateProgress = () => {
      setProgress(api.scrollProgress() * 100);
    };

    api.on('scroll', updateProgress);
  }, [api]);

  return (
    <Carousel setApi={setApi} orientation="horizontal" className="p-4 md:p-8">
      <Progress value={progress} className="mx-auto mb-4 w-1/2" />
      <CarouselContent>{children}</CarouselContent>
      {!isMobile && (
        <>
          <CarouselPrevious />
          <CarouselNext />
        </>
      )}
    </Carousel>
  );
};

export { ProjectsCarousel };
