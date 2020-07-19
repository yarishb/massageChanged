import React, { useState } from 'react'
import '../../pages/Pricing/pricing.css'



const CreateTable = (props) => {
    const [state, setState] = useState(false)
        return(
            <>
                <div className="fpage" >
                    <div className="firstMassage" onClick={() => {setState(true)}} onMouseOver={(event) => {event.target.transition = ".2s"}}>
                    <img alt="img" src={props.image} className="imgBuy"/>
                    <div className="info">
                    <div className="buyHeading">
                    {props.title}
                    </div>
                    <div className="buyDesk">
                        {props.description}
                    </div>
                    <div className="buyIncludes">
                    {props.includes}
                    </div>
                        <div className="priceAfter">
                        {props.price}
                        </div>
                        <div className="prcAbsolute">
                            {props.priceBefore}
                        </div>
                        <div className="time">
                            {props.time}
                        </div>
                        <div className="pricePS">
                            В ціну входить доїзд до клієнта (Самбірський район)
                        </div>
                    </div>
                    </div>
                </div>
       </> 
        )
    }

export  default CreateTable