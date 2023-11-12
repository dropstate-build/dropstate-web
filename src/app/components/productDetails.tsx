import React, { useState } from 'react'
import { ProductType } from './interface/productType'

interface BuyOptions{
    quantity:number
    price:number
    color:string
    size:string

}

interface Props {
    ProductDetails: Partial<ProductType>
}

function productDetails({ ProductDetails }: Props) {
    const { type, name, designedBy: designer, sizeChart, colorChart, price:basePrice, deliveryDetails, designFeature,availableQuantity } = ProductDetails
    const [open, isOpen] = useState(false)
    const[buyItem,setBuyItem]=useState<BuyOptions>({
        quantity:1,
        price:(basePrice?basePrice:0),
        color:colorChart?colorChart[0]:'',
        size:sizeChart?sizeChart[0]:''
    })

    return (
        <div className='w-full bg-white flex flex-col items-start justify-start text-start '>
            {/* product type */}
            <div className='w-full text-[#AEAEAE] font-Plus_Jakarta_Sans text-[20px] font-medium mb-[8px]'>{type}</div>
            {/* product name */}
            <div className='w-full text-[#171717] font-Plus_Jakarta_Sans font-medium text-[36px] mb-[16px]'>{name}</div>
            {/* designed by */}
            <div className='w-full mb-[32px] text-[16px] font-medium text-[#171717] '>designed by <span className='font-bold underline underline-offset-1'>{designer}</span></div>
            {/* size section */}
            <div className=' flex flex-col w-full gap-[24px] mb-[32px]'>
                {/* Select Size header */}
                <div className='text-[16px] font-semibold  font-Plus_Jakarta_Sans'>Select Size</div>
                {/* size chart */}
                <div className='flex flex-row w-full justify-start items-center gap-[12px]'>
                    {sizeChart?.map((size, index) => (
                        <div key={index}
                        onClick={()=>setBuyItem((prev)=>({...prev,size:size}))}
                         className=' border-[1px] border-black px-[12px] py-[8px] hover:bg-black hover:text-white hover:cursor-pointer text-[16px] font-Plus_Jakarta_Sans font-medium h-[36px] flex items-center'>{size}</div>
                    ))}
                </div>
            </div>
            {/* color section */}
            <div className='flex flex-col w-full gap-[24px] mb-[31px]'>
                {/* Select color header */}
                <div className='text-[16px] font-semibold  font-Plus_Jakarta_Sans'>Select Color</div>
                {/* color chart */}
                <div className='flex flex-row w-full justify-start items-center gap-[12px]'>
                    {colorChart?.map((color, index) => (
                        <div key={index}
                        onClick={()=>setBuyItem((prev)=>({...prev,color:color}))}

                         className='w-[37px] h-[37px] rounded-full  hover:ring-2 hover:ring-black' style={{ backgroundColor: `${color}` }}></div>

                    ))}


                </div>
            </div>
            {/* quantity section  and price section*/}
            <div className=' mb-[47px] w-full flex flex-col '>
                {/* quantity header */}
                <div className='mb-[24px] text-[16px] font-Plus_Jakarta_Sans font-semibold '>Quantity</div>
                {/* quantity  and price  */}
                <div className='w-[657px] relative flex flex-row justify-between items-center '>
                    {/* quantity selector */}
                    <div className='  w-[146px] h-[39px] text-[16px] font-Plus_Jakarta_Sans font-bold flex flex-row justify-between border-[1px] border-black px-[12px] py-[8px]'>
                        <div onClick={() => {
                            if (buyItem.quantity > 1) {
                                setBuyItem((prev) => ({
                                    ...prev,
                                    quantity: prev.quantity - 1,
                                    price: Number(((basePrice?basePrice:0 )* (prev.quantity - 1)).toFixed(2)),
                                }));
                            } else {
                                setBuyItem((prev) => ({
                                    ...prev,
                                    quantity: 1,
                                    price:basePrice?basePrice:0
                                }));
                            }
                            }} className='text-[16px]  border-black  flex items-center justify-center hover:cursor-pointer'>-</div>
                        <div className='flex items-center justify-center'>{buyItem.quantity}</div>
                        <div onClick={() => {
                            if (buyItem.quantity < (availableQuantity?availableQuantity:1)) {
                                setBuyItem((prev) => ({
                                    ...prev,
                                    quantity: prev.quantity + 1,
                                    price: Number(((basePrice?basePrice:0) * (prev.quantity + 1)).toFixed(2)),
                                }));
                            } else {
                                setBuyItem((prev) => ({
                                    ...prev,
                                    quantity: availableQuantity?availableQuantity:1,
                                    price:Number(((basePrice?basePrice:0)*(availableQuantity?availableQuantity:1)).toFixed(2))
                                }));
                            }
                            }} className='text-[16px]   flex items-center justify-center hover:cursor-pointer'>+</div>
                    </div>
                    {/* price display */}
                    <div className='absolute top-[23px] right-0 font-Neue font-semibold text-[40px] text-[#171717]'>${buyItem.price}</div>

                </div>
            </div>
            {/* add to cart and buy now */}
            <div className='w-full  text-center mb-[24px] flex flex-col gap-[8px]'>
                {/* price  */}
                {/* add to cart */}
                <div className='w-[657px] h-[57px] text-[20px] border-[1.5px] border-black text-black font-Plus_Jakarta_Sans font-semibold px-[32px] py-[16px]'>Add to cart</div>
                {/* buy now */}
                <div className='w-[657px] h-[57px] text-[20px] text-white bg-black font-Plus_Jakarta_Sans font-semibold px-[32px] py-[16px]'>Buy Now</div>

            </div>
            {/* deliver details */}
            <div className='w-[657px] text-center text-[20px] font-Plus_Jakarta_Sans font-normal text-[#171717] flex flex-row justify-center  items-center gap-[40px] mb-[64px]'>
                {/* guarantee */}
                <div>{deliveryDetails?.returnPeriod} Day Return<span className='ml-[40px]'>|</span></div>
                {/* quality assured */}
                {deliveryDetails?.qualityAssured && (
                    <div>Quality Assured<span className='ml-[40px]'>|</span></div>
                )}
                {/* cod available */}
                {deliveryDetails?.codAvailable && (
                    <div>COD Available</div>

                )}
            </div>
            {/* drop down section */}
            <div className='w-[657px] flex flex-col gap-[20px] '>

                {/* design feature  */}
                <div className=' w-full flex flex-col justify-between items-center text-[16px] font-Plus_Jakarta_Sans font-semibold   '>
                    {/* toggle button */}
                    <div
                        //  onClick={()=>isOpen(!open)}
                        className='w-full flex flex-row justify-between items-center  '>
                        <div className=''>Design Feature</div>
                        <div className=''>^</div>
                    </div>
                    {/* details when toggled */}
                    {false && (
                        <div className='w-full flex flex-col items-start gap-[8px] mt-[24px]'>
                            {/* description div */}
                            <div className='text-[#171717] font-normal mb-[16px]'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an  Unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into

                            </div>
                            {/* material div */}
                            <div className='font-normal'>
                                <span className='font-bold'>Material:</span> 90% Cotton, 10% Polyester
                            </div>
                            {/* washing div */}
                            <div className='font-normal'>
                                <span className='font-bold'>Washing:</span> Machine was, Hand wash
                            </div>
                            {/* print div */}
                            <div className='font-normal'>
                                <span className='font-bold'>Print:</span> Direct To garment
                            </div>
                            {/* iron div */}
                            <div className='font-normal'>
                                <span className='font-bold'>Ironing:</span> Do not iron on prints
                            </div>


                        </div>

                    )}

                </div>
                <p className='w-[657px] justify-center leading-2 text-[#AEAEAE80] font-bold flex items-start'> _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</p>
                {/* product Description */}
                <div className=' w-full flex flex-col justify-between items-center text-[16px] font-Plus_Jakarta_Sans font-semibold'>
                    {/* toggle button */}
                    <div onClick={() => isOpen(!open)}
                        className='w-full flex flex-row justify-between items-center hover:cursor-pointer '>
                        <div className=''>Product Description</div>
                        <div className=''>^</div>
                    </div>
                    {/* details when toggled */}
                    {open && (
                        <div className='w-full flex flex-col items-start gap-[8px] mt-[24px]'>
                            {/* description div */}
                            {designFeature?.description && (
                                <div className='text-[#171717] font-normal mb-[16px]'>
                                    {designFeature.description}
                                </div>
                            )}
                            {/* material div */}
                            {designFeature?.material && (
                                <div className='font-normal'>
                                    <span className='font-bold'>Material:</span> {designFeature.material}
                                </div>

                            )}
                            {/* washing div */}
                            {designFeature?.washing && (
                                <div className='font-normal'>
                                    <span className='font-bold'>Washing:</span> {designFeature.washing}
                                </div>

                            )}
                            {/* print div */}
                            {designFeature?.print && (
                                <div className='font-normal'>
                                    <span className='font-bold'>Print:</span> {designFeature.print}
                                </div>)}
                            {/* iron div */}
                            {designFeature?.ironing && (

                                <div className='font-normal'>
                                    <span className='font-bold'>Ironing:</span> {designFeature.ironing}
                                </div>
                            )}


                        </div>

                    )}

                </div>

                <p className='w-[657px] justify-center leading-2 text-[#AEAEAE80] font-bold flex items-start'> _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</p>

                {/* design feature  */}
                <div className=' w-full flex flex-col justify-between items-center text-[16px] font-Plus_Jakarta_Sans font-semibold'>
                    {/* toggle button */}
                    <div
                        //  onClick={()=>isOpen(!open)}
                        className='w-full flex flex-row justify-between items-center  '>
                        <div className=''>Design Feature</div>
                        <div className=''>^</div>
                    </div>
                    {/* details when toggled */}
                    {false && (
                        <div className='w-full flex flex-col items-start gap-[8px] mt-[24px]'>
                            {/* description div */}
                            <div className='text-[#171717] font-normal mb-[16px]'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an  Unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into

                            </div>
                            {/* material div */}
                            <div className='font-normal'>
                                <span className='font-bold'>Material:</span> 90% Cotton, 10% Polyester
                            </div>
                            {/* washing div */}
                            <div className='font-normal'>
                                <span className='font-bold'>Washing:</span> Machine was, Hand wash
                            </div>
                            {/* print div */}
                            <div className='font-normal'>
                                <span className='font-bold'>Print:</span> Direct To garment
                            </div>
                            {/* iron div */}
                            <div className='font-normal'>
                                <span className='font-bold'>Ironing:</span> Do not iron on prints
                            </div>


                        </div>

                    )}

                </div>
            </div>
        </div>
    )
}

export default productDetails