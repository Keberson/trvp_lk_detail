import React from 'react';
import {ReactComponent as DeleteRow} from "../../assets/deleteRow.svg";

interface RowDeleteProps {
    productsLength: number
}

const RowDelete: React.FC<RowDeleteProps> = ({ productsLength }) => {
    return (
        <td rowSpan={productsLength}>
            <button className={"p-0 bg-white border-0 btn-outline"}>
                <DeleteRow />
            </button>
        </td>
    );
}

export default RowDelete;