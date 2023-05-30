import LinedInput from '@atoms/linedInput'
import SubTitle from '@atoms/subTitle'
import { ChangeEventHandler } from 'react'

interface Props {
  title: string
  text: string
  onChange: ChangeEventHandler<HTMLInputElement>
  placeholder?: string
  className?: string
}

const InputColumn = ({
  title,
  text,
  onChange,
  placeholder = '',
  className = '',
}: Props) => {
  return (
    <div className={`mb-15${className ? ` ${className}` : ''}`}>
      <SubTitle>{title}</SubTitle>
      <LinedInput text={text} onChange={onChange} placeholder={placeholder} />
    </div>
  )
}

export default InputColumn
