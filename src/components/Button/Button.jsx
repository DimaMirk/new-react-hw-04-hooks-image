import React from "react";

function Button({ onClick }) {
    return (
        <div className="ButtonBlock">
            <button className="Button" onClick={onClick}>Load More</button>
        </div>
    )
}
export default Button;