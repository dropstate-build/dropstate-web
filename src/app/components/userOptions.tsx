import React from 'react'
import Link from 'next/link'
const UserOpt: React.FC = () => {
    return (
        <div className='flex mr-[66px] mt-[10px]'>
            <ul className='flex flex-row gap-[20px] items-start font-medium text-[16px] text-[#171717] '>
                <li>
                    <Link href='#'>
                        Login
                    </Link>
                </li>
                <li>
                    <Link href='#'>
                        Create storefront
                    </Link></li>
                <li>
                    <Link href='#'>
                        TrackOrder
                    </Link>
                </li>
            </ul>

        </div>
    )
}

export default UserOpt