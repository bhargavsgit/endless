import React  from 'react';
import Navbar from '../Navbar/Navbar';
import WhatsNew from '../WhatsNew/WhatsNew';
import HowItWorks from '../HowItWorks.js/HowItWorks';

export default function Dashboard(){
    return(<>
        <Navbar />
        <WhatsNew />
        <HowItWorks />
    </>);
}
