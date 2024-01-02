import React, {JSX} from 'react';

interface CustomTitleProps {
    children: JSX.Element | string;
    className?: string;
}

const CustomTitle: React.FC<CustomTitleProps> = ({
    children,
    className
}) => {
    const classes = className !== undefined ? " " + className : "";

    return (
        <h3
            className={"fw-bolder" + classes}
        >
            {children}
        </h3>
    )
}

export default CustomTitle;