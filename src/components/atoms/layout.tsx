interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return <div className="px-5 py-10">{children}</div>
}

export default Layout
