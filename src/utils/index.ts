import { random, sample } from "lodash"
import randomColor from "randomcolor"
import { FIRST_QUADRANT, FOURTH_QUADRANT, SECOND_QUADRANT, THIRD_QUADRANT } from "../../constants"

import { hue } from "color-blend"
import hexRgb from 'hex-rgb';
import rgbHex from 'rgb-hex';

export const randomRadialGradient = () => {
    const gradientColorsCount = 4
    const stopCount = gradientColorsCount

    const colorStops = Array(stopCount).fill(null)
        .map((_, index) => {
            const color = randomColor({
                luminosity: "dark",
                hue: sample(["purple", "orange", "blue", "pink", "pink"])
            })

            const colorRgba = hexRgb(color)
            const bgRgba = hexRgb("#0b0f1f")

            const blend = hue({
                r: bgRgba.red,
                g: bgRgba.green,
                b: bgRgba.blue,
                a: bgRgba.alpha
            }, {
                r: colorRgba.red,
                g: colorRgba.green,
                b: colorRgba.blue,
                a: colorRgba.alpha
            })

            const newColorHex = rgbHex(blend.r, blend.g, blend.b, blend.a)

            const stopPosition = Math.floor((100 / stopCount) * index)
            return `#${newColorHex} ${stopPosition}%`
        })

    const radialGradient = `radial-gradient(circle, ${colorStops.join(", ")})`

    return radialGradient
}

export const randomCoordinate = (quadrant: any) => {
    if (quadrant === FIRST_QUADRANT) return `${random(50, 100)}% ${random(0, 50)}%`
    if (quadrant === SECOND_QUADRANT) return `${random(0, 50)}% ${random(0, 50)}%`
    if (quadrant === THIRD_QUADRANT) return `${random(0, 50)}% ${random(50, 100)}%`
    if (quadrant === FOURTH_QUADRANT) return `${random(50, 100)}% ${random(50, 100)}%`
    return ''
}

export const getWindowHeight = () => {
    const isBrowser = typeof window !== 'undefined';
    const viewportHeight = isBrowser ? window.innerHeight : 1;
    return viewportHeight
}

export const getWindowWidth = () => {
    const isBrowser = typeof window !== 'undefined';
    const viewportWidth = isBrowser ? window.innerWidth : 1;
    return viewportWidth
}
