type CamelToSnakeCase<S extends string> = S extends `${infer T}${infer U}`
  ? `${T extends Capitalize<T> ? '_' : ''}${Lowercase<T>}${CamelToSnakeCase<U>}`
  : S;

type CamelToSnakeCaseObj<T> = T extends object
  ? {
      [K in keyof T as CamelToSnakeCase<K & string>]: T[K];
    }
  : T;

type SnakeToCamelCase<S extends string> = S extends `${infer T}_${infer U}`
  ? `${T}${Capitalize<SnakeToCamelCase<U>>}`
  : S;

type SnakeToCamelCaseObj<T> = T extends object
  ? {
      [K in keyof T as SnakeToCamelCase<K & string>]: T[K];
    }
  : T;

export type {
  CamelToSnakeCase,
  CamelToSnakeCaseObj,
  SnakeToCamelCase,
  SnakeToCamelCaseObj,
};
