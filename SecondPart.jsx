import React from 'react'
import { Button } from 'react-bootstrap'
import './App.css';
import './Cardd.jsx'
import Cardd from './Cardd.jsx';

const SecondPart = () => {

    const data1 = [
        {
            imgg: "https://apollo-singapore.akamaized.net/v1/files/fc7c116ukaet3-PK/image;s=200x400;q=60",
            price: "12,5000",
            title: "7 Marla Overseas block Plot file for sale in Blue World City"


        },
        {
            imgg: "https://apollo-singapore.akamaized.net/v1/files/uwgkkyyh3w1g1-PK/image;s=200x400;q=60",
            price: "2,000,000",
            title: "125 Sq.Yd Plots Bahria Town Karachi "


        },
        {
            imgg: "https://apollo-singapore.akamaized.net/v1/files/k8y5w70r52p22-PK/image;s=200x400;q=60",
            price: "3,500,000",
            title: "Ali Block"


        },
        {
            imgg: "https://apollo-singapore.akamaized.net/v1/files/61zvasnozc203-PK/image;s=200x400;q=60",
            price: "9,200,000",
            title: "Sector A 1 kanal plot    "


        }
    ]

    return (
        <>

            <div className="Second">

                <h3 >More on Land and Plots</h3>

                <div className="Grid">


                    {data1.map((val, index) => {
                        return <Cardd cardImg={val.imgg} cardPrice={val.price} cardTitle={val.title} key={index} />
                    })}

                </div>



            </div>



        </>
    )
}

export default SecondPart