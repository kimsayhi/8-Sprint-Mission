export interface Item {
  createdAt: string;
  description: string;
  favoriteCount: number;
  id: number;
  images: string[];
  name: string;
  ownerId: number;
  price: number;
  tags: string[];
  updatedAt: string;
}

export interface Query {
  page: number;
  pageSize: number;
  orderBy: string;
  keyword: string | null;
}