import { MouseEvent } from 'react'

import Button from '#components/ui/Button'
import Input from '#/components/ui/Input'

import { useNavigate } from 'react-router'

interface InputConfig {
  type: string
  placeholder: string
  name: string
  label: string
}

interface InputTypes {
  email: InputConfig
  nickname: InputConfig
  password: InputConfig
  passwordRepeat: InputConfig
}

const INITIAL_INPUTS: InputTypes = {
  email: {
    type: 'input',
    placeholder: '이메일을 입력해주세요',
    name: 'email',
    label: '이메일',
  },
  nickname: {
    type: 'input',
    placeholder: '닉네임을 입력해주세요',
    name: 'nickname',
    label: '닉네임',
  },
  password: {
    type: 'password',
    placeholder: '비밀번호를 입력해주세요',
    name: 'password',
    label: '비밀번호',
  },
  passwordRepeat: {
    type: 'password',
    placeholder: '비밀번호를 다시 한 번 입력해주세요',
    name: 'password-repeat',
    label: '비밀번호 확인',
  },
}

export default function Signup() {
  const navigate = useNavigate()
  const onSubmitButton = (e: MouseEvent): void => {
    e.preventDefault()
    navigate('/items')
  }
  return (
    <form className="w-full">
      <Input {...INITIAL_INPUTS.email} />
      <Input {...INITIAL_INPUTS.nickname} />
      <Input {...INITIAL_INPUTS.password} />
      <Input {...INITIAL_INPUTS.passwordRepeat} />
      <Button onClick={onSubmitButton} activeBtn={false}>
        회원가입
      </Button>
    </form>
  )
}
