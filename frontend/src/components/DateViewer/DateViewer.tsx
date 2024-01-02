import React from 'react';

interface IDateViewerProps {
    currentDate: Date;
}

const DateViewer: React.FC<IDateViewerProps> = ({ currentDate }) => {
    const dateToView: string = currentDate.toLocaleDateString('ru')

    return (
        <p className={"p-2 align-items-center border rounded-3"}>
            {dateToView}
        </p>
    );
}

export default DateViewer;