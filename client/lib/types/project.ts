import { Attribute } from './api/strapi-types';
import { CamelToSnakeCaseObj } from './case-mappers';
import { PopulatedCaseStudy } from './case-study';

type Project = {
  name: string;
  tags: Array<{ name: string }>;
  fadeColor: string;
  cover: Attribute;
  caseStudy: PopulatedCaseStudy;
  demoUrl: string;
  repositoryUrl: string;
};

type SnakeCasedProject = CamelToSnakeCaseObj<Project>;

export type { Project, SnakeCasedProject };
