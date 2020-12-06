export interface ITask {
    number: string;
    name: string;
    taskId: string;
    taskCategory: string;
    groupCategory: string;
    durationSumInMillisecondsMap: {[dayGetTime: number]: object};
    _bookingDeclarationId: string;
    _projectId?: string;
}
