import type { ItemDetail } from '#/types/additem'

interface DetailItemProps {
  itemInfo: ItemDetail
}

export default function DetailItem({ itemInfo }: DetailItemProps) {
  return (
    <div className="flex flex-wrap md:flex-nowrap gap-4  ">
      <img className="w-full max-w-lg " src={itemInfo?.images[0]} />
      <div className=" flex flex-col  w-full md:max-w-none ">
        <h2 className="font-semibold text-base pb-2 ">{itemInfo?.name}</h2>
        <p className="border-b border-solid border-gray-200 font-semibold text-2xl pb-4">{`${itemInfo?.price.toLocaleString()}원`}</p>
        <span className="pt-4 pb-2 font-semibold text-sm">상품소개</span>
        <p>{itemInfo?.description}</p>
        <span className="pt-6 font-semibold flex-grow text-sm ">상품태그</span>
        {itemInfo.tag?.length > 0 &&
          itemInfo.tag.map((tag, index) => (
            <div key={`${tag} ${index}`}>{tag}</div>
          ))}
        <div className="pt-10 pb-6 grow flex items-center justify-between  border-b border-solid border-gray-200">
          <div>{`🤍${itemInfo?.favoriteCount}`}</div>
        </div>
      </div>
    </div>
  )
}
