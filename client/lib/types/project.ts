import { Image } from './api/strapi-types';
import { CamelToSnakeCaseObj } from './case-mappers';
import { PopulatedCaseStudy } from './case-study';

type Project = {
  name: string;
  tags: Array<{ name: string }>;
  fadeColor: string;
  cover: Image;
  caseStudy: PopulatedCaseStudy;
  demoUrl: string;
  repositoryUrl: string;
};

type SnakeCasedProject = CamelToSnakeCaseObj<Project>;

export type { Project, SnakeCasedProject };
