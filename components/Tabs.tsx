import { AxiosResponse } from 'axios';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { fetchCategories } from '../http';
import { ICategory, ICollectionResponse } from '../types'

interface IPropTypes{
  categories: ICategory[];
}

const Tabs = ({categories}: IPropTypes) => {

  const router = useRouter();

  const isActiveLink = (category: ICategory) =>{
    return category.attributes.Slug === router.query.category; 
  };

  return (
    <div className='pl-[20px] border-b-2 border-gray-100 flex  items-center justify-between'>  

      <ul className='flex items-center'>
        <li className={'mr-6 pb-6 border-b-4 rounded-sm ' + `${
          router.pathname ==='/' ?
          'border-green-300 text-green-300'
          : 'border-black text-gray-400'
        }` }>
          <Link className='text-white' href='/#mobiles'>
              All 
          </Link>
        </li>
        {
      categories.map(category=>{
        return (
         <li
         key={category.id} 
         className={'mr-6 pb-6 border-b-4 text-sm  rounded-full text-center ' + `${
         isActiveLink(category)
          ? 'border-green-300 text-green-300'
          : 'border-black text-white font-bold'
        }` }>
           <Image src={`https://sea-turtle-app-hewtp.ondigitalocean.app${category.attributes.Image.data.attributes.url}`} width={900} height={100} alt='#' className='border-white object-contain  rounded-full border-2  h-[50px] w-[50px] lg:w-[120px] lg:h-[120px]'/>
          <Link href={`/category/${category.attributes.Slug}`}>
            {
              category.attributes.Title
            }
          </Link>
         </li>
        )
      })}
      </ul>


      
      </div>
  )
}

export default Tabs

