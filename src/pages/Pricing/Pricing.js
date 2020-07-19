import React, { useState } from 'react';
import './pricing.css'
import Navbar from '../../components/navBar/Navbar'
import CreateTable from "../../components/table/Table"
import pricingTerm from './pricingTerms' 
import ModalWindow from '../../components/modalWindow/modalWindow';

 function entryPricing(pricingOne){
    return (<CreateTable 
        key={pricingOne.id}
        title={pricingOne.title}
        description={pricingOne.description}
        includes={pricingOne.includes}
        priceBefore={pricingOne.priceBefore}
        price={pricingOne.price}
        image={pricingOne.image}
        time={pricingOne.time}
    />
    )}
function Pricing() {
    const [state, setState] = useState(false)

    return (
        <>
            <Navbar/>
            <ModalWindow isOpen={state} isClose={() => {setState(false)}}/>
           <div onClick={() => setState(true)}>{pricingTerm.map(entryPricing)}</div>
        </>
    );
}

export default Pricing;