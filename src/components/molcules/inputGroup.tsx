import { useState } from 'react'
import LinedInput from '../atoms/linedInput'

const InputGroup = () => {
  const [text, setText] = useState('')

  return (
    <div>
      <LinedInput text={text} onChange={e => setText(e.target.value)} />
    </div>
  )
}

export default InputGroup
