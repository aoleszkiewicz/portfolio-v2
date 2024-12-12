'use client';

import { Carousel, CarouselContent } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-auto-scroll';

type InfiniteCarouselProps = {
  direction?: 'forward' | 'backward';
  children: React.ReactNode;
};

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({
  direction = 'forward',
  children,
}) => {
  return (
    <Carousel
      opts={{
        align: 'start',
        dragFree: true,
        loop: true,
      }}
      plugins={[
        Autoplay({
          speed: 600 / 1000,
          startDelay: 100,
          direction,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent>{children}</CarouselContent>
    </Carousel>
  );
};

export default InfiniteCarousel;
