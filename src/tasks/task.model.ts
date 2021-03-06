/*eslint-disable */
export interface Task {
    id: string | number,
    title: string,
    description: string,
    status: TaskStatus

}

export enum  TaskStatus {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE'
}