import React from "react";
import { FiSend } from "react-icons/fi";

const contact = () => {
  return (
    <section className="py-12 lg:py-64">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="lg:w-1/2">
            <h2 className="heading max-w-[600px]">
              Got a project in <span className="text-secondery">mind?</span>
            </h2>

            <div className=" lg:ml-56">
              <img src="images/contactImage.png" alt="image" />
            </div>
          </div>

          <div className="lg:w-1/2">
          <div className="flex flex-col lg:flex-row gap-6">
            <div>
              <label className="block labeltitle" htmlFor="name">
                Your Name
              </label>
              <input className="input" type="text" id="name" placeholder="Name"/>
            </div>
            <div>
              <label className="block labeltitle" htmlFor="mail">
                Your email
              </label>
              <input className="input" type="text" placeholder="Email"/>
            </div>
          </div>

          <div className="mt-6">
            <label className="block labeltitle" htmlFor="message">Your Message</label>
            <textarea className="input w-full lg:h-[280px]" type="message" name="message" id="message" placeholder="Message"></textarea>
          </div>
          <div className="mt-6">
            <button className="btn bg-secondery">Send Message <span><FiSend className="inline ml-2.5 text-2xl" /></span></button>
          </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default contact;
