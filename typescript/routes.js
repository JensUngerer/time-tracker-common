// https://stackoverflow.com/questions/41219542/how-to-import-js-modules-into-typescript-file
// https://stackoverflow.com/questions/44817349/how-to-include-external-js-file-in-angular-4-and-call-function-from-angular-to-j
// https://stackoverflow.com/questions/25574826/how-to-requiremodule-in-mongo-shell
var routes = {
    viewsPrefix: 'view/',

    url: 'mongodb://localhost:27021',
    port: 3000,
    databaseName: 'timeTracker',

    collectionNamePropertyName: 'propertyName',

    bookingDeclarationsCollectionName: 'booking-declarations',
    bookingDeclarationProperty: 'bookingDeclaration',
    bookingDeclaration: '/NodeJS/bookingDeclaration',
    bookingDeclarationsByProjectIdSuffix: '/bookingDeclarationProjectId',
    bookingDeclarationProjectIdsProperty: '_projectIds',
    bookingDeclarationBookingDeclarationIdProperty: 'bookingDeclarationId',

    commitTimeRecordsCollectionName: 'commit-time-records',

    timeRecordsCollectionName: 'book-time-records',
    timeRecordBodyProperty: 'timeRecord',
    timeRecord: '/NodeJS/timeRecords',

    tasksCollectionName: 'tasks',
    taskBodyProperty: 'task',
    task: '/NodeJS/tasks',
    
    projectsCollectionName: 'projects',
    projectBodyProperty: 'project',
    project: '/NodeJS/projects',

    httpPatchIdPropertyName: 'idName',
    httpPatchIdPropertyValue: 'idValue',

    httpPatchIdPropertyToUpdateName: 'propertyName',
    httpPatchIdPropertyToUpdateValue: 'propertyValue',

    isDeletedInClientProperty: 'isDisabledInBooking',
    isDisabledProperty: 'isDisabled',
    isDisabledInCommit: 'isDisabledInCommit',
    projectIdProperty: 'projectId',

    taskIdProperty: 'taskId',

    timEntriesCollectionName: 'time-entries',
    timeEntriesBodyProperty: 'timeEntries',
    timeEntries: '/NodeJS/timeEntries',

    endDateProperty: 'endTime',
    timeEntriesStopPathSuffix: '/stop',
    timeEntriesDeletePathSuffix: '/delete',
    timeEntriesDurationSuffix: '/duration',
    timeEntryIdProperty: 'timeEntryId',

    startTimeProperty: 'startTime',
    timeEntryPausePathSuffix: '/pauses',
    pausesProperty: 'pauses',

    durationProperty: 'duration',
    projectIdPropertyAsForeignKey: '_projectId',
    taskIdPropertyAsForeignKey: '_taskId',
    timeEntriesDurationSumSuffix: '/durationSum',
    timeEntriesDurationSumTasksSuffix: '/durationSumTasks',
    deleteTimeEntryByTaskIdSuffix: '/deleteByTaskId',
    timeEntriesViaTaskIdSuffix: '/taskId',

    dayPropertyName: 'day'
}
module.exports = routes;