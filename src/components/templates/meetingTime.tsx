import Divider from '@atoms/Divider'
import Layout from '@atoms/layout'
import SquareBtn from '@atoms/squareBtn'
import ButtonGroupPercent from '@molecules/buttonGroupPercent'
import TimeRadios from '@molecules/timeRadios'
import WeekChecks from '@molecules/weekChecks'
import { ModalsDispatchContext } from 'context/contexts'
import { useNewProjectState, useUser } from 'context/hooks'
import { useRouter } from 'next/router'
import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { Type_User } from 'types/Types'

interface Props {
  type?: string
  user?: Type_User
}

const MeetingTime = ({ type = '', user }: Props) => {
  const router = useRouter()

  const { openModal } = useContext(ModalsDispatchContext)
  const [newProject, setNewProject] = useNewProjectState()

  const { week, getWeek, meetingTime, getMeetingTime } = useUser()

  const [times, setTimes] = useState<string[]>([])
  const [weeks, setWeeks] = useState<string[]>([])

  const handleRadios = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement

    let val = target.value
    setTimes([val])
  }

  const handleChecks = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement

    if (!weeks.includes(target.value) && week.length == 2) {
      const modalobj = {
        id: 'modal-max2',
        content: '최대 2개까지 선택 가능합니다.',
      }
      openModal(modalobj)
      target.checked = false
      return
    }

    if (target.checked) {
      setWeeks([...week, target.value])
    } else {
      setWeeks(week.filter(l => l != target.value))
    }
  }

  const save = () => {
    let txt = null

    if (weeks.length != 0 && times.length == 0) {
      txt = '회의 시간을 선택하세요.'
    }

    if (txt) {
      const modalobj = {
        id: 'modal-time',
        content: txt,
        confirm: () => { },
      }
      openModal(modalobj)
    } else {
      if (type !== '') {
        setNewProject({ ...newProject, week: weeks, time: times })
        router.back()
      }
    }
  }

  const cancel = () => {
    router.replace('/user')
  }

  useEffect(() => {
    getWeek()
    getMeetingTime()
  }, [])

  return (
    <Layout>
      <h1 className="font-bold mb-10">
        원하는 회의 요일과 시간을 선택해 주세요.
      </h1>
      <WeekChecks week={week} onChange={handleChecks} user={user} />
      <Divider />
      <TimeRadios meetingTime={meetingTime} onChange={handleRadios} user={user} />
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

export default MeetingTime
