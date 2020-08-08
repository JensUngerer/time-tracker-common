export class Serialization {
    static serialize<T>(data: T): string {
        return JSON.stringify(data);
    }

    static deSerialize<T>(dataStr: string): T {
        // c.f.: https://stackoverflow.com/questions/9194372/why-does-json-stringify-screw-up-my-datetime-object
        // https://stackoverflow.com/questions/4511705/how-to-parse-json-to-receive-a-date-object-in-javascript

        const dateTimeReceiver = (key: any, value: any) => {
            if (key === 'startTime' || key === 'endTime' || key === 'day') {
                return new Date(value);
            } else {
                return value;
            }
        };
        return JSON.parse(dataStr, dateTimeReceiver);
    }
}