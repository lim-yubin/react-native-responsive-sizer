# react-native-responsive-sizer

## Install

`npm install react-native-responsive-sizer`

## Usage

This package is for applying design figures to the ratio of the device when implementing an app using design tools such as Figma, XD, and Zeppelin.

You probably know about Dimensions in React native.
https://reactnative.dev/docs/dimensions

If your design includes a status bar and a soft menu bar, you can get your screen size with Dimensions.get("screen"),
If not, you can get it with Dimensions.get("window").

The function has two parameters.
The first parameter can only be `wh,ww,sh,sw`.

`wh = window height,
ww = window width,
sh = screen height,
sw = screen width`

The second argument is a number.
This number is the design value.

## Example

```javascript
import { resize } from "react-native-responsive-sizer";

/*If your app UI design does not include a status bar and a soft menu bar, and the height is 800px.*/
const wh = resize("wh", 800);

/*If your app UI design does not include a status bar and a soft menu bar, and the width is 300px.*/
const ww = resize("ww", 300);

/*If your app UI design includes a status bar and a soft menu bar, and the height is 800px.*/
const sh = resize("sh", 800);

/*If your app UI design includes a status bar and a soft menu bar, and the width is 300px.*/
const sw = resize("sw", 300);

export default function Homescreen() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Example</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: ww(200), //Converting 200px to match your device's ratio.
    height: wh(900), //Converting 900px to match your device's ratio.
  },
  text: {
    fontSize: ww(16), //Converting 16px to match your device's ratio.
  },
});
```
