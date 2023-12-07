import React from 'react'
import machine from "../../app/assets/machine.png"
import Image from 'next/image'

const ArtistFooter:React.FC=()=> {
  return (
    <div className='absolute flex flex-row items-center gap-[31px] w-[1168px] -top-[159px] h-[294px]   border-black border-[5px] bg-white'>
    {/* logo */}
    <div
      className=' bg-slate-200 ml-[75px] flex w-[130px] h-[170px]'>
      <Image
        src={machine}
        alt="money machine"
        className=' object-cover object-center '
        width={130}
        height={170}
      />
    </div>
    {/* text */}
    <div className='flex flex-col gap-[5px] font-DM_Sans font-normal text-[48px] text-black leading-normal text-center '>
      {/* first */}
      <div className='-mb-[15px]'> make money</div>
      {/* second */}
      <div>as an artist</div>
    </div>
  </div>
  )
}

export default ArtistFooter