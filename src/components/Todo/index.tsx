import React from 'react';
import {ITask} from '../interface'
import { nanoid } from '@reduxjs/toolkit';
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { addTodo, deleteTodo, changeStatusTodo, editTodo } from '../../features/todo/todoAction';
import TodoItem from './TodoItem';
import { selectorTodoList } from '../../features/todo/todoSelector'


const Todo:React.FC = () => {
    const dispatch = useAppDispatch();
    const task = React.useRef<HTMLInputElement>(null);
    const deadline = React.useRef<HTMLInputElement>(null);
    const [searchText, setSearchText] = React.useState("");
    const data = useAppSelector(state => selectorTodoList(state, searchText))

    const addTaskBtn = () => {
        const Obj = {
            taskName: task.current?.value,
            deadline: deadline.current?.value, 
            edit: false,
            key: nanoid()
        }
        dispatch(addTodo(Obj))
    }

    const deleteItem = (key: string) => {
        dispatch(deleteTodo(key))        
    }

    const changeStatus = (key: string) => {        
        dispatch(changeStatusTodo(key))
    }

    const onChangeText = (key: string, event: any ) => {       
        dispatch(editTodo({ key, event }))
    }

    const onChangeSearch = (value: string) => {
        setSearchText(value)
    }
    
    return (
        <>
            <div className="header">
                <h3>Todo Form</h3>
                <div className="headerContainer">
                    <div className="inputContainer">
                        <input type="text" name="task" placeholder="Task..." ref={task} />
                        <input type="number" name="deadline" placeholder="Deadline (in Days)..." ref={deadline} />  
                    </div>
                    <button onClick={addTaskBtn}>Add Task</button>
                </div>
            </div>
            <div className="todoList">
                <h3>Todo List ({data.length})</h3>
                <div className="search">
                    <input type="text" placeholder="Search Text ..." onChange={(event) => onChangeSearch(event.target.value)} />
                </div>
                {data.map((task: ITask, key: number) => {
                    return <TodoItem 
                        key={key} 
                        task={task} 
                        deleteItem={deleteItem} 
                        changeStatus={changeStatus}
                        onChangeText={onChangeText}
                    />
                })}
            </div>
        </>
    )
}

export default Todo;