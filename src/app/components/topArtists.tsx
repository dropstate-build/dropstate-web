import Link from 'next/link'
import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import { RiVerifiedBadgeFill } from 'react-icons/ri'

interface topArtist{
    name:string,
    pitch:string,
    image:string,
    link:string,
}
interface props{
    topArtists:Array<topArtist>
}
const TopArtists:React.FC<props>=({topArtists})=> {
  const [hover, setHover] = React.useState(-1)

  return (
    <div className='relative flex flex-row  w-full  '>
    {/* header relative to artists section*/}
    <div className='absolute  -top-[106px] left-[38%] w-fit   
     h-[165px] font-normal font-DM_Sans text-[#171717]  text-justify  place-content-center leading-normal text-[120px]'>
      artists
      <div className='absolute -right-[20%] top-[35%] text-[14px] font-bold font-Plus_Jakarta_Sans text-[#171717]'>
        <span className=' font-DM_Sans font-bold '>*</span> trending</div>
    </div>
    <div className='  flex w-full overflow-x-scroll no-scrollbar '>
      {/* section1 */}
      <div className=' flex flex-row w-full animate-run  '>


        {
          new Array(2).fill(0).map((item) => {
            return topArtists.map((card, index) => (
              <div
                key={index * 2}
                onMouseEnter={(e) => { setHover(index * 2) }}
                onMouseLeave={(e) => { setHover(-1) }}
                className='group min-w-[20%]  h-[512px] flex flex-col  '>
                {/* image */}
                <div
                  style={{ backgroundImage: `url(${card.image})` }}
                  className=' bg-cover bg-center bg-no-repeat  transition-all transform duration-150 ease-in-out h-[76.5%] group-hover:h-[51.5%] bg-slate-400 w-full' ></div>
                {/* name */}
                <div className='h-[23.5%] group-hover:h-[49.5%] w-full flex flex-col items-start '>

                  <div className=' flex flex-row gap-[4px] mt-[21px] h-fit items-start mx-auto mb-[24px]'>
                    <div className='text-black font-bold text-[18px] font-Plus_Jakarta_Sans'>{card.name}</div>
                    <RiVerifiedBadgeFill className='text-[18px] text-[#4967FF] place-self-center ' />

                  </div>
                  {/* pitch text */}
                  <div

                    className={hover == index * 2 ? ' ease-in mx-auto w-[239px] h-[72px]  text-left text-black font-medium overflow-y-scroll no-scrollbar font-Plus_Jakarta_Sans leading-tight  text-[14px]' : 'hidden'}>
                    {card.pitch}</div>
                  {/* link to storefront */}
                  <Link className='mt-[56px] mx-auto flex flex-row '
                    href={card.link}>
                    <div
                      className={hover == index * 2 ? ' ease-out flex flex-row gap-[6px] font-Plus_Jakarta_Sans font-semibold text-[12px] text-[#202020] py-[10px] px-[22px] border-[1px]  border-black' : 'hidden'}>
                      Visit Storefront <span className='w-[13px] h-[13px] rounded-full  flex justify-center items-center text-center bg-black text-white p-[1.64px] '><GoArrowUpRight /></span>
                    </div>
                  </Link>

                </div>
              </div>


            ))
          })
        }
      </div>

    </div>

  </div>
  )
}

export default TopArtists