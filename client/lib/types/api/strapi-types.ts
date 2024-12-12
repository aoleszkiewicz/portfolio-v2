import { CamelToSnakeCaseObj } from '@/lib/types/case-mappers';

type Response<T> = {
  data: T extends (infer U)[]
    ? (CamelToSnakeCaseObj<U> & Document)[]
    : Document & CamelToSnakeCaseObj<T>;
  meta: Meta;
};

type Document = {
  id: number;
  documentId: string;
};

type Image = {
  url: string;
  width: number;
  height: number;
  alternativeText?: string;
};

type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

type Meta = {
  pagination: Pagination;
};

export type { Response, Document, Image, Pagination, Meta };
