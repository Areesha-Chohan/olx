import React from 'react'
import './App.css';

const Cardd = (props) => {

    return (


        <>
            <div className="card">
            <i class="fa fa-heart-o" aria-hidden="true"></i>
                <div className="card_img">

                    <img src={props.cardImg} alt="" />


                </div>

                <div className="card_price">
                  
                    <span>Rs {props.cardPrice}</span>

                </div>
                <div className="card_info">
                    <p>{props.cardTitle}</p>


                </div>




            </div>

        </>
    )


}
export default Cardd
