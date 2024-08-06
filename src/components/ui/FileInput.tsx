import type { InputChangeEvent } from '#/types/additem'
interface InputProps {
  label: string
  type: string
  name: string
  value: string
  onChange: (e: InputChangeEvent) => void
}

export default function FileInput({
  name,
  type,
  label,
  value,
  onChange,
}: InputProps) {
  return (
    <div className="flex flex-col pb-6 relative">
      <label className="pb-4 text-lg font-bold" htmlFor={name}>
        {label}
      </label>
      <input
        onChange={onChange}
        className="w-[282px] h-[282px]"
        type={type}
        name={name}
        id={name}
        value={value}
      />
      <label
        htmlFor={name}
        className="absolute left-[-3px] bottom-[28px] bg-gray-100 w-[282px] h-[282px] rounded-xl"
      ></label>
    </div>
  )
}
