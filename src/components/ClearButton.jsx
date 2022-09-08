import React from "react"; 
import '../stylesheets/ClearButton.css';

const ClearButton = (props) => (
    <button className="clear-button" onClick={props.clearHandler}>
        {props.children}
    </button>
);

export default ClearButton; 