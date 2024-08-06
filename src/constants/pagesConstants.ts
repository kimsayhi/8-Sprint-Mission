import type { AddItemInputValues } from '#/types/additem'
import { CommentsData } from '#/types/itemDetail'

export const INITIAL_INPUT_VALUES: AddItemInputValues = {
  images: [],
  tags: [],
  price: '',
  description: '',
  name: '',
}

export const ADDITEM_INPUT_PROPS = {
  file: {
    label: '상품 이미지',
    type: 'file',
    name: 'file',
  },
  name: {
    label: '상품명',
    placeholder: '상품명을 입력해주세요',
    type: 'input',
    name: 'itemName',
  },
  price: {
    label: '판매가격',
    placeholder: '판매 가격을 입력해주세요',
    type: 'input',
    name: 'price',
  },
  description: {
    label: '상품 소개',
    placeholder: '상품소개를 입력해주세요',
    name: 'description',
  },
  tags: {
    label: '태그',
    placeholder: '태그를 입력해주세요',
    type: 'input',
    name: 'tags',
  },
}

export const INITIAL_ITEM_INFO = {
  createdAt: '',
  description: '',
  favoriteCount: 0,
  id: 0,
  images: [],
  name: '',
  ownerId: 0,
  tag: [],
  price: 0,
  updatedAt: '',
}

export const INITIAL_COMMENTS_DATA:CommentsData = {
  list: [
    {
      content: '',
      createdAt: '',
      id: 0,
      updatedAt: '',
      writer: {
        id: 0,
        image: '',
        nickname: '',
      },
    },
  ],
  nextCursor: 0,
}
