import { useState, useMemo } from 'react'
import Nav from '@molecules/nav'
import Image from 'next/image'
import { NavContext } from 'context/contexts'

const Header = () => {
  const [isNavOpened, setIsNavOpened] = useState(false)

  return (
    <NavContext.Provider value={isNavOpened}>
      <div className="h-20 p-5 shadow-md flex justify-between items-center z-10 relative">
        <Image
          src="/images/sohotco-logo.png"
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
    </NavContext.Provider>
  )
}

export default Header
