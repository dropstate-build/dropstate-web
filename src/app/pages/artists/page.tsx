import React from 'react'
import {  BsFillArrowUpRightCircleFill } from 'react-icons/bs'
import ProductCard from '@/app/components/productCard'
import {RiVerifiedBadgeFill} from 'react-icons/ri'


function ArtistPage() {
    //dummy data of top selling shorts
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
        <div className='bg-white h-full w-full flex flex-col justify-between gap-4 '>
            {/* banner */}
            <div
                className=' relative   flex flex-col   min-h-[320px] bg-white bg-cover  bg-no-repeat bg-center  '
                style={{ backgroundImage: `url(https://image.api.playstation.com/vulcan/ap/rnd/202211/0901/hJsSsHh7P019cNOT7YHp56jK.png?w=1920&thumb=false)` }}
            >
                {/* profile pic */}
            
                <div className=' absolute left-[120px] -bottom-[108px] bg-cover bg-center bg-no-repeat ring-[8px] ring-white w-[200px] h-[200px] rounded-full '
                    style={{ backgroundImage: `url(https://image.api.playstation.com/vulcan/ap/rnd/202211/0901/hJsSsHh7P019cNOT7YHp56jK.png?w=1920&thumb=false)` }}
                ></div>
                {/* profile name */}
                
                <div className='absolute left-[120px] -bottom-[166px] flex flex-row items-center '>
                <span className='text-black text-[40px]  font-bold  font-Plus_Jakarta_Sans   '>Call Of Duty</span>
                <RiVerifiedBadgeFill className='text-[36px] text-[#4967FF] inline-block ml-1 ' />

                </div>
                <span className=' absolute left-[120px] -bottom-[188px]  text-[#AEAEAE] text-[20px] font-medium font-Plus_Jakarta_Sans '>@CodeGame</span>

            
            </div>
                {/* TopSelling shorts */}
            <div className='mt-[320px] ml-[120px] flex flex-col '>
                {/* title */}
                <div className='text-black  font-DM_Sans  font-normal text-[32px]  mb-[32px]'>Top Selling shorts</div>
                {/* ProductCardList */}
                <div className='w-full  flex flex-row gap-[40px] jusity-self-start justify-start items-center  '>
                    {/* cards */}
                    {
                        cards.map((card,index) => (
                            <ProductCard key={index} ProductCard={card} />
                        ))}
                </div>

            </div>

            
            {/* shop by category */}




        </div>
    )
}

export default ArtistPage






