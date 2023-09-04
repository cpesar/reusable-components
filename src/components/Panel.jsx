import React from 'react'
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

// Recive props from the parent component
const Panel = ({ children, className, ...rest }) => {
    const finalClassNames = classNames(
        'border rounded p-3 shadow bg-white w-full',
        className
    )
    return (
        <div {...rest} className={finalClassNames}>{children}</div>
    )
}

export default Panel