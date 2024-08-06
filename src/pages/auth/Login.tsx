import { MouseEvent } from 'react'
import { useNavigate } from 'react-router'
import { InputChangeEvent } from '#/types/additem'
import Button from '#components/ui/Button'
import Input from '#components/ui/Input'

interface InputConfig {
  type: string
  placeholder: string
  name: string
  label: string
}

interface InputTypes {
  email: InputConfig
  password: InputConfig
}

const INITIAL_INPUTS: InputTypes = {
  email: {
    type: 'input',
    placeholder: '이메일을 입력해주세요',
    name: 'email',
    label: '이메일',
  },
  password: {
    type: 'password',
    placeholder: '비밀번호를 입력해주세요',
    name: 'password',
    label: '비밀번호',
  },
}

export default function Login() {
  const navigate = useNavigate()
  const onSubmitButton = (e: MouseEvent) => {
    e.preventDefault()
    navigate('/items')
  }
  const onChangeInput = (e: InputChangeEvent) => {}
  return (
    <form className="w-full">
      <Input {...INITIAL_INPUTS.email} onChange={onChangeInput} value="" />
      <Input {...INITIAL_INPUTS.password} onChange={onChangeInput} value="" />
      <Button onClick={onSubmitButton} activeBtn={false}>로그인</Button>
    </form>
  )
}
