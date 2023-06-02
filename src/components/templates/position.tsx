import Layout from '@atoms/layout'
import SquareBtn from '@atoms/squareBtn'
import ButtonGroupPercent from '@molecules/buttonGroupPercent'
import PositionChecks from '@molecules/positionChecks'
import { ModalsDispatchContext } from 'context/contexts'
import { useNewProjectState } from 'context/hooks'
import { useRouter } from 'next/router'
import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { fetchPut } from 'util/fetch'

interface Props {
  type?: string
  me?: any[]
}

const Position = ({ type = '', me }: Props) => {
  const router = useRouter()
  const { openModal } = useContext(ModalsDispatchContext)
  const [newProject, setNewProject] = useNewProjectState()
  const [position, setPosition] = useState<number[]>([])

  const handleChecks = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement
    const num = Number(target.value)

    if (target.checked) {
      setPosition([...position, num])
    } else {
      setPosition(position.filter(l => l != num))
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
      console.log(position)
      fetchPut('/user/me', { positions: position }).then(res => {
        console.log(res)
      })
    }
  }

  const cancel = () => {
    router.replace('/user')
  }

  useEffect(() => {

    if (me) {
      let arr = me.map(p => p.id)
      setPosition([...arr])
    }

  }, [me])

  return (
    <Layout>
      <h1 className="font-bold mb-10">역할을 선택해 주세요.</h1>
      <PositionChecks me={me} onChange={handleChecks} />
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
