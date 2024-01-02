import React, {JSX} from 'react';
import getClasses from "../../utils/getClasses";

interface ICustomTitleProps {
    children: JSX.Element | string;
    className?: string;
}

const CustomTitle: React.FC<ICustomTitleProps> = ({
    children,
    className
}) => {
    const classes = getClasses(className);

    return (
        <h3
            className={`fw-bolder ${classes}`}
        >
            {children}
        </h3>
    )
}

export default CustomTitle;