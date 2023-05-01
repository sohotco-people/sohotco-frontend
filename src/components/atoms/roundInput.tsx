import { Dispatch, SetStateAction } from 'react'

interface Props {
  text: string
  setText: Dispatch<SetStateAction<string>>
  placeholder?: string
  disabled?: boolean
}

const RoundInput: React.FC<Props> = ({
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
      className="h-13 w-full p-4 border disabled:border-gray1 border-black rounded-lg text-base/[17px] !outline-none"
    />
  )
}

export default RoundInput
