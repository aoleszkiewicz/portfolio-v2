import Section from '@/components/layout/section/section';
import SectionCopy from '@/components/layout/section/section-copy';
import { rubik } from '@/lib/constants/fonts';
import { cn } from '@/lib/utils/class-helpers';
import { ServiceCard, ServiceCardSkeleton } from './service-card';
import { Service } from '@/lib/types/service';
import { fetchData } from '@/lib/utils/api/fetch-data';
import { Suspense } from 'react';

const ServiceCardsLoading = () => {
  return Array.from({ length: 4 }).map((_, index) => (
    <ServiceCardSkeleton key={`service_skeleton_${index}`} />
  ));
};

const ServiceCards = async () => {
  const services = await fetchData<Service[]>('/services', {
    sort: 'name:asc',
  });

  return (
    <>
      {services.data.map(({ name }, index) => (
        <ServiceCard key={`service_${index}`} name={name} />
      ))}
    </>
  );
};

const Services: React.FC = () => {
  return (
    <Section id="services">
      <SectionCopy
        label="Services"
        text="I offer comprehensive fullstack development services, including frontend and backend solutions, deployment, and design implementation. My goal is to deliver tailored, efficient, and scalable digital products that meet your needs."
      />

      <div
        className={cn(
          rubik.className,
          'flex w-full flex-col items-start justify-center pt-8 text-2xl capitalize md:float-right md:w-1/2',
        )}
      >
        <div className="flex w-full flex-col gap-y-6">
          <Suspense fallback={<ServiceCardsLoading />}>
            <ServiceCards />
          </Suspense>
        </div>
      </div>
    </Section>
  );
};

export default Services;
export { ServiceCardsLoading, ServiceCards };
