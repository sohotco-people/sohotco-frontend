interface Props {
  onClick: () => void
  children: React.ReactNode
}

const Panel: React.FC<Props> = ({ onClick, children }) => {
  return (
    <div
      className="px-4 py-4.5 bg-gray4 flex justify-between items-center hover:cursor-pointer"
      onClick={onClick}
    >
      <span className="text-base/[19px] font-medium">{children}</span>
      <button
        type="button"
        className="h-3 w-1.5 bg-contain bg-center bg-no-repeat bg-[url('/images/rightArrow.png')]"
      />
    </div>
  )
}

export default Panel
