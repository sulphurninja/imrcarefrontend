import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black -900 py-8">
            <div className="container mx-auto flex flex-wrap justify-between">
                <div className="flex items-center w-[20%]">
                    <img src="/logo.png" alt="Logo" className="h-full  mr-2" />

                </div>
                <div className="flex items-center mt-4  sm:mt-0">
                    <div className="lg:ml-[-50%] ml-4 ">
                        <h2 className="text-amber-400 font-semibold">Contact Us</h2>
                        <p className="text-gray-300 leading-8 w-[90%] lg:w-[100%] mt-2">
                            <span className="block"><strong className='font-bold'>Email</strong>: ibrahimsayyed8@gmail.com</span>
                            <span className="block"><strong>Phone</strong>: +91 7972393679</span>
                            <span className="block "><strong>Address</strong>: Main Mobile Market, Sai Chowk, Besides Sai Baba Mandir, Pimpri - 411017</span>
                        </p>
                    </div>
                    <div className='lg:ml-[40%] mr-4'>
                        <h2 className="text-green-400  font-semibold">Follow Us</h2>
                        <div className="flex mt-2">
                            <a
                                href="https://www.facebook.com/profile.php?id=100078350991199&mibextid=ZbWKwL"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-300 hover:text-white transition duration-300 ease-in-out mr-4"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="h-6 w-6">
                                    <path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M14,9.2h-1.4c-0.3,0-0.6,0.3-0.6,0.6V11h2.5l-0.3,2.4h-2.2v6 H9.4v-6H7.1V11H9V9.8C9,8.2,10.1,7,12.2,7H14V9.2z" />
                                </svg>

                            </a>
                            <a
                                href="https://www.twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-white transition duration-300 ease-in-out mr-4"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M22.46 6.14c-.74.33-1.54.55-2.38.65.85-.51 1.5-1.32 1.8-2.28-.79.47-1.67.81-2.6.99-.75-.8-1.82-1.3-3-1.3-2.28 0-4.13 1.85-4.13 4.13 0 .33.04.65.13.95-3.43-.17-6.47-1.81-8.5-4.31-.35.61-.55 1.32-.55 2.08 0 1.43.73 2.7 1.84 3.44-.68-.02-1.32-.21-1.88-.52v.05c0 1.99 1.42 3.66 3.31 4.04-.35.1-.72.16-1.1.16-.27 0-.53-.03-.78-.08.53 1.65 2.06 2.85 3.88 2.89-1.42 1.18-3.22 1.88-5.17 1.88-.34 0-.67-.02-1-.07 1.84 1.18 4.02 1.86 6.36 1.86 7.63 0 11.81-6.32 11.81-11.81l-.01-.54c.81-.58 1.51-1.31 2.07-2.13z"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://www.linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-white transition duration-300 ease-in-out"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="h-6 w-6">
                                    <path d="M20.4,20.4H16V10.9c0-1.5,0-3.4-2.2-3.4s-2.5,1.7-2.5,3.3v9.6H7.6V8.3h3.3v1.8h0.1c0.5-0.9,1.7-1.8,3.4-1.8 c3.6,0,4.3,2.4,4.3,5.5V20.4z M4.4,7.3c-0.7,0-1.3-0.6-1.3-1.3s0.6-1.3,1.3-1.3s1.3,0.6,1.3,1.3S5.1,7.3,4.4,7.3L4.4,7.3z M2.8,20.4 h3.6V8.3H2.8V20.4L2.8,20.4z" />
                                </svg>

                            </a>
                            
                        </div>
                        <div className='flex '>
                        <a href='https://instagram.com/imr_care?igshid=ZDdkNTZiNTM='>
                                <img src='/instagram.png' className='h-[28px] cursor-pointer mt-4 w-[28px] mr-4' />
                            </a>
                            <a href='https://m.youtube.com/channel/UCXf9p_DNM2nG7U02ru984xQ?fbclid=PAAaa5_wiuTV43aq44_f58oJ3OXNfxGUx7CkB8ThFtxdxnGY2_aQkI9CvJmKs'>
                                <img src='/youtube.png' className='h-[28px] cursor-pointer mt-4 w-[28px]' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
