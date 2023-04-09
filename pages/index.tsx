import Head from 'next/head';
import { Inter } from '@next/font/google';
import Masthead from '../components/masthead';
import Aboutus from '../components/aboutus';
import Skills from '../components/skills';
import OrderForm from '../components/orderform'
import { GetServerSideProps, NextPage } from 'next';


const inter = Inter({ subsets: ['latin'] })

// interface IPropTypes {
//   categories: {
//     items: ICategory[];
//   };
//   mobiles:{
//     items: IMobile[];
//   }
// }

const Home: NextPage = () => {

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
      <section id='mobiles' className='bg-black '>
        {/* <Tabs categories={categories.items} /> */}
        <OrderForm />
        {/**Mobiles */}
        {/* <MobileList mobiles={mobiles.items} /> */}

      </section>



    </div>
  )
};

export default Home;

