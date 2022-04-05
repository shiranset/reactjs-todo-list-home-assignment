import React from 'react';
import "./ListItem.css";
import {completeItem} from "../util/todo.util";
const ListItem = ({ item, strikeOut, deleteItem }) => {

    // const handleClick = (event, value) => {
    //
    //     event.stopPropagation();
    //
    //     // In that case, event.ctrlKey does the trick.
    //     if (event.ctrlKey) {
    //         console.debug("Ctrl+click has just happened!");
    //         deleteItem(item.id);
    //     }
    //
    //     strikeOut(item)
    // };

    return (
        <button className={`list-item ${item.completed ? "done" : ""}`} data-testid="list-item" onClick={() => strikeOut(completeItem(item))}>
            {item.title}
        </button>
    );
};

export default ListItem;
