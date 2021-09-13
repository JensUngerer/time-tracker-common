import { DurationUnit } from "luxon";

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
    // https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens
    static contextCsvFormat = 'yyyy-MM-dd_HH-mm-ss';
    static contextDurationFormatFull = 'hh:mm:ss,SSS';
    static CONTEXT_BASE_FILE_NAME = "Workflow-Context";

    static shiftToParameter: DurationUnit[] = ['hours', 'minutes', 'seconds', 'milliseconds'];
    static durationInitializationZero = {years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0, milliseconds: 0};
}