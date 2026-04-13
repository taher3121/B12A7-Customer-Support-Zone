import React from 'react';
import plusIcon from '../../assets/plus.png'
const Navbar = () => {
    return (
        <div class="navbar bg-base-100 shadow-sm mx-auto px-8">
            <div class="flex-1">
                <a class="btn btn-ghost text-xl">CS — Ticket System</a>
            </div>
            <div class="flex">
                <ul class="flex items-center justify-center gap-4">
                    <li><a>Home</a></li>
                    <li><a>FAQ</a></li>
                    <li><a>Changelog</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Download</a></li>
                    <li><a>Contact</a></li>
                    <button class="btn bg-linear-to-r from-[#422AD5] to-blue-500 text-white"><img src={plusIcon} alt="" />Primary</button>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;