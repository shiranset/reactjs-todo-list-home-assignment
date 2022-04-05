import React from 'react';
import TodoList from "../TodoList/TodoList";
import Loader from "../Loader/Loader";
import "./Home.css";
import {useMutation, useQuery} from "react-query";
import {getTodos, updateTodo} from "../../api";
import {completeItem} from "../util/todo.util";

const Home = () => {
    const { data: itemList, isLoading } = useQuery(['todos'], getTodos);
    const updateMutation = useMutation((todoId,updated) => {
        return updateTodo({todoId: todoId , update: updated});
    });

    const deleteMutation = useMutation((todoId) => {
        return deleteTodo({todoId});
    });

    const strikeOutItem = (item) => {
        updateMutation.mutate(item.id, completeItem(item));
    };

    const deleteItem = (item) => {
        deleteMutation.mutate(item.id);
    };

    return (
        <div className="home">
            <div className="title">My list</div>
            <div className="list-container">
                {isLoading ? (<Loader />) : <TodoList items={itemList} strikeOutItem={strikeOutItem}/>}
            </div>
        </div>
    );
};

export default Home;
