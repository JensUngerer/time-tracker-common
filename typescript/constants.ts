export class Constants {
    static MILLISECONDS_IN_SECOND = 1000;
    static SECONDS_IN_MINUTE = 60;
    static MINUTES_IN_HOUR = 60;
    static HOURS_IN_DAY = 24;

    static MILLISECONDS_IN_MINUTE = Constants.MILLISECONDS_IN_SECOND * 
    Constants.SECONDS_IN_MINUTE;
   
    static MILLISECONDS_IN_HOUR = Constants.MILLISECONDS_IN_SECOND * 
        Constants.SECONDS_IN_MINUTE * 
        Constants.MINUTES_IN_HOUR;

    static MILLISECONDS_IN_DAY = Constants.MILLISECONDS_IN_SECOND * 
    Constants.SECONDS_IN_MINUTE * 
    Constants.MINUTES_IN_HOUR *
    Constants.HOURS_IN_DAY;
    
    static formatDateDay = 'yyyy-MM-dd';
    static formatDateTime = 'HH:mm:ss';
    static formatPercent = '2.0-0';
    static formatNumber = '1.2-2';
    static formatMilliseconds = '7.0-0';
    static contextDurationFormat = 'hh:mm:ss';
    static contextIsoFormat = 'yyyy-MM-dd';
    static contextCsvFormat = 'yyyy-MM-dd_hh-mm-ss';

    static CONTEXT_BASE_FILE_NAME = "Workflow-Context";
}