export interface Paginated<T> {
  data: T;
  first: number;
  items: number;
  last: number;
  next: number;
  pages: number;
  prev: number;
}