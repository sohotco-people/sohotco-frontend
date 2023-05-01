import style from './checkbox.module.css'

type props = {
    value: string
    title: string
}

const CheckBox: React.FC<props> = (_props) => {
    let value = _props.value
    let title = _props.title

    let id = `check-${value}`

    return (
        <label htmlFor={id} className={style.root}>
            {title}
            <input type="checkbox" id={id} value={value} />
            <span className={style.mark}></span>
        </label>
    )
}

export default CheckBox