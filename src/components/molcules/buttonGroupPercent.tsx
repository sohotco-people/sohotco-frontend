import { MouseEventHandler } from 'react'
import SquareBtn from '@atoms/squareBtn'

interface Props {
  leftBtnText?: string
  rightBtnText?: string
  leftBtnClick: MouseEventHandler<HTMLButtonElement>
  rightBtnClick: MouseEventHandler<HTMLButtonElement>
}

const ButtonGroupPercent = ({
  leftBtnText = '취소',
  rightBtnText = '저장',
  leftBtnClick,
  rightBtnClick,
}: Props) => {
  return (
    <div className="fixed inset-x-0 bottom-0">
      <SquareBtn type="grey" width="w-4/12" onClick={leftBtnClick}>
        {leftBtnText}
      </SquareBtn>
      <SquareBtn type="point" width="w-8/12" onClick={rightBtnClick}>
        {rightBtnText}
      </SquareBtn>
    </div>
  )
}

export default ButtonGroupPercent
