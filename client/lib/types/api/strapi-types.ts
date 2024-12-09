type Response<T> = {
  data: T;
};

type Attribute = {
  url: string;
  width: number;
  height: number;
  alternativeText?: string;
};

type Data = {
  id: number;
  attributes: Attribute;
};

type Picture = {
  data: Data;
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

type RootObject = {
  data: Data[];
  meta: Meta;
};

export type {
  Response,
  Attribute,
  Data,
  Picture,
  Pagination,
  Meta,
  RootObject,
};
