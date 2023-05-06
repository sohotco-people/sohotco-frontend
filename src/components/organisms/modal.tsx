import { MouseEventHandler } from "react"

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
        <div className="items-center px-4 py-3 grid grid-cols-2 gap-2">
            <button className="px-4 py-2 bg-gray4 text-black font-medium rounded-md" onClick={onCancel}>{closeTxt}</button>
            <button className="px-4 py-2 bg-primary1 text-white font-medium rounded-md" onClick={onConfirm}>{confirmTxt}</button>
        </div>
    )

    const alert = (
        <div className="items-center px-4 py-3">
            <button className="px-4 py-2 bg-primary1 text-white rounded-md w-full" onClick={onCancel}>{closeTxt}</button>
        </div>
    )

    if (show) { } else {
        return (null)
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full overflow-x-hidden overflow-y-auto">
            <div className="absolute w-full h-full bg-gray-300 opacity-50"></div>
            <div className="relative top-20 mx-auto p-5 border w-80 md:w-96 lg:w-96 shadow-lg rounded-md bg-white">
                <button className="absolute top-5 right-5 w-6 h-6 bg-contain bg-center bg-no-repeat bg-[url('/images/x.png')]" onClick={onClose}></button>
                <div className="mt-3 text-center">
                    <h3 className="text-lg text-gray-900">{title}</h3>
                    <div className="mt-3 px-7 py-3">
                        <p className="text-sm text-gray-500">{content}</p>
                    </div>
                    {type == 'confirm' ? confirm : alert}
                </div>
            </div>
        </div>
    )
}

export default Modal