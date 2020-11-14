import React from 'react'
import Card2 from './Card2'
import Cardd from './Cardd.jsx'
import capture from './images/Capture.PNG'


const ThirdPart = () => {

    const data2 = [
        {
            imgg: "https://apollo-singapore.akamaized.net/v1/files/lfk0fkxoloqj2-PK/image;s=200x400;q=60",
            price: "4,500",
            title: "hiroof speaker and buffar petti new like "


        },
        {
            imgg: "https://apollo-singapore.akamaized.net/v1/files/3l27e4m3njh51-PK/image;s=200x400;q=60",
            price: "3,200",
            title: "Exhaust Fan "


        },
        {
            imgg: "https://apollo-singapore.akamaized.net/v1/files/3vz8nuni06ev1-PK/image;s=200x400;q=60",
            price: "95,000",
            title: "Toyota starlet"


        },
        {
            imgg: "https://apollo-singapore.akamaized.net/v1/files/4s8ocbtosz0x1-PK/image;s=200x400;q=60",
            price: "38,000,000",
            title: "Urgent Sale, INVESTMENT DEAL "


        },
        {
            imgg: "https://apollo-singapore.akamaized.net/v1/files/p1xhayhkmlum1-PK/image;s=200x400;q=60",
            price: "800",
            title: "Purse"


        },
        {
            imgg: "https://apollo-singapore.akamaized.net/v1/files/bszvsk85m21p-PK/image;s=200x400;q=60",
            price: "12,000",
            title: "APC UPS 1500va, 1KVA TO 100KVA / ڑرائی بیٹری "


        },
        {
            imgg: "https://apollo-singapore.akamaized.net/v1/files/cydbdzjaaoi41-PK/image;s=200x400;q=60",
            price: "500,000",
            title: "Nissan Juke 2013 corporate Automobile pvt ltd"


        },
        {
            imgg: "https://apollo-singapore.akamaized.net/v1/files/rjqw8yr86wx-PK/image;s=200x400;q=60",
            price: "11,000  ",
            title: "Huawei Dig-L21"


        },
        {
            imgg: "https://apollo-singapore.akamaized.net/v1/files/ht7l2hfji66r2-PK/image;s=200x400;q=60",
            price: "65,000",
            title: "Apple macbook pro and air 2015 ,2017 15 inches i7, 500Gb, 16GB"


        },
        {
            imgg: "https://apollo-singapore.akamaized.net/v1/files/za2t037uikjj-PK/image;s=200x400;q=60",
            price: "36,399",
            title: "Xiaomi Redmi Note9S (6~128) Box Pack  "


        },
        {
            imgg: "https://apollo-singapore.akamaized.net/v1/files/f37l1wrfmb3j2-PK/image;s=200x400;q=60",
            price: "1,650",
            title: "Kitsound Race sports Bluetooth handsfree "


        },
        {
            imgg: "https://apollo-singapore.akamaized.net/v1/files/jft4rzwmssh72-PK/image;s=200x400;q=60",
            price: "80,000",
            title: "10 Marla house available for rent brand new first entry "


        },
        {
            imgg: "https://apollo-singapore.akamaized.net/v1/files/61zvasnozc203-PK/image;s=200x400;q=60",
            price: "9,200,000",
            title: "Sector 1-A Kanal Plot "


        },
        {
            imgg: "https://apollo-singapore.akamaized.net/v1/files/zi3sq0cnuv0g2-PK/image;s=200x400;q=60",
            price: "850",
            title: "Customized Wooden Diary/Notebook with name and Picture    "


        },
        {
            imgg: "https://apollo-singapore.akamaized.net/v1/files/sdleihazjdbf1-PK/image;s=200x400;q=60",
            price: "350",
            title: "velo wireless charger for all samrt phones     "


        },
        {
            imgg: "https://apollo-singapore.akamaized.net/v1/files/d86yblsyhynp1-PK/image;s=200x400;q=60",
            price: "14,500",
            title: "Oneplus 3t 6gb 64gb read full ad first "


        }

    ]


    return (
        <>

            <div className="third">

                <h3 >Fresh recommendations</h3>

                <div className="Grid">


                    {data2.map((val, index) => {
                        return <Cardd cardImg={val.imgg} cardPrice={val.price} cardTitle={val.title} key={index} />
                    })}

                </div>



            </div>

            <div className="thirdimg">

                <img src={capture} alt="" />
            </div>


        </>
    )

}

export default ThirdPart