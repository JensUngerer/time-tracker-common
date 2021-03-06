export class Serialization {
    private static dateKeys: string[] = [
        'startTime',
        'endTime',
        'day',
        'utcStartTime',
        'utcEndTime'
    ];

    static serialize<T>(data: T): string {
        return JSON.stringify(data, null, 4);
    }

    static deSerialize<T>(dataStr: string): T {
        // c.f.: https://stackoverflow.com/questions/9194372/why-does-json-stringify-screw-up-my-datetime-object
        // https://stackoverflow.com/questions/4511705/how-to-parse-json-to-receive-a-date-object-in-javascript

        const dateTimeReceiver = (key: any, value: any) => {
            if (Serialization.dateKeys.includes(key)) {
                if (value === null) {
                    return null;
                }
                return new Date(value);
            } else {
                return value;
            }
        };
        return JSON.parse(dataStr, dateTimeReceiver);
    }
}