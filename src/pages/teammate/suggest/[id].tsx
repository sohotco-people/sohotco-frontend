import Layout from "@atoms/layout"
import SquareBtn from "@atoms/squareBtn"
import InputModal from "@molecules/inputModal"
import TeamMateInfo from "@molecules/teamMateInfo"
import Image from "next/image"
import Link from "next/link"
import { ChangeEvent, useState } from "react"

const Page = () => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [suggest, setSuggest] = useState('')

    const handleChange = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement
        setSuggest(target.value)
    }

    return (
        <>
            <Layout>
                <div className="grid gap-[20px]">
                    <TeamMateInfo />
                    <Link href={""} className="text-[16px] leading-[19px] font-medium text-primary1">
                        소개링크 보러가기
                        <Image src="/images/link.png" alt="link" width={16} height={16} style={{ display: 'inline-block' }} />
                    </Link>
                </div>
            </Layout>
            <div className="fixed inset-x-0 bottom-0">
                <SquareBtn width="w-full" type="point" onClick={() => { setIsOpenModal(true) }}>제안</SquareBtn>
            </div>
            {isOpenModal && <InputModal text={suggest} onChange={handleChange} close={setIsOpenModal} />}
        </>
    )
}

export default Page