import React from 'react'

const About = () => {
  return (
    <section className='lg:pt-56 lg:pb-32'>
        <div className="container">
            <div className=' block lg:flex justify-between items-center'>

                <div className="aboutTitle text-left lg:w-2/5 relative mb-5 lg:mb-0">
                    <div className='hidden lg:block absolute -top-40'>
                        <img src="images/aboutOne.png" alt="vector" />
                    </div>
                    <h2 className='heading'>About <span className='text-secondery'>me</span></h2>
                    <div className='hidden xl:block absolute right-16 -top-5'>
                        <img src="images/aboutTwo.png" alt="vector" />
                    </div>
                    <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.... <span className='font-bold'>Read more</span></p>
                    <div className='hidden lg:block absolute -bottom-50 left-40'>
                        <img src="images/aboutThree.png" alt="vector" />
                    </div>
                </div>

                <div className="aboutImage">
                    <img className='mx-auto' src="images/aboutImage.png" alt="image" />
                </div>
            </div>

        </div>
        <hr className='text-white/10 mt-[70px]' />
    </section>
  )
}

export default About