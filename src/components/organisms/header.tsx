import Nav from '@molecules/nav'
import Image from 'next/image'
import { useNavOpenState } from 'context/hooks'

const Header = () => {
  const [isNavOpened, setIsNavOpened] = useNavOpenState()

  return (
    <>
      <div className="h-20 p-5 shadow-md flex justify-between items-center z-20 relative">
        <Image
          src="/images/sohotco-logo-02.png"
          alt="logo"
          width={44}
          height={44}
        />
        <div
          className="space-y-1 hover:cursor-pointer"
          onClick={() => setIsNavOpened(prev => !prev)}
        >
          <div className="w-5 h-0.5 bg-black rounded-xl"></div>
          <div className="w-5 h-0.5 bg-black rounded-xl"></div>
          <div className="w-5 h-0.5 bg-black rounded-xl"></div>
        </div>
      </div>
      <Nav />
    </>
  )
}

export default Header
