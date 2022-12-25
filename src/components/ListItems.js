import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ListGroup, Button } from "react-bootstrap";
import { deleteTask, doneTask } from "../Js/Actions/ActionsTask";
import EditItem from "./EditItem";
import '.././App.css';

const ListItems = () => {
    const list = useSelector((state) => state.reducerTask.list);
    const show = useSelector((state) => state.reducerTask.show);
    const dispatch = useDispatch();
  
    return (
        <ListGroup>
            {
                (show ? list.filter((el) => el.isDone === true) : list)
                .map( (item,i) => (

                    <ListGroup.Item key={i} style={{ display: "flex", alignItems: "flex-end" }} >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "flex-end",
                                justifyContent: "space-around",
                                idth: "30%",
                            }}
                        >
                            <Button
                               variant="outline-secondary"
                               onClick={() => dispatch(doneTask(item.id))}
                            >
                                { item.isDone? "unDone" : "isDone" }
                            </Button>
                            <EditItem item={ item } />
                            <Button
                                variant="danger"
                                onClick={() => dispatch(deleteTask(item.id))}
                            >
                                Delete
                            </Button>
                        </div>
  
                        <p style= {{margin: "7px"}}  className={ item.isDone? "decoration" : "" } >
                            {item.text}
                        </p>
          
                    </ListGroup.Item>
                ))
            }
        </ListGroup>
    );
};
  
export default ListItems;