import { createAction } from '@reduxjs/toolkit';

export const addTodo:any = createAction('todo/ADD_TODO');
export const deleteTodo:any = createAction('todo/DEL_TODO')
export const editTodo:any = createAction('todo/EDIT_TODO')
export const changeStatusTodo:any = createAction('todo/CHANGESTATUS_TODO')

