export interface Writer {
  id: number
  image: string
  nickname: string
}

export interface List {
  content: string
  createdAt: string
  id: number
  updatedAt: string
  writer: Writer
}

export interface CommentsData {
  list: List[]
  nextCursor: number
}
