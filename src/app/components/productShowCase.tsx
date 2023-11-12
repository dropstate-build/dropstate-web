'use client'
import React from 'react'
import WishListIcon from './wishListIcon'

interface Props {
    ProductImages: string[],
}

function productShowCase({ ProductImages}: Props) {
    const [selectedImage, setSelectedImage] = React.useState(ProductImages[0])
  return (
    <div className='w-full h-[677px] flex flex-row gap-[8px]'>
    {/* side pics of product */}
    <div className='flex flex-col gap-[8px]'>
        {/* 3 small product pics */}
        {
            ProductImages.filter((image,index)=>{return index<3}).map((image, index) => (
                <div onClick={()=>{setSelectedImage(image)}} key={index} className='w-[175px] h-[220px]  bg-center bg-cover bg-no-repeat'
                    style={{ backgroundImage: `url(${image})` }}></div>
            ))
        }
        {/* <div className='w-[175px] h-[220px]  bg-center bg-cover bg-no-repeat'
            style={{ backgroundImage: `url(https://m.media-amazon.com/images/I/51Edzp+ZLoL._AC_UY580_.jpg)` }}></div>
        <div className='w-[175px] h-[220px]  bg-center bg-cover bg-no-repeat'
            style={{ backgroundImage: `url(https://m.media-amazon.com/images/I/51Edzp+ZLoL._AC_UY580_.jpg)` }}></div>
        <div className='w-[175px] h-[220px]  bg-center bg-cover bg-no-repeat'
            style={{ backgroundImage: `url(https://m.media-amazon.com/images/I/51Edzp+ZLoL._AC_UY580_.jpg)` }}></div> */}

    </div>
    {/* selected  pic display */}
    <div className='relative w-[560px] h-[677px]  bg-cover bg-center bg-no-repeat '
        style={{ backgroundImage: `url(${selectedImage})` }}>
        {/* whislist icon */}
        <div className='absolute top-[8px] right-[8px]'>
            <WishListIcon />
        </div>
    </div>

</div>

  )
}

export default productShowCase