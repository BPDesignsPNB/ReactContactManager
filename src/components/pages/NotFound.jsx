import React from 'react';
import notFound from '../../assets/404d.png';
const NotFound = () => {
    return (
        <div>
            <h1 className="mt-2 display-1 text-center text-white">Oops...</h1>
            <h1 className="mt-1 display-5 text-center text-light">This page could not be found...</h1>
            <img className="notFound" src={notFound} alt="404"/>
        </div>
    );
};

export default NotFound;