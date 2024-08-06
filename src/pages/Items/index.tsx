import useItems from '#/hooks/useItems'
import { BestItemList, PageNavigator, SellingItemList } from '#pages'
import { pageCalculator } from '#/utils'
import { useEffect, useState } from 'react'
import { Query } from '#/types/items'

export default function Items() {
  const [pageNavNum, setPageNavNum] = useState<number>(0)
  const [nowPageNum, setNowPageNum] = useState<number>(1)

  const { items, totalCount, setQuery, isLoading, bestItems, showItemNum } =
    useItems()

  const onClickPageNum = (pageNum: number) => {
    setQuery(prev => {
      if (prev.page === pageNum) {
        return prev
      }
      return { ...prev, page: pageNum }
    })
    setNowPageNum(pageNum)
  }
  const onClickArrowBtn = (direction: 'left' | 'right'): void => {
    if (direction === 'left') {
      setQuery((prev: Query) => {
        if (prev.page - 1) {
          setNowPageNum(prev => prev - 1)
          return { ...prev, page: prev.page - 1 }
        } else return prev
      })
    } else {
      setQuery((prev: Query) => {
        if (prev.page + 1 < pageNavNum - 1) {
          setNowPageNum(prev => prev + 1)
          return { ...prev, page: prev.page + 1 }
        } else return prev
      })
    }
  }

  useEffect(() => {
    const num = pageCalculator(totalCount, showItemNum.selling)
    setPageNavNum(num)
  }, [showItemNum.selling, totalCount])
  if (isLoading) {
    return <div>...Loading</div>
  }
  return (
    <div className="flex-center m-container mt-10 flex-col gap-6 pt-[70px] mb-20">
      <BestItemList items={bestItems.slice(0, showItemNum.best)} />
      <SellingItemList
        items={items.slice(0, showItemNum.selling)}
        setQuery={setQuery}
      />
      <PageNavigator
        pageNavNum={pageNavNum}
        onClickPageNum={onClickPageNum}
        setQuery={setQuery}
        nowPageNum={nowPageNum}
        onClickArrowBtn={onClickArrowBtn}
      />
    </div>
  )
}
