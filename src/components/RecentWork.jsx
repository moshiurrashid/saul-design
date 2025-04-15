import React from 'react'
import recentWorkBG from "../assets/recentWorkBG.png"

const RecentWork = () => {
  return (
    <section className=' bg-no-repeat bg-center bg-cover py-12 lg:py-64' style={{backgroundImage:`URL(${recentWorkBG})`}}>
      <div className="container">
        <div>
          <h2 className='heading mb-4'>My recent <span className='text-secondery'>works</span></h2>

          <ul className='flex gap-2 lg:gap-4 '>
            <li className='mylist bg-secondery'>All</li>
            <li className='mylist'>UI</li>
            <li className='mylist'>UX</li>
            <li className='mylist'>UXWeb Design</li>
          </ul>

          <div className='flex flex-wrap gap-3 xl:gap-0 justify-center xl:justify-between mt-5 lg:mt-12'>
            <div className='px-[51px] py-[61px] bg-[#393E46]/50 rounded-2xl'>
              <img src="images/imageOne.png" alt="image" />
            </div>
            <div className='myItem px-0'>
              <img src="images/imageTwo.png" alt="image" />
            </div>
            <div className='myItem px-0'>
              <img src="images/imageThree.png" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecentWork