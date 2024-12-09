import { ProjectV2 } from './project';

type CaseStudy = {
  slug: string;
  title: string;
  project: ProjectV2;
};

type PopulatedCaseStudy = Omit<CaseStudy, 'project'>;

export type { CaseStudy, PopulatedCaseStudy };
