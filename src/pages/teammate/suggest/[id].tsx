import Layout from "@atoms/layout"
import SquareBtn from "@atoms/squareBtn"
import InputModal from "@molecules/inputModal"
import TeamMateInfo from "@molecules/teamMateInfo"
import { useTeamMate } from "hooks/teammate"
import { useUser } from "hooks/user"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { ChangeEvent, useEffect, useState } from "react"

const Page = () => {
    const router = useRouter()
    const { id } = router.query

    const [isOpenModal, setIsOpenModal] = useState(false)

    const { suggest, setSuggest, goSuggest } = useTeamMate()
    const { userOne, getUserById, me, getMe } = useUser()

    const handleChange = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement
        setSuggest(target.value)
    }

    const handleSuggest = () => {
        goSuggest(id, userOne.name, me?.project.id)
        setIsOpenModal(false)
    }

    useEffect(() => {
        getUserById(id)
        getMe()
    }, [])

    return (
        <>
            <Layout>
                <div className="grid gap-[20px]">
                    <TeamMateInfo mate={userOne} />
                    <Link href={""} className="text-[16px] leading-[19px] font-medium text-primary1">
                        소개링크 보러가기
                        <Image src="/images/link.png" alt="link" width={16} height={16} style={{ display: 'inline-block' }} />
                    </Link>
                </div>
            </Layout>
            <div className="fixed inset-x-0 bottom-0">
                <SquareBtn width="w-full" type="point" onClick={() => { setIsOpenModal(true) }}>제안</SquareBtn>
            </div>
            {isOpenModal && <InputModal text={suggest} onChange={handleChange} close={setIsOpenModal} ok={handleSuggest} />}
        </>
    )
}

export default Page