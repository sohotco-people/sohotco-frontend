import Input from "../atoms/input"
import Label from "../atoms/label"

const InputGroup = ({groupId})=> {

    return (
        <div>
            <Label forStr={groupId}/>
            <Input idStr={groupId} />
        </div>
    )
}


export default InputGroup