interface Props {
  onClick: () => void
}

const Panel: React.FC<Props> = ({ onClick }) => {
  return (
    <div
      className="px-4 py-4.5 bg-gray4 flex justify-between items-center"
      onClick={onClick}
    >
      <span className="text-base/[19px] font-medium">Panel</span>
      <button
        type="button"
        className="h-3 w-1.5 bg-contain bg-center bg-no-repeat bg-[url('/images/rightArrow.png')]"
      />
    </div>
  )
}

export default Panel
