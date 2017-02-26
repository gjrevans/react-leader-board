import React from 'react';
import CamperItem from './camper_item';


const CamperList = ({ campers }) => {
    const Campers = campers.map((camper, index) => {
        return <CamperItem key={index} rank={index + 1} camper={camper} />
    });
    return (
        <div className='row mt3'>
            {Campers}
        </div>
    );
}

export default CamperList;
