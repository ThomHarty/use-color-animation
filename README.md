# Use Color Animation

Use Color Animation hook for React Native

## Installation

```sh
yarn add rn-use-color-animation
```

Also install [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/)

## Usage

1. Import the hook:

```
import {useColorAnimation} from "rn-use-color-animation";
```

2. Invoke the hook, and pass the css `key`, the `start` color, the `end` color, and the `isEnd` dynamic boolean:

```
const [pressed, setPressed] = useState(false);

const background = useColorAnimation({
    key: "backgroundColor",
    start: "#F61067",
    end: "#574AE2",
    isEnd: pressed,
});
```

Optionally pass a `duration` prop to change the rate at which the color changes from one to another. This defaults to `250`.

3. Pass the color animation variable to the animated component style prop:

```
<Animated.View style={[styles.view, background]}>
    ...
</Animated.View>
```

## Full example

```
import React, { ReactElement, useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text } from "react-native";
import Animated from "react-native-reanimated";
import {useColorAnimation} from "rn-use-color-animation";

export const App = (): ReactElement => {
  const [pressed, setPressed] = useState(false);
  
  const background = useColorAnimation({
    key: "backgroundColor",
    start: "#F61067",
    end: "#574AE2",
    isEnd: pressed,
  });

  const _handlePressIn = () => {
    setPressed(true);
  };

  const _handlePressOut = () => {
    setPressed(false);
  };

  return (
    <SafeAreaView>
      <Pressable onPressIn={_handlePressIn} onPressOut={_handlePressOut}>
        <Animated.View style={[styles.view, background]}>
          <Text style={styles.text}>
            Use Color Animation
          </Text>
        </Animated.View>
      </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  view: {
    padding: 20,
    margin: 20,
    borderRadius: 15,
  },
  text: {
    fontSize: 21,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  }
})
```

## Type

```
export type ColorAnimation = {
  key: string;
  start: string;
  end: string;
  isEnd: boolean;
  duration?: number;
};
```
