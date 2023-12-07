'use client'
import Image from 'next/image'
import Link from 'next/link'
import { RiVerifiedBadgeFill } from 'react-icons/ri'
import { GoArrowUpRight } from "react-icons/go";
import React, { useEffect } from 'react';
import Themes from './components/themes';
import Drops from './components/drops';
import TopArtists from './components/topArtists';
import ArtistFooter from './components/artistFooter';
import NavBar from './components/navbar';
import UserOpt from './components/userOptions';
import Brand from './components/brand';
import Banner from './components/banner';

export default function Home() {
  const trendingDrops = [
    { img: "https://www.urbanmonkey.com/cdn/shop/products/daily-reminder-1_13c5b7b8-a23b-46e5-802e-f42ae71cfb96_1024x.jpg?v=1665474801" },
    { img: "https://assets.bonkerscorner.com/uploads/2021/08/07164738/Look-3-2179.jpg" },
    { img: "https://m.media-amazon.com/images/I/614l7-eEh3L._AC_UY1100_.jpg" },

  ]
  const themes = [
    {
      img: 'https://c4.wallpaperflare.com/wallpaper/879/54/385/anime-boys-neon-hd-wallpaper-preview.jpg',
      logo: 'https://www.urbanmonkey.com/cdn/shop/products/daily-reminder-1_13c5b7b8-a23b-46e5-802e-f42ae71cfb96_1024x.jpg?v=1665474801',
      header: 'NEED FOR SPEED',
      body: 'Unleash high-octane fashion that accelerates your look to the finish line'
    },
    {
      img: 'https://images.hdqwalls.com/download/spider-man-miles-morales-artwork-4k-nr-2048x1152.jpg',
      logo: 'https://www.urbanmonkey.com/cdn/shop/products/daily-reminder-1_13c5b7b8-a23b-46e5-802e-f42ae71cfb96_1024x.jpg?v=1665474801',
      header: 'NEED FOR SPEED',
      body: 'Unleash high-octane fashion that accelerates your look to the finish line'
    },
    {
      img: 'https://wallpapers.com/images/hd/rocket-league-hd-neon-car-bmwm76bljegylf2e.jpg',
      logo: 'https://www.urbanmonkey.com/cdn/shop/products/daily-reminder-1_13c5b7b8-a23b-46e5-802e-f42ae71cfb96_1024x.jpg?v=1665474801',
      header: 'NEED FOR SPEED',
      body: 'Unleash high-octane fashion that accelerates your look to the finish line'
    },
    {
      img: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2019/09/Batman-Damned-Comic-Interview.jpg',
      logo: 'https://www.urbanmonkey.com/cdn/shop/products/daily-reminder-1_13c5b7b8-a23b-46e5-802e-f42ae71cfb96_1024x.jpg?v=1665474801',
      header: 'NEED FOR SPEED',
      body: 'Unleash high-octane fashion that accelerates your look to the finish line'
    },
    {
      img: 'https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1434/https://s3.cointelegraph.com/uploads/2022-01/34a3c220-19b7-45d4-9c80-8c2bc8006486.jpg',
      logo: 'https://www.urbanmonkey.com/cdn/shop/products/daily-reminder-1_13c5b7b8-a23b-46e5-802e-f42ae71cfb96_1024x.jpg?v=1665474801',
      header: 'NEED FOR SPEED',
      body: 'Unleash high-octane fashion that accelerates your look to the finish line'
    },
    {
      img: 'https://c4.wallpaperflare.com/wallpaper/776/58/423/robot-mech-animals-computer-parts-nft-cgi-hd-wallpaper-preview.jpg',
      logo: 'https://www.urbanmonkey.com/cdn/shop/products/daily-reminder-1_13c5b7b8-a23b-46e5-802e-f42ae71cfb96_1024x.jpg?v=1665474801',
      header: 'NEED FOR SPEED',
      body: 'Unleash high-octane fashion that accelerates your look to the finish line'
    },

  ]
  const ArtistCards = [
    {
      name: 'ElonMusk',
      pitch: 'Official Riot Games store on dropstate where pixels meet passion. Explore exclusive gaming gear inspired by your favorite titles.',
      image: 'https://cdn.midjourney.com/42a84bda-1597-428a-894c-f005a21632e5/grid_0_640_N.webp',
      link: 'https://www.google.com/'
    },
    {
      name: 'Budweiser',
      pitch: 'Official Riot Games store on dropstate where pixels meet passion. Explore exclusive gaming gear inspired by your favorite titles.',
      image: 'https://eazywagon.com/cdn/shop/products/EW138lowres_69f2fd10-150f-4100-ac9c-c8062d3363b2_800x.jpg?v=1667377215',
      link: 'https://www.google.com/'
    },
    {
      name: 'Riot Games',
      pitch: 'Official Riot Games store on dropstate where pixels meet passion. Explore exclusive gaming gear inspired by your favorite titles.',
      image: 'https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Fblogoflegends.com%2Ffiles%2F2019%2F10%2FCopy-of-Ekko-1-850x560.jpg',
      link: 'https://www.google.com/'
    },
    {
      name: 'DudePerfect',
      pitch: 'Official Riot Games store on dropstate where pixels meet passion. Explore exclusive gaming gear inspired by your favorite titles.',
      image: 'https://i.pinimg.com/originals/c8/fb/36/c8fb36829a5ffc0d5768c7bd16c81f55.jpg',
      link: 'https://www.google.com/'
    },
    {
      name: 'BoredApeYatchClub',
      pitch: 'Official Riot Games store on dropstate where pixels meet passion. Explore exclusive gaming gear inspired by your favorite titles.',
      image: 'https://images.t3n.de/news/wp-content/uploads/2022/04/bored-ape-otherside.jpg?class=structuredData-small',
      link: 'https://www.google.com/'
    }
  ]
  //   useEffect(() => {
  //     const script= document.querySelector(".card-selector")?.cloneNode(true)
  //     const section=document.querySelector(".section")
  //     script?section?.appendChild(script):null
  // return ()=>{
  //   script?section?.removeChild(script):null
  // }

  // }, [])
  return (
    <main className="flex min-h-screen flex-col items-start  bg-white ">
      {/* banner  */}
      <Banner />
      {/* brandName and userOptions */}
      <div className='flex flex-row h-[65px] justify-between w-full  items-start text-black font-Plus_Jakarta_Sans mb-[37px]'>
        {/* brandName and sometext */}
        <Brand />
        {/* userOptions */}
        <UserOpt />

      </div>
      {/* navbar list */}
      <div className='ml-[40px]'>
        <NavBar />
      </div>
      {/* topArtists */}
      <div className='w-full flex flex-col mt-[102px]'>
        {/* artists */}
        <TopArtists topArtists={ArtistCards} />
      </div>
      {/* trendingDrops*/}
      <div className='mt-[121px] w-full flex  '>
        {/* drops */}
        <Drops tdrops={trendingDrops} />
      </div>
      {/* themes */}
      <div className='w-full  mt-[200px]'>
        <Themes themes={themes} />

      </div>
      {/* hook for artists */}
      <div className='w-full relative  flex justify-center items-center  mt-[1822px] bg-black h-[373px] '>
        {/* artists footer */}
        <ArtistFooter />
      </div>
      {/* general footer */}

    </main>
  )
}
