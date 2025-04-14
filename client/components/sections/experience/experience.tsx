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
        text="Discover the journey that shaped my career, from academic foundations to hands-on experience in real-world projects. My background reflects a blend of technical knowledge and practical application in fullstack development."
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
