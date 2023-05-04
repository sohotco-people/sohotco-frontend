interface Props {
  children: React.ReactNode
  onClick: () => void
}

const NavMenu = ({ children, onClick }: Props) => {
  return (
    <div onClick={onClick} className="p-8 border-b hover:cursor-pointer">
      {children}
    </div>
  )
}

export default NavMenu
