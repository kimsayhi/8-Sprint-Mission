import icKebob from '#assets/icons/ic_kebob.svg'
import { List } from '#/types/itemDetail'
import { agoCalculator } from '#/utils/agoCalculator'

interface CommentProp {
  comment: List
  onClick: (commentIndex: number) => void
  index: number
}

export default function CommentCard({ comment, onClick, index }: CommentProp) {
  const howAgo: string = agoCalculator(comment.updatedAt)

  return (
    <div className="border-b border-solid pt-[15px] pb-3 relative border-gray-200 flex flex-col gap-6">
      <div>{comment.content}</div>
      <div className="flex items-start gap-2">
        <img className="w-8 h-8 rounded-full" src={`${comment.writer.image}`} />
        <div className="flex flex-col">
          <span className="text-xs text-gray-700">
            {comment.writer.nickname}
          </span>
          <span className="text-xs text-gray-500">{howAgo}</span>
        </div>
      </div>
      <button
        onClick={() => {
          onClick(index)
        }}
        className="absolute right-0 top-[15px]"
      >
        <img src={icKebob} />
      </button>
    </div>
  )
}
