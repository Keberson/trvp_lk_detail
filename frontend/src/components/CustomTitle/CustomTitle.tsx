import React, {ReactNode} from 'react';
import getClasses from "../../utils/getClasses";

interface CustomTitleProps {
    children: ReactNode | string;
    className?: string;
}

const CustomTitle: React.FC<CustomTitleProps> = ({ children,  className}) => {
    const classes = getClasses(className);

    return (
        <h3 className={`fw-bolder ${classes}`}>
            {children}
        </h3>
    )
}

export default CustomTitle;