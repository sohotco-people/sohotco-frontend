import { MouseEventHandler } from 'react'

interface Props {
  type: string
  onClick: MouseEventHandler<HTMLButtonElement>
  text?: string
}

/**
 *
 * @param {string} type - white grey point
 */

const SquareBtn: React.FC<Props> = ({ type, onClick, text = '확인' }) => {
  const style = (function () {
    if (type === 'white') {
      return 'bg-white active:bg-gray4 text-black'
    } else if (type === 'grey') {
      return 'bg-gray4 active:bg-gray3 text-black'
    } else if (type === 'point') {
      return 'bg-primary1 active:bg-primary2 text-white'
    }
  })()

  return (
    <button
      type="button"
      className={`${style} px-6 py-4 text-base/[19px] font-medium`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default SquareBtn
