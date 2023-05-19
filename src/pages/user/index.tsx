import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '@atoms/layout'
import Panel from '@atoms/panel'
import { Type_User } from 'types/Types'
import { ModalsDispatchContext } from 'context/contexts'

interface Props {
  data: Type_User
}

const MyProfile = ({ data }: Props) => {
  const route = useRouter()
  const { openModal } = useContext(ModalsDispatchContext)

  const [percent, setPercent] = useState(0)

  useEffect(() => {
    let cnt = 0
    if (data.name) cnt++
    if (data.intro) cnt++
    if (data.meetingSystems.length > 0) cnt++
    if (data.meetingWeeks.length > 0) cnt++
    if (data.positions.length > 0) cnt++
    if (data.experiences.length > 0) cnt++
    setPercent(cnt)
  }, [data])

  const movePage = (link: string) => {
    route.push(link)
  }

  const deleteProfile = () => {}

  const openDeleteModal = () => {
    const modalObj = {
      id: 'modal-deleteProfile',
      content: '회원정보를 복구할 수 없습니다. 정말로 삭제하시겠습니까?',
      confirm: deleteProfile,
      type: 'confirm',
    }

    openModal(modalObj)
  }

  return (
    <Layout>
      <div>
        <p className="font-semibold pb-2.5 leading-none">
          프로필 공개까지 {100 - Math.floor((100 / 6) * percent)}% 남았습니다.
        </p>
        <div className="relative h-2.5 w-full bg-gray2">
          <div
            className={`absolute h-2.5 bg-primary1`}
            style={{ width: `${percent * (100 / 6)}%` }}
          />
        </div>
      </div>
      <div className="flex flex-col pt-10 gap-5">
        {DATA.map(data => {
          return (
            <Panel key={data.id} onClick={() => movePage(`/user${data.link}`)}>
              {data.title}
            </Panel>
          )
        })}
      </div>
      <div className="flex justify-center mt-10 text-gray1 hover:cursor-pointer">
        <button onClick={openDeleteModal}>계정 삭제</button>
      </div>
    </Layout>
  )
}

const DATA = [
  { id: 0, title: '기본정보', link: '/about' },
  { id: 1, title: '자기소개', link: '/intro' },
  { id: 2, title: '내 역할', link: '/position' },
  { id: 3, title: '내 경력', link: '/experience' },
  { id: 4, title: '회의 방식', link: '/meetingSystem' },
  { id: 5, title: '회의 일정', link: '/meetingTime' },
]

export default MyProfile

export async function getStaticProps() {
  const data = {
    id: 1,
    name: 'name',
    link: '/link',
    intro: 'introduction',
    positions: [{ id: 1, name: 'gn' }],
    experiences: [{ id: 1, name: 'gn' }],
    meetingLocations: [{ id: 1, name: 'gn' }],
    meetingWeeks: [{ id: 1, name: 'gn' }],
    meetingSystems: [{ id: 1, name: 'gn' }],
    meetingTimes: [{ id: 1, name: 'gn' }],
    createdAt: '2023-05-17',
    deletedAt: '2023-05-17',
  }

  return {
    props: {
      data,
    },
  }
}
