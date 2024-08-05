import useItems from '#/hooks/useItems'
import { BestItemList, PageNavigator, SellingItemList } from '#pages'
import { pageCalculator } from '#/utils'
import { useEffect, useState } from 'react'

export default function Items() {
  const [pageNavNum, setPageNavNum] = useState<number>(0)

  const { items, totalCount, setQuery, isLoading, bestItems, showItemNum } =
    useItems()

  const onClickPageNum = (pageNum: number) => {
    setQuery(prev => {
      if (prev.page === pageNum) {
        return prev
      }
      return { ...prev, page: pageNum }
    })
  }

  useEffect(() => {
    const num = pageCalculator(totalCount, showItemNum.selling)
    setPageNavNum(num)
  }, [showItemNum.selling, totalCount])

  return (
    <div className="flex-center m-container flex-col gap-6 pt-[70px]">
      <BestItemList items={bestItems.slice(0, showItemNum.best)} />
      <SellingItemList
        items={items.slice(0, showItemNum.selling)}
        setQuery={setQuery}
      />
      <PageNavigator
        pageNavNum={pageNavNum}
        onClickPageNum={onClickPageNum}
        setQuery={setQuery}
      />
    </div>
  )
}
