import { Dimensions } from "react-native";

/*
windowHeight => The height without status bar and soft bar menu. 
screenHeight => The entire screen height of device(include status bar and soft bar menu). 
 */

let windowHeight = Dimensions.get("window").height;
let windowWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("screen").height;
let screenWidth = Dimensions.get("screen").width;

const resize = (type, basis) => {
  const resizedHeightByWindow = (h) => {
    return Math.floor((windowHeight * h) / basis);
  };
  const resizedWidthByWindow = (w) => {
    return Math.floor((windowWidth * w) / basis);
  };

  const resizedHeightByScreen = (h) => {
    return Math.floor((screenHeight * h) / basis);
  };
  const resizedWidthByScreen = (w) => {
    return Math.floor((screenWidth * w) / basis);
  };
  if (type === "wh") {
    return resizedHeightByWindow;
  } else if (type === "ww") {
    return resizedWidthByWindow;
  } else if (type === "sh") {
    return resizedHeightByScreen;
  } else if (type === "sw") {
    return resizedWidthByScreen;
  }
};

export { resize };
