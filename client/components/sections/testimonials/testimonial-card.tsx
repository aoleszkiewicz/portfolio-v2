import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { cn } from '@/lib/utils/class-helpers';
import { Testimonial } from '@/lib/types/testimonial';
import { getStrapiMedia } from '@/lib/utils/api/strapi-helpers';

type TestimonialCardProps = Testimonial & {
  className?: React.HTMLProps<HTMLElement>['className'];
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  avatar,
  name,
  position,
  testimonial,
  className,
}) => {
  return (
    <Card
      className={cn(
        'h-full w-full rounded-xl',
        'bg-muted/40 hover:bg-muted',
        className,
      )}
    >
      <div className="flex items-center gap-3 p-4">
        <div className="h-12 w-12 overflow-hidden rounded-md border border-border xl:h-16 xl:w-16">
          <Image
            src={getStrapiMedia(avatar.url)}
            alt={name}
            className="aspect-square h-auto w-full object-cover"
            height={80}
            width={80}
          />
        </div>
        <div>
          <p className="font-semibold xl:text-lg">{name}</p>
          <p className="lg:text-md text-sm text-gray-500">{position}</p>
        </div>
      </div>
      <CardContent className="p-4">
        <p className="text-sm leading-loose xl:text-lg">
          {testimonial || 'No testimonial provided.'}
        </p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
