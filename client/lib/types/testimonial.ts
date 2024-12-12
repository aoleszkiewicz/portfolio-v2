import { Image } from './api/strapi-types';

type Testimonial = {
  avatar: Image;
  name: string;
  position: string;
  testimonial: string;
};

export type { Testimonial };
