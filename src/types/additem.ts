import { ChangeEvent } from 'react'

export interface ItemDetail {
  createdAt: string
  description: string
  favoriteCount: number
  id: number
  images: string[]
  name: string
  ownerId: number
  tag: string[]
  price: number
  updatedAt: string
}

export interface AddItemInputValues {
  images: string[]
  tags: string[]
  price: string
  description: string
  name: string
}

export type InputChangeEvent = ChangeEvent<
  HTMLTextAreaElement | HTMLInputElement
>
