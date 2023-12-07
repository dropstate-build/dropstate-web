import React from 'react'

function Brand() {
  return (
    <div className='flex flex-col  gap-[4px]  ml-[40px]'>
          {/* brandName */}
          <div className='text-[32px]  font-medium flex justify-center '>drop<span className='font-bold underline underline-offset-2'>state</span></div>
          {/* some text */}
          <div className='bg-black  place-self-end text-white px-[17px] py-[3px] text-[12px] border-[2px] mr-[8px]'>Luxe</div>
        </div>
  )
}

export default Brand