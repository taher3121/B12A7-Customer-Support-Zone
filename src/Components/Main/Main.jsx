import { use } from 'react';
import Cart from './cart';


const Main = ({ loadData }) => {
    const getData = use(loadData);
    console.log(getData)
    return (
        <div className='max-w-[1440px] mx-auto grid grid-cols-4 border-2 border-solid border-red-400 gap-4'>
            <div className='col-span-3'>
                <p>Customer Tickets</p>
                <div className='grid grid-cols-2 gap-4'>
                    {
                        getData.map(customer => <Cart customer={customer}></Cart>)
                    }

                </div>

            </div>
            <div className='col-span-1'>
                <p>Task Status</p>
                <p>Resolved Task</p>
            </div>
        </div>
    );
};

export default Main;