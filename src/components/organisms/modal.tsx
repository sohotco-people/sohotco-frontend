import SquareBtn from "@atoms/squareBtn"
import { MouseEvent, MouseEventHandler } from "react"

interface Props {
    show: boolean
    type?: string
    title?: string
    content: string
    onConfirm: MouseEventHandler
    onCancel: MouseEventHandler
    confirmTxt?: string
    closeTxt?: string
}

const Modal: React.FC<Props> = ({ show, type = 'alert', title, content, onConfirm, onCancel, confirmTxt = '확인', closeTxt = '나가기' }) => {

    const confirm = (
        <div className="grid grid-cols-2">
            <SquareBtn type={"grey"} onClick={onCancel} children={"나가기"} />
            <SquareBtn type={"point"} onClick={onConfirm} children={"확인"} />
        </div>
    )

    const alert = (
        <div className="grid grid-cols-1">
            <SquareBtn type={"point"} onClick={onCancel} children={"나가기"} />
        </div>
    )

    if (show) { } else {
        return (null)
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full overflow-x-hidden overflow-y-auto">
            <div className="absolute w-full h-full bg-slate-700 opacity-50"></div>

            <div className="relative top-24 mx-auto border-inherit w-[250px] rounded-2xl overflow-hidden bg-white">
                <button className="absolute top-2.5 right-2.5 w-6 h-6 bg-contain bg-center bg-no-repeat bg-[url('/images/x.png')]" onClick={onCancel}></button>
                <div className="px-5 py-[50px] text-center">
                    <h3 className="text-lg text-gray-900">{title}</h3>
                    <div>
                        <p className="whitespace-pre-line text-sm font-medium text-black-500">{content}</p>
                    </div>
                </div>
                {type == 'confirm' ? confirm : alert}
            </div>
        </div>
    )
}

export default Modal