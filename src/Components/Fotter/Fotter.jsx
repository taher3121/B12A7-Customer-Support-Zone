import React from 'react';
import tweteer from '../../assets/fi_5969020.png'
import linkedin from '../../assets/Group (1).png'
import facebook from '../../assets/Vector (4).png'
import mail from '../../assets/Vector (3).png'

const Fotter = () => {
    return (
        <footer className=" bg-black ">
            <div className='flex flex-col  md:flex-row md:justify-between gap-8 mt-5 p-10'>
                <nav className=' max-w-xs flex flex-col gap-2'>
                    <h6 className="text-white">CS — Ticket System</h6>
                    <p className='text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </nav>
                <nav className=' max-w-xs flex flex-col gap-2'>
                    <h6 className="text-white">Company</h6>
                    <a className="link link-hover text-gray-400">About us</a>
                    <a className="link link-hover text-gray-400">Our Mission</a>
                    <a className="link link-hover text-gray-400">Contact Us</a>
                </nav>
                <nav className=' max-w-xs flex flex-col gap-2'>
                    <h6 className=" text-white">Services</h6>
                    <a className="link link-hover text-gray-400">Products & Services</a>
                    <a className="link link-hover text-gray-400">Customer Stories</a>
                    <a className="link link-hover text-gray-400">Download Apps</a>
                </nav>
                <nav className=' max-w-xs flex flex-col gap-2'>
                    <h6 className="text-white">Information</h6>
                    <a className="link link-hover text-gray-400">Privacy Policy</a>
                    <a className="link link-hover text-gray-400">Terms & Conditions</a>
                    <a className="link link-hover text-gray-400">Join Us</a>
                </nav>
                <nav className=' max-w-xs flex flex-col gap-2'>
                    <h6 className="text-white">Social Links</h6>
                    <a className="link link-hover text-gray-400 flex gap-3 items-center "><img src={tweteer} alt="" />@CS — Ticket System</a>
                    <a className="link link-hover text-gray-400 flex gap-3 items-center"> <img src={linkedin} alt="" />@CS — Ticket System</a>
                    <a className="link link-hover text-gray-400 flex gap-3 items-center "><img className='bg-white p-1 rounded-4xl' src={facebook} alt="" />@CS — Ticket System</a>
                    <a className="link link-hover text-gray-400 flex gap-3 items-center "><img src={mail} alt="" />support@cst.com</a>
                </nav>
            </div>
            <div className='border-solid border-t-1 border-gray-400 p-5'>
                <p className='text-white text-center'>© 2025 CS — Ticket System. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Fotter;