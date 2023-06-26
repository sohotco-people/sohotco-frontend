import { MouseEventHandler } from 'react'

interface Props {
  type: string
  children: React.ReactNode
  onClick: MouseEventHandler<HTMLButtonElement>
  width?: string
}

/**
 *
 * @param {string} type - white grey point
 */

const RoundBtn: React.FC<Props> = ({ type, onClick, width, children }) => {
  const style = (function () {
    if (type === 'white') {
      return `${width ? width + ' ' : ''
        }bg-white active:bg-gray4 text-black border border-black`
    } else if (type === 'grey') {
      return `${width ? width + ' ' : ''}bg-gray4 active:bg-gray3 text-black`
    } else if (type === 'point') {
      return `${width ? width + ' ' : ''
        }bg-primary1 active:bg-primary2 text-white`
    }
  })()

  return (
    <button
      type="button"
      className={`${style} px-6 py-4 rounded-lg text-base/[17px] font-medium`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default RoundBtn
