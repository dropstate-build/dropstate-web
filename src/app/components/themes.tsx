import React from 'react'
import logo1 from "../../app/assets/broken-link-icon.svg"
import Image from 'next/image'

interface Theme {
    img:string,
    logo:string,
    header:string,
    body:string
}
interface ThemeProps {
    themes:Array<Theme>
}
const Themes:React.FC<ThemeProps>=({themes})=> {
    // const {themes}=props
  return (
    <div className=' w-full relative grid grid-cols-3 grid-flow-row gap-[8px]   '>
    {/* header relative to themes section*/}
    <div className='absolute -top-[106px] left-[38%]  w-fit    h-[165px] font-normal font-DM_Sans text-[#171717]  text-justify  place-content-center leading-normal text-[120px]'>
      themes
      <div className='absolute -right-[20%] top-[35%] text-[14px] font-bold font-Plus_Jakarta_Sans text-[#171717]'><span className=' font-DM_Sans font-bold '>*</span> trending</div>

    </div>
    {/* single card */}
    {
      themes.map((theme, index) => (
        <div
          key={index}
          style={{ backgroundImage: `url(${theme.img})` }}
          className='bg-cover bg-center bg-no-repeat group z-10 max-w-[616px] h-[280px] flex flex-col bg-slate-400 '>
          <div className='transition-all transform duration-150 ease-in-out w-full h-full invisible group-hover:visible flex flex-col  justify-center 
        items-center text-black group-hover:bg-black group-hover:bg-opacity-40 group-hover:backdrop-blur-sm'>
            {/* logo */}
            <div className='mt-[63px] mb-[20px]'>
            <Image
                src={logo1}
                alt="logo"
                className='object-center object-cover '
                width={90}
                height={90}
              />
            </div>
            {/* text head */}
            <div className='mb-[26px] text-white font-Plus_Jakarta_Sans font-bold text-[20px] '>NEED FOR SPEED</div>
            {/* text body */}
            <div className='mb-[54px] text-white text-[14px] font-Plus_Jakarta_Sans font-medium  text-center '> Unleash high-octane fashion that accelerates<br />
              your look to the finish line </div>

          </div>

        </div>
      ))

    }




  </div>
  )
}

export default Themes