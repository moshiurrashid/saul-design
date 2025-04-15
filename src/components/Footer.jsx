import React from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { LuUser } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <section className='pt-12 lg:pt-24 pb-12 border-t-[1px] border-white/10'>
        <div className="container">
            <ul className='flex justify-center gap-5 lg:gap-12'>
                <li className='text-lg text-white '><span><AiOutlineHome className='inline mr-1 lg:mr-2.5'/></span>Home</li>
                <li className='text-lg text-white '><span><LuUser className='inline mr-1 lg:mr-2.5'/></span>About Me</li>
                <li className='text-lg text-white '><span><FiPhone className='inline mr-1 lg:mr-2.5'/></span>Contact</li>
            </ul>

            <ul className='flex gap-6 justify-center mt-4 lg:mt-[38px]'>
                <li className='text-white text-2xl p-3 bg-[#393E46] rounded-full'><a href="#"><FiFacebook /></a></li>
                <li className='text-white text-2xl p-3 bg-[#393E46] rounded-full'><a href="#"><FiInstagram /></a></li>
                <li className='text-white text-2xl p-3 bg-[#393E46] rounded-full'><a href="#"><FiTwitter /></a></li>
                <li className='text-white text-2xl p-3 bg-[#393E46] rounded-full'><a href="#"><FiYoutube /></a></li>
            </ul>

            <p className='text-white text-lg mt-12 lg:mt-20 text-center lg:text-right'>Terms of Service - Privacy Policy</p>
        </div>
    </section>
  )
}

export default Footer