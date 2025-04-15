import React from 'react'
import { MdOutlineFileDownload } from "react-icons/md";

const Banner = () => {
  return (
    <section className='pt-12 lg:pt-40 lg:pb-20'>
        <div className="container">
            <div className='lg:flex  items-center'>
                <div className="bannTitle text-center lg:text-left lg:ml-24,w-3/5 relative lg:ml-24">
                    <div className="vector hidden lg:block absolute top-10 -left-24">
                        <img src="images/bannVector.png" alt="vector" />
                    </div>
                    <h1 className='bannerTitle '>CREATIVE UI <span className='text-secondery'>DESIGNER</span></h1>

                    <div className='button'>
                        <button className='btn'>Hire me</button>
                        <button className='btn flex gap-2.5 items-center'>Download CV <span><MdOutlineFileDownload /></span></button>
                    </div>
                </div>

                <div className="bannImage lg:w-2/5 ">
                    <img className='mx-auto' src="images/bannerImage.png" alt="image" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner