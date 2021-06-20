export const selectorTodoList = (state, text: string) => {
    return state.todos.list.filter(item => item.edit || item.taskName?.toUpperCase().indexOf(text?.toUpperCase()) > -1)
}