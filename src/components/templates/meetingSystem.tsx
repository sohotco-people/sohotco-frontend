import { ChangeEvent, MouseEventHandler, useContext, useEffect, useState } from 'react'
import Layout from '@atoms/layout'
import SquareBtn from '@atoms/squareBtn'
import ButtonGroupPercent from '@molecules/buttonGroupPercent'
import LocationChecks from '@molecules/locationChecks'
import MeetingSystemRadios from '@molecules/meetingSystemRadios'
import { ModalsDispatchContext } from 'context/contexts'
import { useRouter } from 'next/router'
import { useNewProjectState } from 'context/hooks'
import { Type_User } from 'types/Types'
import { useOption } from 'hooks/option'
import { useUser } from 'hooks/user'

interface Props {
  type?: string
  user?: Type_User
}

const MeetingSystem = ({ type = '', user }: Props) => {
  const router = useRouter()
  const { openModal } = useContext(ModalsDispatchContext)

  const [newProject, setNewProject] = useNewProjectState()

  const { meetingSystem, getMeetingSystem, location, getLocation } = useOption()
  const { update } = useUser()

  const [locationChecks, setLocationChecks] = useState<number[]>([])
  const [meetingSystemRadios, setMeetingSystemRadios] = useState<number[]>([])

  const handleRadios = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement

    let val = Number(target.value)
    if (val == 1) {
      setLocationChecks([])
    }

    setMeetingSystemRadios([val])
  }

  const handleChecks = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement
    let val = Number(target.value)

    if (target.checked) {
      setLocationChecks([...locationChecks, val])
    } else {
      setLocationChecks(locationChecks.filter(l => l != val))
    }
  }

  const save = () => {
    let txt = null

    if (meetingSystemRadios.length > 0) {
      if (meetingSystemRadios[0] == 2 && locationChecks.length == 0) {
        txt = '오프라인 위치를 선택하세요.'
      }

    } else {
      txt = '회의 방식을 선택하세요.'
    }

    if (txt) {
      const modalobj = {
        id: 'modal-meetingType',
        content: txt,
        confirm: () => { },
        // type: 'confirm'
        // title: '제목'
      }
      openModal(modalobj)
    } else {
      if (type !== '') {
        setNewProject({ ...newProject, meeting_systems: meetingSystemRadios, locations: locationChecks })
        router.back()
      }

      update({ meeting_systems: meetingSystemRadios, locations: locationChecks })
    }
  }

  const cancel = () => {
    router.replace('/user')
  }

  useEffect(() => {
    getMeetingSystem()
    getLocation()
    if (user && user.meeting_systems[0].id == 2) {
      meetingSystemRadios.push(2)
    }
  }, [user])

  return (
    <Layout>
      <h1 className="font-bold mb-10">원하는 회의방식을 선택해 주세요.</h1>
      <MeetingSystemRadios meetingSystem={meetingSystem} user={user} onChange={handleRadios} optionChecked={[]} />
      {(meetingSystemRadios.length > 0 && meetingSystemRadios[0] == 2) && (
        <>
          <h1 className="font-bold mb-10">오프라인 위치를 선택해 주세요.</h1>
          <LocationChecks location={location} user={user} onChange={handleChecks} optionChecked={[]} />
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
