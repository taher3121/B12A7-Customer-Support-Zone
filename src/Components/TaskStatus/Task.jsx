import React from 'react';

const Task = ({cart,resolved}) => {
    // console.log(cart)
    // console.log(cart)
    return (
        <div className="card card-dash bg-base-100 w-96">
            <div className="card-body">
                <h2 className="card-title">{cart.title}</h2>
                <button className="btn bg-green-600 text-white text-[15px]" onClick={()=>resolved(cart)}>Complete</button>
            </div>
        </div>
    );
};

export default Task;