import { useRef } from 'react'

interface InputProps {
  label: string
  type: string
  placeholder: string
  name: string
  value?: string
}

export default function Input({
  name,
  placeholder,
  type,
  label,
  value,
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div className="flex flex-col pb-6">
      <label className="pb-4 text-lg font-bold" htmlFor={name}>
        {label}
      </label>
      <input
        className="rounded-xl border-none bg-gray-100 px-6 py-4 outline-none"
        type={type}
        placeholder={placeholder}
        name={name}
        id={name}
        value={value}
        ref={inputRef}
      ></input>
    </div>
  )
}
