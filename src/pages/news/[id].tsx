import SquareBtn from "@atoms/squareBtn"
import ProjectInfo from "@organisms/projectInfo"
import { useNews } from "hooks/news"
import { useProject } from "hooks/project"
import { useRouter } from "next/router"
import { useEffect } from "react"

const Page = () => {
    const router = useRouter()

    const { newsOne, getNewsId, letter } = useNews()
    const { projectGet, getProjectById } = useProject()

    useEffect(() => {
        if (router.query.id) {
            getNewsId(router.query.id as string)
        }
    }, [router.query])

    useEffect(() => {
        if (newsOne) {
            getProjectById(newsOne?.project_id || 0)
        }
    }, [newsOne])

    return (
        <>
            <ProjectInfo project={projectGet} />
            <div className="fixed inset-x-0 bottom-0">
                <SquareBtn width="w-full" type="point" onClick={letter}>편지 열기</SquareBtn>
            </div>
        </>
    )
}

export default Page