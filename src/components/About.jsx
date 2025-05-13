import React from "react";

const About = () => {
  return (
    <section className="lg:pt-56 lg:pb-32">
      <div className="container">
        <div className="block items-center justify-between lg:flex">
          <div className="aboutTitle relative mb-5 text-left lg:mb-0 lg:w-2/5">
            <div className="absolute -top-40 hidden lg:block">
              <img src="images/aboutOne.png" alt="vector" />
            </div>
            <h2 className="heading">
              About <span className="text-secondery">me</span>
            </h2>
            <div className="absolute -top-5 right-16 hidden xl:block">
              <img src="images/aboutTwo.png" alt="vector" />
            </div>
            <p className="para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis.... <span className="font-bold">Read more</span>
            </p>
            <div className="absolute -bottom-50 left-40 hidden lg:block">
              <img src="images/aboutThree.png" alt="vector" />
            </div>
          </div>

          <div className="aboutImage">
            <img className="mx-auto" src="images/aboutImage.png" alt="image" />
          </div>
        </div>
      </div>
      <hr className="mt-[70px] text-white/10" />
    </section>
  );
};

export default About;
