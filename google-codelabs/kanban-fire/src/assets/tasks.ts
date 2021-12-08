import { KanbanTask } from "src/app/models/task";

export const tasks: KanbanTask[] = [
    {
        title: 'Create a producitvity app',
        description: 'Create a kanban appo to let us track tasks',
        status: 'BACKLOG'
    },
    {
        title: 'Buy milk',
        description: 'Buy milk from the shop',
        status: 'BACKLOG'
    },
    {
        title: 'Learn Angular',
        description: 'I should learn angular to develop UI',
        status: 'IN_PROGRESS'
    }
]