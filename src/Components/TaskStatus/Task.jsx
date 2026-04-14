import React from 'react';

const Task = ({cart}) => {
    // console.log(cart)
    // console.log(cart)
    return (
        <div className="card card-dash bg-base-100 w-96">
            <div className="card-body">
                <h2 className="card-title">{cart.title}</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Task;