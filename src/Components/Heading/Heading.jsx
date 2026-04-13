import React from 'react';
import vector1 from '../../assets/vector1.png'
const Heading = () => {
    return (
        <div className='max-w-[1440px] mx-auto flex justify-between mt-10 flex-col md:flex-row gap-3'>
            <div className="relative min-w-[50%] min-h-[250px] flex items-center justify-center overflow-hidden
                bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
                <img
                    src={vector1}
                    className="absolute left-0 top-0 w-80 "
                />
                <img
                    src={vector1}
                    className="absolute right-0 top-0 w-80  scale-x-[-1]"
                />
                <div className="relative text-white text-center">
                    <span>In Progress</span>
                    <span className="block text-2xl font-bold">0</span>
                </div>

            </div>
            <div className="relative min-w-[50%] min-h-[250px] flex items-center justify-center overflow-hidden
                bg-gradient-to-r from-[#54CF68] to-[#00827A]">
                <img
                    src={vector1}
                    className="absolute left-0 top-0 w-80 "
                />
                <img
                    src={vector1}
                    className="absolute right-0 top-0 w-80  scale-x-[-1]"
                />
                <div className="relative text-white text-center">
                    <span>Resolved</span>
                    <span className="block text-2xl font-bold">0</span>
                </div>

            </div>

        </div>
    );
};

export default Heading;