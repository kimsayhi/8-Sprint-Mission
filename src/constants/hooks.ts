import { Query } from '#/types/items'

export const INITIAL_QUERY: Query = {
  page: 1,
  pageSize: 10,
  orderBy: 'recent',
  keyword: null,
}
