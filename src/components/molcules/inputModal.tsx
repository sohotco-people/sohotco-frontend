import Textarea from "@atoms/textarea"
import SquareBtn from "@atoms/squareBtn"
import React, { ChangeEventHandler } from "react"

interface Props {
    text: string
    onChange: ChangeEventHandler
    close: Function
    ok: Function
}

const InputModal: React.FC<Props> = ({ close, onChange, text, ok }) => {

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 m-auto flex justify-center items-center z-30 ">
            <div className="relative w-full h-full bg-slate-700 opacity-50"></div>

            <div className="absolute border-inherit w-[325px] rounded-2xl overflow-hidden bg-white">
                <button className="absolute top-2.5 right-2.5 w-6 h-6 bg-contain bg-center bg-no-repeat bg-[url('/images/x.png')]" onClick={() => { close(false) }}></button>

                <div className="mt-[50px] text-center">
                    <div className="text-[16px] leading-[19px] font-medium">전하고 싶은 말을 담아서<br />제안하세요</div>
                    <div className="px-[30px] py-[30px] ">
                        <Textarea text={text} onChange={onChange} placeholder="유저가 내용을 보고 결정할 거에요." />
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <SquareBtn type={'grey'} onClick={() => { close(false) }}>취소</SquareBtn>
                    <SquareBtn type={'point'} onClick={() => { ok() }}>전송</SquareBtn>
                </div>
            </div>
        </div>
    )
}

export default InputModal