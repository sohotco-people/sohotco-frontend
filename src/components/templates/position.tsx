import Layout from '@atoms/layout'
import SquareBtn from '@atoms/squareBtn'
import ButtonGroupPercent from '@molecules/buttonGroupPercent'
import PositionChecks from '@molecules/positionChecks'
import { ModalsDispatchContext } from 'context/contexts'
import { useNewProjectState, useUser } from 'context/hooks'
import { useRouter } from 'next/router'
import { ChangeEvent, useContext, useEffect } from 'react'
import { Type_User } from 'types/Types'

interface Props {
  type?: string
  user?: Type_User
}

const Position = ({ type = '', user }: Props) => {
  const router = useRouter()
  const { openModal } = useContext(ModalsDispatchContext)
  const [newProject, setNewProject] = useNewProjectState()

  const { update, position, getPosition, selected, setSelected } = useUser()

  const handleChecks = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement
    const num = Number(target.value)

    if (target.checked) {
      setSelected([...selected, num])
    } else {
      setSelected(selected.filter(l => l != num))
    }
  }

  const save = () => {
    let txt = null

    if (selected.length == 0) {
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
      update({ 'positions': selected })
    }
  }

  const cancel = () => {
    router.replace('/user')
  }

  useEffect(() => {
    getPosition()

    if (user) {
      setSelected(user?.positions.map(p => p.id))
    }
  }, [user])

  return (
    <Layout>
      <h1 className="font-bold mb-10">역할을 선택해 주세요.</h1>
      <PositionChecks position={position} user={user} onChange={handleChecks} />
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
