import CheckBox from "@atoms/checkbox"
import { ChangeEventHandler, useEffect, useState } from "react"
import { fetchGet } from "util/fetch"

interface Props {
    onChange: ChangeEventHandler
    me?: any[]
}

const PositionChecks: React.FC<Props> = ({ onChange, me }) => {
    const [position, setPosition] = useState<any[]>([])

    useEffect(() => {
        if (me && me?.length != 0) {
            let meArr = me.map(m => m.id)
            const re = position.map((p: any) => {
                p.checked = meArr.includes(p.id) ? true : false
                return p
            })

            setPosition(p => [...re])
            return
        }

        fetchGet('/option/positions', {}).then(res => {
            const result = res.data.map((p: any) => {
                p.checked = false
                return p
            })

            setPosition(p => [...result])
        })
    }, [me])

    return (
        <div className="grid grid-cols-1">
            {position.map(obj => < CheckBox key={obj.id} value={obj.id} title={obj.name} onChange={onChange} check={obj.checked} />)}
        </div>
    )
}

export default PositionChecks