export interface ITask {
    taskName: string;
    deadline?: number;
    key: string;   
    edit: boolean;
}

export interface IInput {
    event: any,
    key: string
}
