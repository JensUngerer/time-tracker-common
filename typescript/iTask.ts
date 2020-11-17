export interface ITask {
    number: string;
    name: string;
    taskId: string;
    taskCategory: string;
    groupCategory: string;
    durationSumInMilliseconds: number;
    _bookingDeclarationId: string;
    _projectId?: string;
}
