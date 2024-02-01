
import React from "react";

function ImageGalleryItem({element, onClick}) {
    return (
        <li className="ImageGalleryItem" onClick={()=>{onClick(element.id)}}>
            <img  src={element.webformatURL}  alt="" />
        </li>
    )
}

export default ImageGalleryItem;