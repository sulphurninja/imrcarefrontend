import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import Masthead from '../components/masthead';
import Aboutus from '../components/aboutus';
import Skills from '../components/skills';
import { GetServerSideProps, NextPage } from 'next';
import { fetchCategories, fetchMobiles } from '../http';
import { ICategory, ICollectionResponse, IMobile } from '../types';
import { AxiosResponse } from 'axios';
import Tabs from '../components/Tabs';
import MobileList from '../components/MobileList';
import qs from 'qs'

const inter = Inter({ subsets: ['latin'] })

interface IPropTypes {
  categories: {
    items: ICategory[];
  };
  mobiles:{
    items: IMobile[];
  }
}

const Home: NextPage<IPropTypes> = ({ categories, mobiles }) => {
 
  return (
    <div>


      <Head>
        <title>IMR Care-Home</title>
        <meta name="description" content="IMR CARE Mobile Phone Repair, All Brands Phone Repair and Premium Service  at your fingertips" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Masthead />
      <Aboutus />
      <Skills />
      <section id='mobiles' className='bg-black h-max-fit w-max-fit'>
        <Tabs categories={categories.items} />

        {/**Mobiles */}
        <MobileList mobiles={mobiles.items} />

      </section>



    </div>
  )
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {

  const options = {
    populate: ['Image'],
  };

  const queryString = qs.stringify(options);

  // Mobiles
  const { data: mobiles, }: AxiosResponse<ICollectionResponse<IMobile[]>> =
    await fetchMobiles(queryString);


  //categories
  const { data: categories, }: AxiosResponse<ICollectionResponse<ICategory[]>> =
    await fetchCategories(queryString);

 
  return {
    props: {
      categories: {
        items: categories.data
      },
      mobiles :{
        items: mobiles.data,
        pagination: mobiles.meta.pagination,
      }
    }
  }
}


