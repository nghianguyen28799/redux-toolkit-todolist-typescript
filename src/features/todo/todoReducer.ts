import { PayloadAction } from '@reduxjs/toolkit'
import { ITask } from '../../components/interface'
import {
    addTodo,
    deleteTodo,
    editTodo,
    changeStatusTodo
} from './todoAction';

const todoReducer = {
    [addTodo]: (state, action: PayloadAction<ITask>) => {
        return {
            ...state,
            list: state.list.concat(action.payload)
        }
    },

    [deleteTodo]: (state, action: PayloadAction<string>) => {        
        return {
            ...state,
            list: state.list.filter(item => item.key !== action.payload)
        }
    },

    [deleteTodo]: (state, action: PayloadAction<string>) => {        
        return {
            ...state,
            list: state.list.filter(item => item.key !== action.payload)
        }
    },

    [changeStatusTodo] : (state, action: PayloadAction<string>) => {
        var dataOfChangeStatus: string [] = [];
        state.list.map((item) => {
            dataOfChangeStatus.push(item.key !== action.payload ? item : {...item, edit: !item.edit})
            return 0;
        })
        return { list: dataOfChangeStatus }
        
    },

    [editTodo] : (state, action) => {
        let data: string [] = [];
        const { event } = action.payload
        state.list.map((item) => {
            data.push(item.key !== action.payload.key ? item : event.target.name === "task" ? {...item, taskName: event.target.value} : {...item, deadline: event.target.value})
            return 0;
        })
        return {list: data}
    }

}

export default todoReducer
