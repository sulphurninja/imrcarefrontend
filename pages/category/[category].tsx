import { AxiosResponse } from 'axios';
import { GetServerSideProps } from 'next';
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Tabs from '../../components/Tabs';
import { fetchCategories, fetchMobiles } from '../../http';
import { ICategory, ICollectionResponse, IMobile, IPagination, IQueryOptions } from '../../types';
import qs from 'qs'
import MobileList from '../../components/MobileList';
import { useRouter } from 'next/router';

interface IPropType {
  categories: {
    items: ICategory[];
  },
  mobiles:{
    items: IMobile[],
    pagination: IPagination;
  };
  slug: string;
}

const Category = ({ categories, mobiles, slug }: IPropType) => {
  const router = useRouter();
  const { category: categorySlug } = router.query;
  const formattedCategory = () => {
    return slug;
  }
  return (
    <>
      <Head>
        <title>IMR Care- {formattedCategory()}</title>
        <meta name="description" content="All Mobile Phone Models for Repair " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href='/'>
        <Image src="https://res.cloudinary.com/kaam-24x7/image/upload/v1672704813/logo_gwkv6n.png" alt="imr care logo" width={100} height={100} className='ml-auto mr-auto'
        /></Link>

      <section className='my-[60px] bg-black '>

        <Tabs categories={categories.items} />
        <MobileList mobiles={mobiles.items}  />
      </section>
    </>
  )
};

export const getServerSideProps: GetServerSideProps = async ({query}) => {
    console.log('query',query );
  const options = {
    populate: ['Image'],
    filters:{
       category:{
        Slug: query.category,
       },  
    },
  };
  const options2 = {
    populate: ['Image'],
  }
  const queryString = qs.stringify(options);
  const queriString = qs.stringify(options2);

  const { data: mobiles, }: AxiosResponse<ICollectionResponse<IMobile[]>> =
  await fetchMobiles(queryString);


  const { data: categories, }: AxiosResponse<ICollectionResponse<ICategory[]>> =
    await fetchCategories(queriString);
  return {
    props: {
      categories: {
        items: categories.data,
      },
      mobiles:{
        items: mobiles.data,
        pagination: mobiles.meta.pagination,
      },
      slug: query.category,
    }
  }

}

export default Category