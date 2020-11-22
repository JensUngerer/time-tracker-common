export interface IColor {
    red: number;
    green: number;
    blue: number;
    opacity: string;
}

export interface IColorPair {
    color: string;
    inverseColor: string;
}

export class ColorsGenerator {
    static ensureTwoDigits(raw: string) {
        if (!raw) {
            return '';
        }
        if (raw.length === 2) {
            return raw;
        }
        return '0' + raw;
    }

    static generateRgba(): IColor {
        const o = Math.round;
        const r = Math.random;
        const s = 255;

        const red = o(r() * s);
        const green = o(r() * s);
        const blue = o(r() * s);
        const opacity = r().toFixed(1);
        const color = {
            red,
            green,
            blue,
            opacity
        };

        return color;
    }

    static getHexColorRepresentation(color: IColor) {
        try {
            const redColor = color.red.toString(16);
            const greenColor = color.green.toString(16);
            const blueColor = color.blue.toString(16);
            const concatenated = ColorsGenerator.ensureTwoDigits(redColor) + ColorsGenerator.ensureTwoDigits(greenColor) + ColorsGenerator.ensureTwoDigits(blueColor);
            return concatenated;
        } catch(e) {
            return '';
        }
    }

    static getInverseColorHex(color: IColor): string {
        // https://stackoverflow.com/questions/18141976/how-to-invert-an-rgb-color-in-integer-form
        const concatenated = '0x' + ColorsGenerator.getHexColorRepresentation(color);
        try {
            const colorCode = parseInt(concatenated, 16);
            const baseColorCode = parseInt('0xFFFFFF', 16);
            const inverseColor = baseColorCode - colorCode;
            const inverseColorHex = inverseColor.toString(16);
            return inverseColorHex;
        } catch (e) {
            return '';
        }
    }

    static generateHexColor(): IColorPair {
        const color = ColorsGenerator.generateRgba();
        const inverseColorHex = ColorsGenerator.getInverseColorHex(color);
        const cssColorInHex = '#' + ColorsGenerator.getHexColorRepresentation(color);
        const cssInverseColorInHex = '#' + inverseColorHex;
        return {
            color: cssColorInHex,
            inverseColor: cssInverseColorInHex
        };
    }

    static randomRgba(): string {
        // const createInverseRedFrom = (inverseColor: number) => {
        //   // https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
        //   const hexToRgb = (hex: string) => {
        //     var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        //     return result ? {
        //       red: parseInt(result[1], 16) ? parseInt(result[1], 16) : 0,
        //       green: parseInt(result[2], 16) ? parseInt(result[2], 16) : 0,
        //       blue: parseInt(result[3], 16) ? parseInt(result[3], 16) : 0
        //     } : null;
        //   };
        //   return hexToRgb(inverseColor.toString(16));
        // };



        // https://stackoverflow.com/questions/23095637/how-do-you-get-random-rgb-in-javascript

        // const concatenated = '0x' + ensureTwoDigests(red.toString(16)) + ensureTwoDigests(green.toString(16)) + ensureTwoDigests(blue.toString(16));

        
        const color = ColorsGenerator.generateRgba();

        // DEBUGGING
        // console.log(inverseColorAsRgba);
        const colorAsRgba = 'rgba(' + color.red + ',' + color.green + ',' + color.blue + ',' + color.opacity + ')';

        // https://stackoverflow.com/questions/7015302/css-hexadecimal-rgba
        return colorAsRgba;
    }
}