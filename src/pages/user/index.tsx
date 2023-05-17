import Layout from '@atoms/layout'
import Panel from '@atoms/panel'
import { useRouter } from 'next/router'

const MyProfile = () => {
  const route = useRouter()

  const movePage = (link: string) => {
    route.push(link)
  }

  return (
    <Layout>
      <div>
        <p className="font-semibold pb-2.5 leading-none">
          프로필 공개까지 0% 남았습니다.
        </p>
        <div className="relative h-2.5 bg-gray2">
          <div className={`absolute h-2.5 w-3/12 bg-primary1`} />
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
        <button>계정 삭제</button>
      </div>
    </Layout>
  )
}

const DATA = [
  { id: 0, title: '기본정보', link: '/about' },
  { id: 1, title: '자기소개', link: '/intro' },
  { id: 2, title: '내 역할', link: '/position' },
  { id: 3, title: '내 경력', link: '/experience' },
  { id: 4, title: '회의 방식', link: '/meetingType' },
  { id: 5, title: '회의 일정', link: '/meetingTime' },
]

export default MyProfile
