import React from 'react'
import WishListIcon from './wishListIcon'

interface Card {
    type: string,
    name: string,
    price: number,
    src: string
    
}
 interface ProductCardProps {
    ProductCard: Card
    // cards: Array<Card>
 }

const ProductCard: React.FC<ProductCardProps> = ({ ProductCard }) => {
    return (
        

                <div className='flex flex-col justify-start items-center pt-4 '>
                    {/* card Image */}
                    <div style={{ backgroundImage: `url(${ProductCard.src})` }}
                        className=' relative  bg-center bg-cover bg-no-repeat h-[368px] w-[304px]  '>
                        {/* icon */}
                        <div className='absolute -right-[16px] bottom-[22px]'>
                        <WishListIcon/>
                        </div>
                        
                    </div>
                    {/* card type */}
                    <div className='text-[#AEAEAE] text-[20px] text-start w-full pt-[24px] font-normal font-Plus_Jakarta_Sans '>{ProductCard.type}</div>
                    {/* name of product */}
                    <div className='text-black text-[24px]  text-start w-full -mt-2 font-medium font-Plus_Jakarta_Sans'>{ProductCard.name}</div>
                    {/* price  */}
                    <div className='text-black text-[32px] font-Neue font-medium w-full text-start'>$ {ProductCard.price}</div>
                </div>
        
        
    )
}

export default ProductCard;