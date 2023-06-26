import { ChangeEventHandler } from 'react'

interface Props {
  text: string
  onChange: ChangeEventHandler<HTMLInputElement>
  name?: string
  placeholder?: string
  disabled?: boolean
}

const LinedInput: React.FC<Props> = ({
  text,
  name,
  onChange,
  placeholder = '텍스트를 입력하세요',
  disabled = false,
}) => {
  return (
    <input
      type="text"
      name={name}
      value={text}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className="h-13 w-full px-2 py-4 border-b border-gray1 focus:border-black text-base/[17px] !outline-none"
    />
  )
}

export default LinedInput
