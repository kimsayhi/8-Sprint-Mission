import { CommentsData } from '#/types/itemDetail'
import { useNavigate } from 'react-router'
import CommentCard from './CommentCard'
import InquiryForm from './InquiryForm'
import EditCommentForm from './EditCommentForm'

interface DetailCommentProps {
  itemComments: CommentsData
  onClickEditComment: (commentIndex: number) => void
  editItemNum: number | null
}
export default function DetailComments({
  itemComments,
  onClickEditComment,
  editItemNum,
}: DetailCommentProps) {
  const { list } = itemComments
  const navigator = useNavigate()
  const onClickBack = () => {
    navigator(-1)
  }
  return (
    <>
      <div className="pt-10 pb-6">
        <InquiryForm />
        {list?.length > 0 &&
          list.map((comment, index) => {
            if (index === editItemNum) {
              return <EditCommentForm />
            } else {
              return (
                <CommentCard
                  onClick={onClickEditComment}
                  key={comment.createdAt}
                  comment={comment}
                  index={index}
                />
              )
            }
          })}
      </div>
      <button
        onClick={onClickBack}
        className="bg-my-blue w-[240px] h-12 mx-auto mb-44 mt-10 text-white rounded-[40px]"
      >
        목록으로 돌아가기
      </button>
    </>
  )
}
