import React from 'react';

const ResolvedList = ({resolved}) => {
    return (
        <div className="card card-dash bg-base-100 w-96">
            <div className="card-body">
                <h2 className="card-title">{resolved.title}</h2>
            </div>
        </div>
    );
};

export default ResolvedList;