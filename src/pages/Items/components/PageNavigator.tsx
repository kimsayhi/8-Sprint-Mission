import { useMemo, useState } from 'react'
import { Query } from '#/interfaces'

interface Props {
  pageNavNum: number
  onClickPageNum: (pageNum: number) => void
  nowPageNum: number
  setQuery: React.Dispatch<React.SetStateAction<Query>>
  onClickArrowBtn: (direction: 'left' | 'right') => void
}

export default function PageNavigator({
  pageNavNum,
  onClickPageNum,
  setQuery,
  nowPageNum,
  onClickArrowBtn,
}: Props) {
  const buttonArr: number[] = useMemo(() => {
    const arr: number[] = []
    for (let i = 0; i < pageNavNum; i++) {
      arr.push(i + 1)
    }
    return arr
  }, [pageNavNum])

  return (
    <div className="flex gap-1">
      <button
        className="h-10 w-10 rounded-full border border-solid border-gray-200"
        onClick={() => {
          onClickArrowBtn('left')
        }}
      >{`<`}</button>
      {buttonArr?.length > 0 &&
        buttonArr.slice(0, 5).map(button => (
          <button
            className={`${nowPageNum === button ? 'bg-my-blue text-white' : 'bg-white'} h-10 w-10 rounded-full border border-solid border-gray-200`}
            key={button}
            onClick={() => {
              onClickPageNum(button)
            }}
          >
            <span>{button}</span>
          </button>
        ))}
      <button
        className="h-10 w-10 rounded-full border border-solid border-gray-200"
        onClick={() => {
          onClickArrowBtn('right')
        }}
      >{`>`}</button>
    </div>
  )
}
