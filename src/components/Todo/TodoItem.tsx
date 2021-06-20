import React from 'react';
import {ITask} from '../interface'

interface Props {
    task: ITask;
    deleteItem(keyToDelete: string): void;
    onChangeText(keyToEdit: string, event: any): void;
    changeStatus(keyToChangeStatusEdit: string): void
}

const TodoItem = ({ task, deleteItem, changeStatus, onChangeText }: Props) => {
    return (
        <div className="task">
            <div className="content">
                {
                    task.edit
                    ? <>
                        <span><input type="text" name="task" placeholder="Task..." defaultValue={task.taskName} onChange={(event) => onChangeText(task.key, event)}/></span>
                        <span><input type="number" name="deadline" placeholder="Deadline (in Days)..." defaultValue={task.deadline} onChange={(event) => onChangeText(task.key, event)}/></span>
                        <button onClick={() => changeStatus(task.key)}>
                            Ok
                        </button>
                    </>
                    : <>
                        <span>{task.taskName}</span>
                        <span>{task.deadline}</span>
                        <button onClick={() => deleteItem(task.key)}>
                            X
                        </button>
                        <button onClick={() => changeStatus(task.key)}>
                            edit
                        </button>
                    </>
                }
                
            </div>
        </div>
    )
}

export default TodoItem