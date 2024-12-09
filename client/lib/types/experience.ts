import { CamelToSnakeCaseObj } from './case-mappers';

type Experience = {
  position: string;
  company: string;
  description: string;
  startDate: string;
  endDate?: string;
};

type SnakeCasedExperience = CamelToSnakeCaseObj<Experience>;

export type { Experience, SnakeCasedExperience };
