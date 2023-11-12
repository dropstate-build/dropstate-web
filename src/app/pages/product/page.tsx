'use client'
import { ProductType } from '@/app/components/interface/productType'
import ProductCard from '@/app/components/productCard'
import ProductDetails from '@/app/components/productDetails'
import ProductShowCase from '@/app/components/productShowCase'
import React, { useState } from 'react'


function ProductPage() {
    //dummy data for Product Object 
    const Product: ProductType = {
        productImage: [
            'https://media.karousell.com/media/photos/products/2019/07/22/calvin_klien_kendall_jenner_sport_bra_1563780071_1fede2cb_progressive.jpg',
            'https://m.media-amazon.com/images/I/51Edzp+ZLoL._AC_UY580_.jpg',
            'https://m.media-amazon.com/images/I/51Edzp+ZLoL._AC_UY580_.jpg',
            'https://m.media-amazon.com/images/I/51Edzp+ZLoL._AC_UY580_.jpg',
        ],
        type: 'Premium T-shirt',
        name: 'Dragon Ball Z-Goku Edition',
        designedBy: 'Call of Duty',
        sizeChart: ['S', 'M', 'L', 'XL', 'XXL'],
        colorChart: ['blue', 'red', 'green', 'yellow'],
        availableQuantity: 5,
        price: 24.46,
        deliveryDetails: {
            returnPeriod: 7,
            guarantee: true,
            qualityAssured: true,
            codAvailable: true,
        },
        designFeature: {
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
            material: '90% Cotton, 10% Polyester',
            washing: 'Machine was, Hand wash',
            print: 'Direct To garment',
            ironing: 'Do not iron on prints'
        },
        src: 'https://m.media-amazon.com/images/I/51Edzp+ZLoL._AC_UY580_.jpg'
    }
    //dummy data of product cards
    const cards = [
        {
            type: 'sticker',
            name: 'Nike AirForce 1',
            price: 24.46,
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQUabefSDF7E6OyoA171anzt1uL08dVuBMOg&usqp=CAU'
        },
        {
            type: 'T-shirt',
            name: 'Dimensional',
            price: 40.46,
            src: 'https://media.centrepointstores.com/i/centrepoint/8914398-AW23MCORE5-SPW239623_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-m-prt-pdp-2x$'
        }, {
            type: 'Over-sized Tshirt',
            name: 'Dragon Ball Z',
            price: 200.46,
            src: 'https://100mph.cc/cdn/shop/files/unisex-v-neck-tee-black-front-6493a4d0deb23_2048x2048.jpg?v=1687547335'
        }, {
            type: 'Printed Tshirt',
            name: 'mikey mouse',
            price: 30.63,
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgT_WCxAVrI-jC-CDwJvgbcHpwi8AQU10ydj-LFur5JXtEvTB-FSCqZYzOAqlmTg05XUg&usqp=CAU'
        },
        {
            type: 'printed Mug',
            name: 'Mug Anime Edition',
            price: 45.4,
            src: 'https://images.meesho.com/images/products/249234387/ncptc_512.webp'
        },
    ]
    return (
        <div className='flex flex-col h-fit w-full   bg-white text-black gap-[160px] '>
            {/* Product details */}
            <div className=' mt-[200px] flex flex-row h-[40.4%] gap-[80px] mx-[120px] items-start '>
                {/* Product Display */}
                <div className=' w-[44%]  bg-white'>
                    {/* product display combined div */}
                    <ProductShowCase ProductImages={Product.productImage} />


                </div>
                {/* Product Description and buy section */}
                {/* //TODO: add an extra div here with w-[55%] and bg-white when a component is called here and change current w-55 to w-full */}
                <div className='w-[55%] bg-white '>
                    <ProductDetails ProductDetails={Product} />
                </div>

            </div>
            {/* product list section */}
            <div className='flex flex-col gap-[146px] px-[120px]  justify-start items-center w-full h-[59.6%] bg-white'>
                {/* similar Products */}
                <div className='  flex flex-col '>
                    {/* title */}
                    <div className='text-black  font-DM_Sans  font-normal text-[32px]  mb-[32px]'>Similar Products</div>
                    {/* ProductCardList */}
                    <div className='w-full  flex flex-row gap-[40px] jusity-self-start justify-start items-center  '>
                        {/* cards */}
                        {
                            cards.filter((card, index) => {
                                return index < 5
                            }).map((card) => (
                                <ProductCard ProductCard={card} />
                            ))}
                    </div>

                </div>
                {/* More from Section */}
                <div className=' flex flex-col '>
                    {/* title */}
                    <div className='text-black  font-DM_Sans  font-normal text-[32px]  mb-[32px]'>More from Call Of Duty</div>
                    {/* ProductCardList */}
                    <div className='w-full  flex flex-row gap-[40px] jusity-self-start justify-start items-center  '>
                        {/* cards */}
                        {
                            cards.filter((card, index) => {
                                return index < 5
                            }).map((card) => (
                                <ProductCard ProductCard={card} />
                            ))}
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ProductPage