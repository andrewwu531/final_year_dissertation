import React from 'react';
import { useLocation } from 'react-router-dom';


const Not_Found = () => (
    <div>
        not_found.js
        <Not_Found_Fun />

    </div>
)


function Not_Found_Fun() {

    const location = useLocation()
    console.log(location.pathname);
    return <span>Path : {location.pathname}</span>
}


export default Not_Found; 