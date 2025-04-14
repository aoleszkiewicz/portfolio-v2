import Section from '@/components/layout/section/section';
import SectionCopy from '@/components/layout/section/section-copy';
import { ProjectsCarousel } from './projects-carousel';
import { CarouselItem } from '@/components/ui/carousel';
import ProjectCard, { ProjectCardSkeleton } from './project-card';
import { fetchData } from '@/lib/utils/api/fetch-data';
import { Suspense } from 'react';
import type { Project } from '@/lib/types/project';

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
    const projects = await fetchData<Project[]>('/projects', {
      populate: ['cover', 'case_study', 'tags'],
    });

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
    console.error('Error while fetching projects:', error);
    return <div>Error while loading projects</div>;
  }
};

const Projects: React.FC = () => {
  return (
    <Section id="projects" className="flex flex-col">
      <SectionCopy
        label="Projects"
        text="Explore a showcase of my work, highlighting diverse web applications and solutions I've built. Each project demonstrates my expertise in modern technologies, problem-solving skills, and a commitment to delivering high-quality results tailored to unique needs."
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
