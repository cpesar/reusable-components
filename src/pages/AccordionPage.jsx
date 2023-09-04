import React from 'react'
// import { AiFillHdd } from "react-icons/ai";
import Accordion from '../components/Accordion.jsx'



const AccordionPage = () => {

    // const icon = <span className="text-2xl mx-3 text-gray-500"><AiFillHdd /></span>

    const items = [
        {
            id: 1,
            label: 'Earl Weaver',
            content: "My best game plan is to sit on the bench and call out specific instructions like 'C'mon Boog,' 'Get ahold of one, Frank,' or 'Let's go, Brooks.'"
        },
        {
            id: 2,
            label: 'World Series',
            content: 'The Orioles will win the American League east, but because they are young and lack starting pitching depth they might not go very far'
        },
        {
            id: 3,
            label: 'Peter Angelos',
            content: "Can we apply the same argument to the Orioles owner, Peter Angelos? I'm sure he has much more money than Chris Davis will have. I'm sure he could afford an extra $10 million, or whatever. Why does Chris Davis have to be the one making the sacrifice?",
        }
    ];

    return (
        <>
            <h1 className="font-medium text-2xl flex p-3 mx-80 py-10 text-green-700">
                Reusable Accordion
                {/* {icon} */}

            </h1>
            <Accordion items={items} ></Accordion>

        </>

    )
}

export default AccordionPage