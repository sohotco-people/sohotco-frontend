import style from './radio.module.css'

type props = {
    name: string
    value: string
    title: string
}

const Radio: React.FC<props> = (_props) => {
    let value = _props.value
    let name = _props.name
    let title = _props.title

    let id = `radio-${value}`

    // TODO: 객체로 props 보내기
    // class 명 변경 
    // brach 바꿔서 push
    return (
        <label htmlFor={id} className={style.root}>
            <input type="radio" id={id} name={name} value={value} />
            {title}
            <span className={style.mark}></span>
        </label>
    )
}

export default Radio