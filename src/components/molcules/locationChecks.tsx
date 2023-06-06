import CheckBox from "@atoms/checkbox"
import { ModalsDispatchContext } from "context/contexts"
import { ChangeEvent, ChangeEventHandler, useContext, useEffect, useState } from "react"
import { Type_Detail, Type_User } from "types/Types"

interface Props {
  onChange: ChangeEventHandler
  location: Type_Detail[]
  user?: Type_User
}

const LocationChecks: React.FC<Props> = ({ onChange, location, user }) => {
  const { openModal } = useContext(ModalsDispatchContext)

  const [checked, setChecked] = useState<number[]>([])

  const handleChecks = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement
    let val = Number(target.value)

    if (!checked.includes(val) && checked.length == 2) {

      openModal({
        id: 'modal-max2',
        content: '최대 2개까지 선택 가능합니다.',
      })
      setChecked(checked.filter(l => l != val))

      return
    }

    if (target.checked) {
      setChecked([...checked, val])
    } else {
      setChecked(checked.filter(l => l != val))
    }

    onChange(e)
  }

  useEffect(() => {
    if (user?.positions && user?.positions.length > 0) {
      setChecked(user?.locations.map((p) => p.id))
    }
  }, [user])

  return (
    <div className="grid grid-cols-2">
      {location.map(obj =>
        < CheckBox key={obj.id} value={obj.id} title={obj.name} onChange={handleChecks} check={checked.includes(obj.id)} />
      )}
    </div>
  )
}

export default LocationChecks