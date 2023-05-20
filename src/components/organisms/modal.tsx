import SquareBtn from "@atoms/squareBtn"
import { ModalsDispatchContext, ModalsStateContext } from "context/contexts"
import { useContext } from "react"

const Modal = () => {

    const openedModals = useContext(ModalsStateContext)
    const { closeModal } = useContext(ModalsDispatchContext)

    const modals = openedModals.map((modal) => {
        const { id, type, title, content, confirm } = modal

        const confirmBtn = () => {
            if (confirm) {
                confirm()
            }
            closeModal(modal)
        }

        const onConfirm = (
            <div className="grid grid-cols-2">
                <SquareBtn type={"grey"} onClick={() => { closeModal(modal) }}>나가기</SquareBtn>
                <SquareBtn type={"point"} onClick={confirmBtn}>확인</SquareBtn>
            </div>
        )

        const onAlert = (
            <div className="grid grid-cols-1">
                <SquareBtn type={"point"} onClick={() => { closeModal(modal) }}>나가기</SquareBtn>
            </div>
        )

        return (
            <div key={id} className="fixed top-0 left-0 right-0 bottom-0 m-auto z-30 flex justify-center items-center">
                <div className="relative w-full h-full bg-slate-700 opacity-50"></div>

                <div className="absolute border-inherit w-[250px] rounded-2xl overflow-hidden bg-white">
                    <button className="absolute top-2.5 right-2.5 w-6 h-6 bg-contain bg-center bg-no-repeat bg-[url('/images/x.png')]" onClick={() => { closeModal(modal) }}></button>
                    <div className="px-5 py-[50px] text-center">
                        <h3 className="text-lg text-gray-900">{title}</h3>
                        <div>
                            <p className="whitespace-pre-line text-sm font-medium text-black-500">{content}</p>
                        </div>
                    </div>
                    {type == 'confirm' ? onConfirm : onAlert}
                </div>
            </div>
        )
    })

    return (<>{modals}</>)
}

export default Modal