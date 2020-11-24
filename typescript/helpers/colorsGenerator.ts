// import invert, { RGB }from 'invert-color';

export interface IColor {
    r: number;
    g: number;
    b: number;
    // opacity: string;
}

export interface IColorPair {
    color: string;
    inverseColor: string;
}

export class ColorsGenerator {
    // https://stackoverflow.com/questions/9733288/how-to-programmatically-calculate-the-contrast-ratio-between-two-colors
    static luminanace(r, g, b) {
        var a = [r, g, b].map(function (v) {
            v /= 255;
            return v <= 0.03928
                ? v / 12.92
                : Math.pow( (v + 0.055) / 1.055, 2.4 );
        });
        return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
    }
    static contrast(rgb1: IColor, rgb2: IColor) {
        var lum1 = ColorsGenerator.luminanace(rgb1.r, rgb1.g, rgb1.b);
        var lum2 = ColorsGenerator.luminanace(rgb2.r, rgb2.g, rgb2.b);
        var brightest = Math.max(lum1, lum2);
        var darkest = Math.min(lum1, lum2);
        return (brightest + 0.05)
             / (darkest + 0.05);
    }

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
            r: red,
            g: green,
            b: blue,
            // opacity
        };

        return color;
    }

    static getHexColorRepresentation(color: IColor) {
        try {
            const redColor = color.r.toString(16);
            const greenColor = color.g.toString(16);
            const blueColor = color.b.toString(16);
            const concatenated = ColorsGenerator.ensureTwoDigits(redColor) + ColorsGenerator.ensureTwoDigits(greenColor) + ColorsGenerator.ensureTwoDigits(blueColor);
            return concatenated;
        } catch(e) {
            return '';
        }
    }

    static getInverseColorHex(color: IColor): string {
        // https://stackoverflow.com/questions/18141976/how-to-invert-an-rgb-color-in-integer-form
        // https://stackoverflow.com/questions/35969656/how-can-i-generate-the-opposite-color-according-to-current-color
        // https://github.com/onury/invert-color
        // const concatenated = /*'0x' + */ ColorsGenerator.getHexColorRepresentation(color);
        // try {
        //     const colorCode = parseInt(concatenated, 16);
        //     const baseColorCode = parseInt('FFFFFF', 16);
        //     const inverseColor = baseColorCode - colorCode;
        //     const inverseColorHex = inverseColor.toString(16);
        //     return inverseColorHex;
        // } catch (e) {
        //     return '';
        // }
        // return invert(color, true);
        const black: IColor = {
            r: 0,
            g: 0,
            b: 0
        };
        const white: IColor = {
            r: 255,
            g: 255,
            b: 255
        };
        const contrastToBlack = ColorsGenerator.contrast(black, color);
        const contrastToWhite = ColorsGenerator.contrast(white, color);

        if (contrastToBlack >= contrastToWhite) {
            return '000000';
        } else {
            return 'FFFFFF';
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
        const colorAsRgba = 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',' + 1.0 + ')';

        // https://stackoverflow.com/questions/7015302/css-hexadecimal-rgba
        return colorAsRgba;
    }
}