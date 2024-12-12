import Section from '@/components/layout/section/section';
import SectionCopy from '@/components/layout/section/section-copy';
import ExperienceCard, { ExperienceCardSkeleton } from './experience-card';
import { fetchData } from '@/lib/utils/api/fetch-data';
import type { Experience } from '@/lib/types/experience';
import { Suspense } from 'react';

const ExperienceCardsLoading = () => {
  return Array.from({ length: 3 }).map((_, index) => (
    <ExperienceCardSkeleton key={`experience_skeleton_${index}`} />
  ));
};

const ExperienceCards = async () => {
  const experiences = await fetchData<Experience[]>('/experiences', {
    sort: 'start_date:desc',
  });

  return (
    <>
      {experiences.data.map(
        ({ position, company, description, start_date, end_date }, index) => (
          <ExperienceCard
            key={`experience_${index}`}
            position={position}
            company={company}
            startDate={start_date}
            endDate={end_date}
            description={description}
          />
        ),
      )}
    </>
  );
};

const Experience: React.FC = () => {
  return (
    <Section id="experience" className="flex flex-col">
      <SectionCopy
        label="Experience"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />

      <div className="grid gap-y-4 py-6 md:py-12">
        <Suspense fallback={<ExperienceCardsLoading />}>
          <ExperienceCards />
        </Suspense>
      </div>
    </Section>
  );
};

export default Experience;
