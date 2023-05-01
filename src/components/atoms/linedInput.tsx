import { Dispatch, SetStateAction } from 'react'

interface Props {
  text: string
  setText: Dispatch<SetStateAction<string>>
  placeholder?: string
  disabled?: boolean
}

const LinedInput: React.FC<Props> = ({
  text,
  setText,
  placeholder = '텍스트를 입력하세요',
  disabled = false,
}) => {
  return (
    <input
      type="text"
      value={text}
      onChange={e => setText(e.target.value)}
      placeholder={placeholder}
      disabled={disabled}
      className="h-13 w-full px-2 py-4 border-b disabled:border-gray1 border-blackt ext-base/[17px] !outline-none"
    />
  )
}

export default LinedInput
