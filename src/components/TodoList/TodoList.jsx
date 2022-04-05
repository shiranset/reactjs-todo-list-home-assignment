import React, {useCallback} from 'react';
import ListItem from "./ListItem";
import "./TodoList.css";

//{userId: 1, id: 1, title: "delectus aut autem", completed: false}
const TodoList = ({ items, strikeOutItem}) => {


    return (
        <div className="list" data-testid="list-item">
            {items.map(item => <ListItem key={item.id} item={item} strikeOut={strikeOutItem}/>)}
        </div>
    );
};

export default TodoList;
