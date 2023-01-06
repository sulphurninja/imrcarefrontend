
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { ICollectionResponse, IMobile } from "../../types";
import { AxiosResponse } from "axios";
import { fetchMobilesBySlug } from "../../http";
import qs from "qs";
import { GetServerSideProps } from "next";


interface IPropType{
  mobile: IMobile;
  notFound?: boolean;
}


const slug=({mobile, notFound=false}:IPropType)=> {
  return (

    <main className="bg-white">
      <header className="flex  ml-auto mr-auto text-center lg:ml-auto lg:mr-auto lg:text-center">
        <Link href='/'>
         <img src='/logo.png' className="h-[100px]" />
         </Link>
         <h1 className="font-bold font-mono xl:text-4xl mt-[30px]  lg:text-3xl text-2xl mb-2 capitalize">
                Service For: {mobile.attributes.Title}
              </h1>
      </header>
      <div className="heightFix px-6 lg:py-32 md:py-28 py-12 pb-20">
        <div className="max-w-screen-xl flex items-center mx-auto">
          <div className="flex md:flex-row flex-col md:justify-between w-full md:gap-4 gap-8">
            <div className="mx-auto">
            <Image src={`http://localhost:1337${mobile.attributes.Image.data.attributes.url}`} alt='#' width={200} height={200} className='   h-[200px] w-[200px] lg:w-[300px] lg:h-[300px]'/>
            </div>

            <div className="flex-grow xl:max-w-2xl mt-[-100px] ml-auto mr-auto text-center lg:max-w-xl  md:max-w-md">
             
              <div className="mt-10 flex xs:flex-row flex-col sm:gap-8 gap-6">
              <div className=" mx-auto flex max-w-2xl mr-auto ml-auto  flex-col space-y-2 p-10 shadow shadow-green-500">
        <h3>Inquire on Whatsapp</h3>
        <hr />
              <a href={`https://web.whatsapp.com/send?phone=7499247072&text= Hello!, I want to inquire about my ${''}${mobile.attributes.Title}
                &app_absent=0`}
                className="focus:shadow-outline cursor-pointer rounded bg-green-500 py-2 px-4 font-bold text-white shadow hover:bg-green-400 focus:outline-none">
                Whatsapp
              </a>
      </div>
                <hr className="my-5 mx-auto max-w-lg border border-yellow-500" />
               
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comment */}
     
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async({query}) =>{

  const queryString = qs.stringify({
    populate: ['Image'],
    filters:{
      Slug:{
        $eq: query.slug,
      }
    }
  })

  const {data: mobiles}: AxiosResponse<ICollectionResponse<IMobile[]>> = 
  await fetchMobilesBySlug(queryString);

  if(mobiles.data.length===0){
    return{
      notFound:true,
    }
  }
 return {
  props: {
    mobile: mobiles.data[0]
  }
 }
  
}

export default slug


