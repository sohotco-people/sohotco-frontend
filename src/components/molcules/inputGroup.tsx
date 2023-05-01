import { useState } from 'react'
import LinedInput from '../atoms/linedInput'

const InputGroup = () => {
  const [text, setText] = useState('')

  return (
    <div>
      <LinedInput text={text} setText={setText} />
    </div>
  )
}

export default InputGroup
