import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { getDetailItem } from '#/apis/getDetailItem'
import DetailItem from './components/DetailItem'
import DetailComments from './components/DetailComments'

import type { ItemDetail } from '#/types/additem'
import {
  INITIAL_COMMENTS_DATA,
  INITIAL_ITEM_INFO,
} from '#/constants/pagesConstants'
import { getItemComments } from '#/apis/getItemComments'
import type { CommentsData } from '#/types/itemDetail'

interface EditWriter {
  image: string
  nickname: string
  id: number
}

interface EditComment {
  writer: EditWriter
  updatedAt: string
  createdAt: string
  content: string
  id: number
}
const INITIAL_EDIT_COMMENT: EditComment = {
  writer: {
    image: '',
    nickname: '',
    id: 0,
  },
  updatedAt: '',
  createdAt: '',
  content: '',
  id: 0,
}

export default function ItemDetail() {
  const [itemInfo, setItemInfo] = useState<ItemDetail>(INITIAL_ITEM_INFO)
  const [editItemNum, setEditItemNum] = useState<number | null>(null)
  const [editComment, setEditComment] =
    useState<EditComment>(INITIAL_EDIT_COMMENT)
  const [itemComments, setItemComments] = useState<CommentsData>(
    INITIAL_COMMENTS_DATA
  )

  const { itemId } = useParams()
  useEffect(() => {
    const loadDetailItem = async () => {
      if (!(typeof itemId === 'string') || isNaN(parseInt(itemId))) {
        return
      }
      const itemInfo = await getDetailItem(itemId)
      setItemInfo(itemInfo)
    }

    const loadItemComments = async () => {
      if (!(typeof itemId === 'string') || isNaN(parseInt(itemId))) {
        return
      }
      const comments = await getItemComments({ id: itemId })
      setItemComments(comments)
    }
    loadDetailItem()
    loadItemComments()
  }, [])
  console.log(editComment)
  const onClickEditComment = (commentIndex: number) => {
    const { createdAt, content, id } = itemComments.list[commentIndex]
    const {
      image,
      nickname,
      id: writerId,
    } = itemComments.list[commentIndex].writer
    setEditComment({
      writer: {
        image: image,
        nickname: nickname,
        id: writerId,
      },
      updatedAt: '',
      createdAt: createdAt,
      content: content,
      id: id,
    })
    setEditItemNum(commentIndex)
  }
  return (
    <div className="pt-[70px] mt-8 m-auto m-container max-w-lg md:max-w-screen-lg flex flex-col">
      <DetailItem itemInfo={itemInfo} />
      <DetailComments
        itemComments={itemComments}
        onClickEditComment={onClickEditComment}
        editItemNum={editItemNum}
      />
    </div>
  )
}
