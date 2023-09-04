import React, { useState, useEffect, useRef } from 'react'
import Panel from './Panel';
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Dropdown = ({ options, onChange, value }) => {
    const [isOpen, setIsOpen] = useState(false)
    const divEl = useRef()

    useEffect(() => {
        const handleOutsideClick = (event) => {
            // console.log(divEl.current)
            if (!divEl.current) {
                return
            }
            if (!divEl.current.contains(event.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('click', handleOutsideClick, true)

        return () => {
            document.removeEventListener('click', handleOutsideClick)
        }
    }, [])

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const handleOptionClick = (option) => {
        setIsOpen(false)
        // console.log(option)
        onChange(option)
    }

    const icon = <span className='text-lg'>{isOpen ? <GoChevronDown /> : <GoChevronLeft />}</span>

    const renderedOptions = options.map((option) => {
        return (
            <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleOptionClick(option)} key={option.value}>
                {option.label}
            </div>
        )
    })


    return (
        <div ref={divEl} className="w-48 relative">
            <Panel
                onClick={handleClick}
                className="flex justify-between items-center cursor-pointer">
                {value?.label || 'Select...'}
                {icon}
            </Panel>
            {isOpen && (
                <Panel className="absolute top-full">{renderedOptions}
                </Panel>
            )}
        </div>
    )
}

export default Dropdown