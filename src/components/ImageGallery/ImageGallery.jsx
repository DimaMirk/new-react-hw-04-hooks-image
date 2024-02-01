import React from "react";
import ImageGalleryItem from "../ImageGalleryItem";

function ImageGallery({images, imgClick}) {
    return (
        <ul className="ImageGallery">
            {images.map(el => (
                <ImageGalleryItem element={el} key={el.id} onClick={imgClick} />
            ))}
        </ul>
    )
}

export default ImageGallery