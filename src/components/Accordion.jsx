import React, { useState } from 'react'
import { AiOutlineCaretDown, AiOutlineCaretLeft } from "react-icons/ai";

const Accordion = ({ items }) => {

    const [activeIndex, setActiveIndex] = useState(-1)
    // Does not have access to the index in the mapping function
    // Define the event handler OUTSIDE of the mapping function
    const handleClick = (nextIndex) => {
        if (activeIndex === nextIndex) {
            setActiveIndex(-1)
        } else {
            setActiveIndex(nextIndex)
        }
    }

    const renderedItems = items.map((item, index) => {
        const isActive = index === activeIndex;
        // console.log(isActive)

        const icon = <span className='text-xl'>{isActive ? <AiOutlineCaretDown /> : <AiOutlineCaretLeft />}</span>

        return (
            <div key={item.id}>
                {/* Need to padd in the index here */}
                <div className="flex p-3 bg-gray-50 border-b items-center cursor-pointer justify-between"
                    onClick={() => handleClick(index)}>
                    {item.label}
                    {icon}
                </div>

                {isActive && <div className="border-b p-5">{item.content}</div>}
            </div>
        )
    })

    return <div className="border-x border-t rounded">{renderedItems}</div>

}

export default Accordion