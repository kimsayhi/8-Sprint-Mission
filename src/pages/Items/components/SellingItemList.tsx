import { Link } from 'react-router-dom'
import { Item, Query } from '#/types/items'

import icSort from '#assets/icons/ic_sort.svg'
import icSortMobile from '#assets/icons/ic_sortmobile.svg'
import icGlasses from '#assets/icons/ic_glasses.svg'
import { useState } from 'react'

// interface Item {
//   createdAt: string;
//   description: string;
//   favoriteCount: number;
//   id: number;
//   images: string[];
//   name: string;
//   ownerId: number;
//   price: number;
//   tags: string[];
//   updatedAt: string;
// }
interface Props {
  items: Item[]
  setQuery: (prev: any) => void
}

const INITIAL_ORDER = {
  recent: {
    children: '최신순',
    orderBy: 'favorite',
  },
  favorite: {
    children: '좋아요순',
    orderBy: 'recent',
  },
}
export default function SellingItems({ items, setQuery }: Props) {
  const [nowOrderBy, setNowOrderBy] = useState(INITIAL_ORDER.recent)
  const handleOrderBy = () => {
    setNowOrderBy(prev =>
      prev.children === '최신순' ? INITIAL_ORDER.favorite : INITIAL_ORDER.recent
    )
    setQuery((prev: Query) => ({ ...prev, orderBy: nowOrderBy.orderBy }))
  }
  return (
    <div className="flex w-full max-w-md flex-col gap-4 md:max-w-4xl lg:max-w-none">
      <div className="flex flex-wrap items-center justify-between gap-y-2 md:gap-3">
        <label className="text-xl font-bold md:flex-grow">전체 상품</label>
        <Link
          to="/additem"
          className="btn order-1 h-[42px] w-[133px] font-semibold"
        >
          상품 등록하기
        </Link>
        <div className="order-1 flex basis-72 gap-1.5 rounded-xl bg-slate-100 px-4 py-[9px] md:order-none md:max-w-60">
          <img src={icGlasses} />
          <input
            // ref=""
            // value=""
            // onChange=""
            placeholder="검색할 상품을 입력해주세요"
            className="w-full bg-inherit outline-none"
          ></input>
        </div>
        <button className="flex-center order-2 h-[42px] w-[42px] rounded-xl border border-solid border-gray-200 md:hidden">
          <img src={icSortMobile} />
        </button>
        <button
          className="order-2 hidden h-[42px] w-[130px] items-center justify-between rounded-xl border border-solid px-5 py-4 md:flex"
          onClick={handleOrderBy}
        >
          <span>{nowOrderBy.children}</span>
          <img src={icSort} />
        </button>
      </div>
      <div className="flex flex-wrap justify-between gap-x-3 gap-y-5">
        {items.length > 0 &&
          items.map(item => (
            <Link
              to={`${item.id}`}
              key={item.id}
              className="flex w-full max-w-[48%] flex-grow flex-col gap-y-1.5 md:max-w-[32%] lg:max-w-[19%]"
            >
              <img src={item.images[0]} className="w-full"></img>
              <p className="text-sm">{`${item.description} 팝니다`}</p>
              <span className="font-bold">{`${item.price.toLocaleString()}원`}</span>
              <span className="text-sm text-gray-600">
                🤍{item.favoriteCount}
              </span>
            </Link>
          ))}
      </div>
    </div>
  )
}
