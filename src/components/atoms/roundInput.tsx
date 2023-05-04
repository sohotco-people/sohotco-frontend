import { ChangeEventHandler } from 'react'

interface Props {
  text: string
  onChange: ChangeEventHandler<HTMLInputElement>
  placeholder?: string
  disabled?: boolean
}

const RoundInput: React.FC<Props> = ({
  text,
  onChange,
  placeholder = '텍스트를 입력하세요',
  disabled = false,
}) => {
  return (
    <input
      type="text"
      value={text}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className="h-13 w-full p-4 border disabled:border-gray1 border-black rounded-lg text-base/[17px] !outline-none"
    />
  )
}

export default RoundInput
