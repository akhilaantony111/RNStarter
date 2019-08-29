//Height, width, font size respective to the device screen ratio.
import { Dimensions } from "react-native";

const { height, width } = Dimensions.get('window'); //Get width and height of the device screen
export const responsiveHeight = (h) => {
    return height * (h / 100);
};

export const responsiveWidth = (w) => {
    return width * (w / 100);
};

export const responsiveFontSize = (f) => {
    return Math.sqrt((height * height) + (width * width)) * (f / 100);
};
