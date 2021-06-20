import { createSlice } from '@reduxjs/toolkit'
import todoReducer from './todoReducer'
import {ITask} from '../../components/interface' 

interface TodoState {
    list: ITask[]
}

const initialState: TodoState = {
    list: []
}

const todoSlide:any = createSlice({
    name: 'todo',
    initialState,
    reducers: {},
    extraReducers: todoReducer
})

export default todoSlide
