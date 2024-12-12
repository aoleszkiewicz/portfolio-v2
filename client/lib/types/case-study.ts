import { Project } from '@/lib/types/project';

type CaseStudy = {
  slug: string;
  title: string;
  project: Project;
};

type PopulatedCaseStudy = Omit<CaseStudy, 'project'>;

export type { CaseStudy, PopulatedCaseStudy };
