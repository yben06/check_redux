import React, { useState } from 'react';
import { Card, Form, FormControl, InputGroup, Button } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { addTask, toggle } from '../Js/Actions/ActionsTask';


function AddItem() {
    const [myInput, setMyInput] = useState("");
    const dispatch = useDispatch();

    const add = () => {
        if (myInput) {
            dispatch(addTask({ text: myInput, isDone: false, id: Date.now() }));
            setMyInput("");
        } else alert('erreur');
    };

    return (
        <Card bg="primary">
            <Card.Body>
                <h1 className={"text-white"}>To-Do-App !</h1>
                <Form>
                    <Form.Group>
                        <InputGroup className="mb-3">
                            <FormControl
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                onChange={(e) => setMyInput(e.target.value)}
                                value={myInput} />
                            <Button variant="success" onClick={add}>
                                +
                            </Button>        
                        </InputGroup>
                    </Form.Group>
                </Form>
                <Button variant="info" className="mr-3" onClick={() => dispatch(toggle())}>
                    hide
                </Button>
            </Card.Body>
        </Card>
    );
}

export default AddItem;