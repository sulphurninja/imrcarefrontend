import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { IMobile } from '../types'

interface IPropType {
    mobile: IMobile;
}

const MobileCard = ({ mobile }: IPropType) => {
    return (
        <div className='text-white lg:text-center text-center'>
            <Link href={`/mobile/${mobile.attributes.Slug}`}>
                <Image src={`https://sea-turtle-app-hewtp.ondigitalocean.app${mobile.attributes.Image.data.attributes.url}`} alt='#' width={200} height={200} className='   h-[200px] w-[200px] lg:w-[300px] lg:h-[300px]'/>
                <h1 className='text-xl  text-white font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-green-300'>
                    {mobile.attributes.Title}
                </h1>
            </Link>
        </div>
    )
}

export default MobileCard