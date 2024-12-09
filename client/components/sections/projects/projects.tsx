import Section from '@/components/layout/section/section';
import SectionCopy from '@/components/layout/section/section-copy';
import { ProjectsCarousel } from './projects-carousel';
import { CarouselItem } from '@/components/ui/carousel';
import ProjectCard, { ProjectCardSkeleton } from './project-card';
import { fetchData } from '@/lib/utils/api/fetch-data';
import { Suspense } from 'react';
import { Response } from '@/lib/types/api/strapi-types';
import type { SnakeCasedProject } from '@/lib/types/project';

const ProjectCardsLoading = () => {
  return Array.from({ length: 3 }).map((_, index) => (
    <CarouselItem
      key={`project_skeleton_${index}`}
      className="basis-full md:basis-1/2 xl:basis-1/3"
    >
      <ProjectCardSkeleton />
    </CarouselItem>
  ));
};

const ProjectCards = async () => {
  try {
    const projects = await fetchData<Response<SnakeCasedProject[]>>(
      '/projects',
      {
        populate: '*',
      },
    );

    return (
      <>
        {projects.data.map(({ name, tags, fade_color, cover, case_study }) => (
          <CarouselItem
            key={`carousel_item_for_${name}`}
            className="basis-full md:basis-1/2 xl:basis-1/3"
          >
            <ProjectCard
              key={`project_card_${name}`}
              name={name}
              tags={tags}
              fadeColor={fade_color}
              cover={cover}
              caseStudy={case_study}
            />
          </CarouselItem>
        ))}
      </>
    );
  } catch (error) {
    console.error('Error fetching projects:', error);
    return <div>Error loading projects</div>;
  }
};

const Projects: React.FC = () => {
  return (
    <Section id="projects" className="flex flex-col">
      <SectionCopy
        label="Projects"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />

      <ProjectsCarousel>
        <Suspense fallback={<ProjectCardsLoading />}>
          <ProjectCards />
        </Suspense>
      </ProjectsCarousel>
    </Section>
  );
};

export default Projects;
