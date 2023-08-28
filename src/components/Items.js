import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Items = ({items, setItems, toggleShow, setEditKey, nameSize}) => {
    const handleDelete = (key) => {
        const response = window.confirm("Are you sure to delete?");

        if (response) {
            const itemsCopy = [...items];
            itemsCopy.splice(key, 1);
            setItems(itemsCopy);
        }
    };

    const handleEdit = (key) => {
        setEditKey(key);
        toggleShow(true);
    };

    const handleZoomIn = (key) => {
        const itemsCopy = [...items];

        for (let i = 0; i < itemsCopy.length; i++) {
            if (i === key) {
                itemsCopy[key].height = parseInt(itemsCopy[key].height) + 3;
            }
        }

        setItems(itemsCopy);
    };

    const handleZoomOut = (key) => {
        const itemsCopy = [...items];

        for (let i = 0; i < itemsCopy.length; i++) {
            if (i === key) {
                itemsCopy[key].height = parseInt(itemsCopy[key].height) - 3;
            }
        }

        setItems(itemsCopy);
    };

    return (
        <div className="items-container">
            {items.length > 0 && items.map((item, key) => (
                <div key={key} className="item no-caret">
                    <div className="item-inner">
                        <div className="edit-bar text-center">
                            <FontAwesomeIcon className="mr-3 text-muted" icon={['fas', 'circle-minus']} onClick={() => handleZoomOut(key)} />
                            <FontAwesomeIcon className="text-muted" icon={['fas', 'circle-plus']} onClick={() => handleZoomIn(key)} />
                        </div>
                        <div className="item-image">
                            <img alt={`Item ${key}`} src={item.path} style={{height: item.height}} />
                        </div>
                        <div className="item-text mt-2 text-center" style={{fontSize: parseInt(nameSize)}}>{item.name.trim()}</div>
                        <div className="edit-bar-container">
                            <div className="edit-bar text-center">
                                <FontAwesomeIcon className="mr-3 text-danger" icon={['fas', 'trash']} onClick={() => handleDelete(key)} />
                                <FontAwesomeIcon className="text-primary" icon={['fas', 'edit']} onClick={() => handleEdit(key)} />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Items;
