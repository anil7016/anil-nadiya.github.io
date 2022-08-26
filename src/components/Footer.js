import React from 'react';

const fYear = new Date();

const Footer = () => {
    return(
        <div className="bg-black p-5 b-0">
            <div className="row text-white">
                <div className="col-sm-12 text-center"> All Rights Reserved @ {fYear.getFullYear()} </div>
            </div>
        </div>
    );
}

export default Footer;