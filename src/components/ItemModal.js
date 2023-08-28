import {Button, Form, Modal} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import Images from "./Images";

const ItemModal = ({mode, show, toggleShow, items, setItems, editKey, setEditKey}) => {
    const [currentItem, setCurrentItem] = useState(null);
    const [name, setName] = useState('');

    useEffect(() => {
        if (editKey !== null) {
            const list = [...items];
            setCurrentItem(list[editKey]);
            setName(list[editKey].name);
        }
    }, [editKey, items]);

    const handleAddEditItem = () => {
        const list = [...items];

        if (!currentItem) {
            alert('Please choose an icon and type a name');
            return;
        }

        currentItem.name = name;

        if (!currentItem.path) {
            alert('Please choose an icon');
            return;
        }

        if (!currentItem.name) {
            alert('Please type a name');
            return;
        }

        if (editKey !== null) {
            list[editKey] = currentItem;
        } else {
            list.push(currentItem);
        }

        setItems(list);

        // Close modal
        if (!name) {
            alert('Please enter a name');
        } else {
            toggleShow(false);
        }

        // Reset name
        setName('');
        setCurrentItem(null);
        setEditKey(null);
    };

    return (
        <Modal
            size="lg"
            show={show}
            onHide={() => toggleShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    {mode === 'add' ? 'Add new item' : 'Edit a character'}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Images items={items} setItems={items} currentItem={currentItem} setCurrentItem={setCurrentItem} />
            </Modal.Body>
            <Modal.Footer>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter a name</Form.Label>
                    <Form.Control type="text" placeholder="Enter a name"
                        value={name}
                        onChange={(event) => {setName(event.target.value)}}
                        onKeyPress={(event) => {
                            if ( event.key === 'Enter' ) {
                                handleAddEditItem();
                            }
                        }}
                    />
                    <Form.Text className="text-muted">
                        Name will be shown under the character
                    </Form.Text>
                </Form.Group>
                <Button onClick={handleAddEditItem}>{mode === 'add' ? 'Add item': 'Update item'}</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ItemModal;
