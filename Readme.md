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
_`wh = window height,
ww = window width,
sh = screen height,
sw = screen width`
_
The second argument is a number.
This number is the design value.

## Example

```javascript
import { resize } from "react-native-responsive-sizer";

/*When the height of the outermost layout of the design not including
 the status bar and soft bar menu is 800px.*/
const wh = resize("wh", 800);

/*When the width of the outermost layout of the design not including
 the status bar and soft bar menu is 300px.*/
const ww = resize("ww", 300);

/*When the height of the outermost layout of the design including
 the status bar and soft bar menu is 800px.*/
const sh = resize("sh", 800);

/*When the width of the outermost layout of the design including
 the status bar and soft bar menu is 300px.*/
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
    width: ww(200),
    height: wh(900),
  },
  text: {
    fontSize: ww(16),
  },
});
```
