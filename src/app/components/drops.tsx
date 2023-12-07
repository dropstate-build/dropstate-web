import React from 'react'

interface props{
    tdrops:Array<{
        img:string,
    }>
}
const Drops:React.FC<props>=({tdrops})=> {
  return (
      <div className='relative flex flex-row  w-full justify-center '>
          {/* header relative to artists section*/}
          <div className='absolute -top-[106px] left-[38%]  w-fit    h-[165px] font-normal font-DM_Sans text-[#171717]  text-justify  place-content-center leading-normal text-[120px]'>
              drops
              <div className='absolute -right-[20%] top-[35%] text-[14px] font-bold font-Plus_Jakarta_Sans text-[#171717]'><span className=' font-DM_Sans font-bold '>*</span> trending</div>

          </div>
          {/* single card */}
          {
              tdrops.map((tdrop, index) => (
                  <div
                      className='bg-center bg-cover bg-no-repeat group z-10 w-[330px] h-[400px] flex flex-col bg-slate-200'
                      style={{ backgroundImage: `url(${tdrop.img})` }}
                      key={index}>.
                  </div>

              ))
          }


      </div>
  )
}

export default Drops