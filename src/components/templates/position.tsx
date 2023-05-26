import Layout from '@atoms/layout'
import SquareBtn from '@atoms/squareBtn'
import ButtonGroupPercent from '@molecules/buttonGroupPercent'
import PositionChecks from '@molecules/positionChecks'
import { ModalsDispatchContext } from 'context/contexts'
import { useNewProjectState } from 'context/hooks'
import { useRouter } from 'next/router'
import { ChangeEvent, useContext, useState } from 'react'

interface Props {
  type?: string
}

const Position = ({ type = '' }: Props) => {
  const router = useRouter()
  const { openModal } = useContext(ModalsDispatchContext)
  const [newProject, setNewProject] = useNewProjectState()
  const [position, setPosition] = useState<string[]>([])

  const handleChecks = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement

    if (target.checked) {
      setPosition([...position, target.value])
    } else {
      setPosition(position.filter(l => l != target.value))
    }
  }

  const save = () => {
    let txt = null

    if (position.length == 0) {
      txt = '역할을 선택하세요.'
    }

    if (txt) {
      const modalobj = {
        id: 'modal-position',
        content: txt,
      }
      openModal(modalobj)
    } else {
      if (type !== '') {
        setNewProject({ ...newProject, position })
        router.back()
      }
    }
  }

  const cancel = () => {
    router.back()
  }

  return (
    <Layout>
      <h1 className="font-bold mb-10">역할을 선택해 주세요.</h1>
      <PositionChecks onChange={handleChecks} />
      {type === '' ? (
        <ButtonGroupPercent leftBtnClick={cancel} rightBtnClick={save} />
      ) : (
        <div className="fixed inset-x-0 bottom-0">
          <SquareBtn width="w-full" type="point" onClick={save}>
            뒤로 가기
          </SquareBtn>
        </div>
      )}
    </Layout>
  )
}

export default Position
