import { ChangeEvent, MouseEventHandler, useContext, useState } from 'react'
import Layout from '@atoms/layout'
import SquareBtn from '@atoms/squareBtn'
import ButtonGroupPercent from '@molecules/buttonGroupPercent'
import LocationChecks from '@molecules/locationChecks'
import MeetingSystemRadios from '@molecules/meetingSystemRadios'
import { ModalsDispatchContext } from 'context/contexts'
import { useRouter } from 'next/router'
import { useNewProjectState } from 'context/hooks'

interface Props {
  type?: string
}

const MeetingSystem = ({ type = '' }: Props) => {
  const [meetType, setMeetType] = useState('')
  const [location, setLocation] = useState<string[]>([])
  const { openModal } = useContext(ModalsDispatchContext)
  const [newProject, setNewProject] = useNewProjectState()
  const router = useRouter()

  const handleRadios = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement

    let val = target.value
    if (val == 'online') {
      setLocation([])
    }

    setMeetType(val)
  }

  const handleChecks = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement

    if (!location.includes(target.value) && location.length == 2) {
      const modalobj = {
        id: 'modal-max2',
        content: '최대 2개까지 선택 가능합니다.',
      }
      openModal(modalobj)
      target.checked = false
      return
    }

    if (target.checked) {
      setLocation([...location, target.value])
    } else {
      setLocation(location.filter(l => l != target.value))
    }
  }

  const save = () => {
    let txt = null

    if (meetType) {
    } else {
      txt = '회의 방식을 선택하세요.'
    }

    if (meetType && meetType == 'offline') {
      if (location.length == 0) {
        txt = '오프라인 위치를 선택하세요.'
      }
    }

    if (txt) {
      const modalobj = {
        id: 'modal-meetingType',
        content: txt,
        confirm: () => {},
        // type: 'confirm'
        // title: '제목'
      }
      openModal(modalobj)
    } else {
      if (type !== '') {
        setNewProject({ ...newProject, meetType, location })
        router.back()
      }
    }
  }

  const cancel = () => {
    router.back()
  }

  return (
    <Layout>
      <h1 className="font-bold mb-10">원하는 회의방식을 선택해 주세요.</h1>
      <MeetingSystemRadios onChange={handleRadios} />
      {meetType == 'offline' && (
        <>
          <h1 className="font-bold mb-10">오프라인 위치를 선택해 주세요.</h1>
          <LocationChecks onChange={handleChecks} />
        </>
      )}
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

export default MeetingSystem
