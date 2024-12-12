import { CarouselItem } from '@/components/ui/carousel';
import TestimonialCard from './testimonial-card';
import { fetchData } from '@/lib/utils/api/fetch-data';
import { Testimonial } from '@/lib/types/testimonial';
import InfiniteCarousel from './infinite-carousel';
import { Suspense } from 'react';
import Section from '@/components/layout/section/section';
import SectionCopy from '@/components/layout/section/section-copy';

const TestimonialCards: React.FC = async () => {
  const testimonials = await fetchData<Testimonial[]>('/testimonials', {
    populate: 'avatar',
  });

  const firstRow = testimonials.data.slice(0, testimonials.data.length / 2);
  const secondRow = testimonials.data.slice(testimonials.data.length / 2);

  return (
    <>
      <InfiniteCarousel>
        {firstRow.map(({ avatar, name, position, testimonial }, index) => (
          <CarouselItem
            key={`first_row_testimonial_${index}`}
            className="md:basis-1/2 xl:basis-1/3 2xl:basis-1/4"
          >
            <div className="h-full p-1">
              <TestimonialCard
                avatar={avatar}
                name={name}
                position={position}
                testimonial={testimonial}
              />
            </div>
          </CarouselItem>
        ))}
      </InfiniteCarousel>
      <InfiniteCarousel direction={'backward'}>
        {secondRow.map(({ avatar, name, position, testimonial }, index) => (
          <CarouselItem
            key={`second_row_testimonial_${index}`}
            className="md:basis-1/2 xl:basis-1/3 2xl:basis-1/4"
          >
            <div className="h-full p-1">
              <TestimonialCard
                avatar={avatar}
                name={name}
                position={position}
                testimonial={testimonial}
              />
            </div>
          </CarouselItem>
        ))}
      </InfiniteCarousel>
    </>
  );
};

const Testimonials: React.FC = () => {
  return (
    <Section id="testimonials" className="grid gap-10">
      <SectionCopy
        label="Testimonials"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />

      <div className="relative flex flex-col items-center justify-center gap-4 overflow-hidden">
        <Suspense fallback={<div>Loading...</div>}>
          <TestimonialCards />
        </Suspense>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </Section>
  );
};

export default Testimonials;
