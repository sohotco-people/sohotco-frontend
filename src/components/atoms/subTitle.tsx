import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

const SubTitle = ({ children, className = '' }: Props) => {
  return (
    <p className={`subTitle mb-5${className ? ` ${className}` : ''}`}>
      {children}
    </p>
  )
}

export default SubTitle
