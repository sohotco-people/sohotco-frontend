import { ChangeEventHandler } from 'react'

interface Props {
  text: string
  onChange: ChangeEventHandler<HTMLTextAreaElement>
  placeholder?: string
}

const Textarea = ({ text, onChange, placeholder = '' }: Props) => {
  return (
    <textarea
      placeholder={placeholder}
      value={text}
      onChange={onChange}
      className="w-full h-52 p-4 border border-gray1 focus:border-black rounded-lg resize-none focus:outline-none"
    />
  )
}

export default Textarea
