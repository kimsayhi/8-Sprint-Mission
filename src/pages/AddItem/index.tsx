import { KeyboardEvent, useState } from 'react'

import FileInput from '../../components/ui/FileInput'
import Input from '#/components/ui/Input'
import TextArea from '#/components/ui/TextArea'

import { InputChangeEvent } from '#/types/additem'
import {
  ADDITEM_INPUT_PROPS,
  INITIAL_INPUT_VALUES,
} from '#/constants/pagesConstants'
import { AddItemInputValues } from '#/types/additem'

export default function AddItem() {
  const [inputValues, setInputValues] =
    useState<AddItemInputValues>(INITIAL_INPUT_VALUES)
  const [inputTagValue, setInputTagValue] = useState<string>('')
  const onChangeInputValue = (e: InputChangeEvent) => {
    switch (e.target.name) {
      case ADDITEM_INPUT_PROPS.name.name:
        setInputValues(prev => ({ ...prev, name: e.target.value }))
        break
      case ADDITEM_INPUT_PROPS.description.name:
        setInputValues(prev => ({ ...prev, description: e.target.value }))
        break
      case ADDITEM_INPUT_PROPS.price.name:
        if (isNaN(Number(e.target.value))) {
          setInputValues(prev => prev) // 숫자아닌거치면 왜 하나씩 지워지지
          break
        }
        setInputValues(prev => ({ ...prev, price: e.target.value }))
        break
      case ADDITEM_INPUT_PROPS.tags.name:
        setInputTagValue(e.target.value)
        break

      case ADDITEM_INPUT_PROPS.file.name:
        const targetInput = e.target as HTMLInputElement
        if (!targetInput?.files) {
          break
        }
        const file = targetInput.files[0]
        const newImage = URL.createObjectURL(file)
        setInputValues(prev => ({
          ...prev,
          image: [...prev.images, newImage],
        }))
        break
      default:
        break
    }
  }
  const onKeyDownTag = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') {
      return
    }
    if (!inputTagValue.trim()) {
      setInputTagValue('')
      return
    }
    if (inputValues.tags.length > 5) {
      setInputValues(prev => ({
        ...prev,
        tags: [...prev.tags.slice(1, prev.tags.length), inputTagValue],
      }))
      setInputTagValue('')
      return
    }
    setInputValues(prev => ({
      ...prev,
      tags: [...prev.tags, inputTagValue],
    }))
    setInputTagValue('')
  }
  return (
    <div className="m-container pt-[70px] mt-6">
      <form>
        <FileInput
          {...ADDITEM_INPUT_PROPS.file}
          onChange={onChangeInputValue}
          value=""
        />
        <Input
          {...ADDITEM_INPUT_PROPS.name}
          value={inputValues.name}
          onChange={onChangeInputValue}
        />
        <TextArea
          {...ADDITEM_INPUT_PROPS.description}
          value={inputValues.description}
          onChange={onChangeInputValue}
        />
        <Input
          {...ADDITEM_INPUT_PROPS.price}
          value={inputValues.price}
          onChange={onChangeInputValue}
        />
        <Input
          {...ADDITEM_INPUT_PROPS.tags}
          value={inputTagValue}
          onChange={onChangeInputValue}
          onKeyDown={onKeyDownTag}
        />
        <div className="flex gap-3 text-base flex-wrap ">
          {inputValues.tags?.length > 0 &&
            inputValues.tags.map((tag, index) => (
              <span
                className="flex-center align-center h-12 rounded-[26px] bg-gray-50 px-3"
                key={`${tag},${index}`}
              >
                {tag}
              </span>
            ))}
        </div>
      </form>
    </div>
  )
}
