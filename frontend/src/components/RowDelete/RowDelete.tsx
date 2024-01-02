import React from 'react';
import { ReactComponent as DeleteRow } from "../../assets/deleteRow.svg";

const RowDelete = () => {
    return (
        <button style={{ padding: 0, background: "#FFF", outline: "none", border: "none", cursor: "pointer" }}>
            <DeleteRow />
        </button>
    );
}

export default RowDelete;