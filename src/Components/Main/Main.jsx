import { use } from 'react';
import Cart from './cart';
import Task from '../TaskStatus/Task';


const Main = ({ loadData, getCart, cart, resolved,}) => {
    const getData = use(loadData);
    // console.log(getData)
    // console.log(cart)
    return (
        <div className='max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 mt-14'>
            <div className=' col-span-1 md:col-span-3'>
                <p className='text-2xl text-gray-800 font-medium'>Customer Tickets</p>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-1'>
                    {
                        getData.map(customer => <Cart customer={customer} getCart={getCart} key={customer.id}></Cart>)
                    }

                </div>

            </div>
            <div className='col-span-1'>
                <div>
                    <p className='text-xl text-gray-800 mb-2'>Task Status</p>
                    <div className='mb-7'>
                        {
                            cart.length === 0 ? <p className='text-gray-600'>Select a ticket to add to Task Status</p> : cart.map(cart=><Task cart={cart} key={cart.id} resolved={resolved}></Task>)
                        }
                    </div>
                </div>
                <div>
                    <p className='text-xl text-gray-800 mb-2'>Resolved Task</p>
                    {/* {
                        resolvedList.length === 0 ? <p className='text-gray-600'>No Resolved tasks yet.</p> : resolvedList.map(resolved=> <ResolvedList resolved={resolved} key={resolved.id}></ResolvedList>)
                    } */}
                </div>
            </div>
        </div>
    );
};

export default Main;