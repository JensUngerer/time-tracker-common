export interface ITask {
    number: string;
    name: string;
    taskId: string;
    taskCategory: string;
    groupCategory: string;
    _bookingDeclarationId: string;
    _projectId?: string;
}
