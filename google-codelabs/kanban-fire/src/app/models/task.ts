export interface KanbanTask {
    id?: string;
    title: string;
    description: string;
    status: string;
}

export interface TaskDialogData {
    task: Partial<KanbanTask> | null;
    enableDelete: boolean;
  }
  
  export interface TaskDialogResult {
    task: KanbanTask;
    delete?: boolean;
  }