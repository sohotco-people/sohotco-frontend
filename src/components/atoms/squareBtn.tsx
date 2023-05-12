import { MouseEventHandler } from 'react'

interface Props {
  type: string
  onClick: MouseEventHandler<HTMLButtonElement>
  width?: string
  children: React.ReactNode
}

/**
 *
 * @param {string} type - white grey point
 */

const SquareBtn: React.FC<Props> = ({ type, onClick, width, children }) => {
  const style = (function () {
    if (type === 'white') {
      return `${width ? width + ' ' : ''}bg-white active:bg-gray4 text-black`
    } else if (type === 'grey') {
      return `${width ? width + ' ' : ''}bg-gray4 active:bg-gray3 text-black`
    } else if (type === 'point') {
      return `${
        width ? width + ' ' : ''
      }bg-primary1 active:bg-primary2 text-white`
    }
  })()

  return (
    <button
      type="button"
      className={`${style} px-6 py-4 text-base/[19px] font-medium`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default SquareBtn
