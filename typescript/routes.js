// https://stackoverflow.com/questions/41219542/how-to-import-js-modules-into-typescript-file
// https://stackoverflow.com/questions/44817349/how-to-include-external-js-file-in-angular-4-and-call-function-from-angular-to-j
// https://stackoverflow.com/questions/25574826/how-to-requiremodule-in-mongo-shell
var routes = {
    url: 'mongodb://localhost:27017',
    port: 3000,
    databaseName: 'timeTracker',

    timeRecordsCollectionName: 'timeRecords',
    timeRecordBodyProperty: 'timeRecord',
    timeRecord: '/NodeJS/timeRecords',

    tasksCollectionName: 'tasks',
    taskBodyProperty: 'task',
    task: '/NodeJS/tasks',
    
    projectsCollectionName: 'projects',
    projectBodyProperty: 'project',
    project: '/NodeJS/projects'
};
module.exports = routes;