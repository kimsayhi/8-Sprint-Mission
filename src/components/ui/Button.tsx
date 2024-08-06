import { MouseEvent } from 'react'

type ButtonProps = {
  onClick: (e: MouseEvent) => void
  children: string
  activeBtn: boolean
}

export default function Button({ onClick, children, activeBtn }: ButtonProps) {
  const activeColor = activeBtn ? 'bg-my-blue' : 'bg-gray-400'

  return (
    <button
      onClick={e => {
        onClick(e)
      }}
      className={`w-full rounded-[40px] p-4 text-white ${activeColor}`}
    >
      {children}
    </button>
  )
}
