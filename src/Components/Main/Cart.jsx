import React from 'react';
import vector2 from '../../assets/Vector (2).png'
const cart = ({ customer,getCart }) => {
    // console.log(customer)
    return (
        <div className="bg-base-100 card-xs shadow-sm min-h-[148px] min-w-[513px]" onClick={()=> getCart(customer)}>
            <div className="px-4 py-3">
                <div className='flex items-center justify-between mb-1'>
                    <h2 className="card-title">{customer.title}</h2>
                    <div className={`px-4 py-1 ${customer.status === 'Open' ? 'bg-green-200 text-green-800': 'bg-yellow-200 text-yellow-500'} rounded-2xl flex items-center gap-1.5`}>
                        <span className={`w-4 h-4 ${customer.status=== 'Open'? 'bg-green-700': 'bg-amber-400'} rounded-4xl`}></span>
                        <p>{customer.status}</p>
                    </div>

                </div>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className='flex justify-between mt-3 items-center'>
                    <div className='flex gap-5'>
                        <p>{customer.id}</p>
                        <p>{customer.priority}</p>
                    </div>
                    <div className='flex gap-3'>
                        <p>{customer.customer}</p>
                        <img src={vector2} alt="" />
                        <p>{customer.createdAt}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default cart;