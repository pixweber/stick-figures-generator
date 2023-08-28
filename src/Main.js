import React, {useState, useCallback, useRef, useEffect} from 'react';
import * as htmlToImage from "html-to-image";
import {getDateTime} from "./utils";
import {ADD_NEW_ITEM_KEY} from "./constants/shortcuts";
import useEventListener from "./hooks/useEventListener";
import {Button, Form} from 'react-bootstrap';
import ItemModal from "./components/ItemModal";
import Items from "./components/Items";

const Main = () => {
    const [title, setTitle] = useState('Notre famille adorée');
    const [titleSize, setTitleSize] = useState(95);
    const [nameSize, setNameSize] = useState(37);
    const [titleFont, setTitleFront] = useState("'Style Script', cursive");
    const [items, setItems] = useState([]);
    const [show, toggleShow] = useState(false);
    const [mode, setMode] = useState('add');
    const [editKey, setEditKey] = useState(null);

    const domEl = useRef(null);
    const downloadImage = async () => {
        const dataUrl = await htmlToImage.toPng(domEl.current, {pixelRatio: 3});

        // download image
        const link = document.createElement('a');
        link.download = `stick-${getDateTime()}.png`;
        link.href = dataUrl;
        link.click();
    };


    useEffect(() => {
        setMode(editKey !== null ? 'edit': 'add');
    }, [editKey]);

    const handleKeydown = useCallback((event) => {
        // Open modal on 'n' key pressed
        if (event.key === ADD_NEW_ITEM_KEY) {
            toggleShow(true);
        }
    },[]);

    // Add event listener using our hook
    useEventListener('keydown', handleKeydown);

    return (
        <div className="container mt-5">
            <Form>
                <div className="row">
                    <div className="col-3">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="no-caret"><b>Enter a title</b></Form.Label>
                            <Form.Control
                                type="text"
                                value={title}
                                placeholder="Enter a name"
                                onChange={(event) => {setTitle(event.target.value)}}
                            />
                        </Form.Group>
                    </div>
                    <div className="col-2">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="no-caret"><b>Title size</b></Form.Label>
                            <Form.Control
                                tabIndex="0"
                                type="number"
                                value={titleSize}
                                placeholder="Set title size"
                                onChange={(event) => {setTitleSize(event.target.value)}}
                            />
                        </Form.Group>
                    </div>
                    <div className="col-2">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="no-caret"><b>Name size</b></Form.Label>
                            <Form.Control
                                tabIndex="0"
                                type="number"
                                value={nameSize}
                                placeholder="Set name size"
                                onChange={(event) => {setNameSize(event.target.value)}}
                            />
                        </Form.Group>
                    </div>
                    <div className="col-3">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1"><strong>Select a font</strong></label>
                            <select className="form-control" id="exampleFormControlSelect1" onChange={(event) => {
                                setTitleFront(event.target.value);
                            }}>
                                <option value="'Style Script', cursive">Style Script</option>
                                <option value="'Kaushan Script', cursive">Kaushan Script</option>
                                <option value="'Nanum Pen Script', cursive">Nanum Pen Script</option>
                                <option value="'Merriweather', serif">Merriweather</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-2 text-right pt-4 mt-1">
                        <Button className="btn-block btn-success" onClick={downloadImage}>Save</Button>
                    </div>
                </div>

                <hr />

                <div className="row" id="domEl" ref={domEl}>
                    <div className="col-12">
                        <h1 className="title text-center no-caret" style={{
                            fontSize: parseInt(titleSize),
                            fontFamily: titleFont
                        }}>{title} </h1>
                        <div>
                            <Items items={items} setItems={setItems} toggleShow={toggleShow} setEditKey={setEditKey} nameSize={nameSize} />
                        </div>
                    </div>
                </div>

                <div className="mt-2">
                    <hr />

                    <Button onClick={() => toggleShow(true)} className="btn-block me-2 add-new-item">
                        Add new item
                    </Button>

                </div>

                <ItemModal
                    mode={mode}
                    editKey={editKey}
                    setEditKey={setEditKey}
                    show={show}
                    toggleShow={toggleShow}
                    items={items}
                    setItems={setItems}
                />
            </Form>

        </div>
    );
}

export default Main;
