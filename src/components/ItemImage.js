import React from "react";
import {capitalizeFirstLetter} from "../utils";

const ItemImage = ({key, imagePath, height = 1, currentItem, setCurrentItem, type = ''}) => {
    const handleClick = () => {
        setCurrentItem({
            path: imagePath,
            height: height,
        });
    };

    let className = "itemImageImage";

    if (currentItem?.path === imagePath) {
        className += " active";
    }

    const title = imagePath.replace('/stick/static/media/', '');
    const titleParts = title.split('.');
    const finalTitle = capitalizeFirstLetter(titleParts[0]);

    return (
        <div>
            <img
                title={finalTitle}
                alt={`Item ${key}`}
                className={className}
                src={imagePath}
                onClick={handleClick}
                style={{
                    height: height - 50,
                }}
            />
            <div style={{fontSize: 10}}>
                {type === 'dog' && finalTitle}
            </div>
        </div>
    );
}

export default ItemImage;
