import React from 'react';

interface DateViewerProps {
    currentDate: string;
}

const DateViewer: React.FC<DateViewerProps> = ({ currentDate }) => {
    return (
        <p className={"p-2 align-items-center border rounded-3"}>
            {currentDate}
        </p>
    );
}

export default DateViewer;