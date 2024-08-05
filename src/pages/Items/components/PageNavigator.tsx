import { useMemo } from 'react'
import { Query } from '#/interfaces'

interface Props {
  pageNavNum: number
  onClickPageNum: (pageNum: number) => void
  setQuery: (query: Query) => void
}

export default function PageNavigator({ pageNavNum, onClickPageNum }: Props) {
  const buttonArr = useMemo(() => {
    const arr: number[] = []
    for (let i = 0; i < pageNavNum; i++) {
      arr.push(i + 1)
    }
    return arr
  }, [pageNavNum])
  return (
    <div className="flex gap-1">
      {buttonArr?.length > 0 &&
        buttonArr.slice(0, 5).map(button => (
          <button
            className="h-10 w-10 rounded-full border border-solid border-gray-200"
            key={button}
            onClick={() => {
              onClickPageNum(button)
            }}
          >
            <span>{button}</span>
          </button>
        ))}
    </div>
  )
}
