import { use } from 'react';
import Cart from './cart';
import Task from '../TaskStatus/Task';


const Main = ({ loadData, getCart, cart }) => {
    const getData = use(loadData);
    // console.log(getData)
    // console.log(cart)
    return (
        <div className='max-w-[1440px] mx-auto grid grid-cols-4 border-2 border-solid border-red-400 gap-4'>
            <div className='col-span-3'>
                <p>Customer Tickets</p>
                <div className='grid grid-cols-2 gap-4'>
                    {
                        getData.map(customer => <Cart customer={customer} getCart={getCart} key={customer.id}></Cart>)
                    }

                </div>

            </div>
            <div className='col-span-1'>
                <div>
                    <p>Task Status</p>
                    <div>
                        {
                            cart.length === 0 ? <p>Select a ticket to add to Task Status</p> : cart.map(cart=><Task cart={cart} key={cart.id}></Task>)
                        }
                    </div>
                </div>
                <p>Resolved Task</p>
            </div>
        </div>
    );
};

export default Main;