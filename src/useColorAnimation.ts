import { useCallback, useEffect } from 'react';
import {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import type { ColorAnimation } from './ColorAnimation';

export const useColorAnimation = ({
  key,
  start,
  end,
  isEnd,
  duration,
}: ColorAnimation) => {
  const getSharedValue = useCallback(() => {
    if (isEnd) {
      return 1;
    } else {
      return 0;
    }
  }, [isEnd]);

  const shared = useSharedValue(getSharedValue());

  useEffect(() => {
    shared.value = withTiming(getSharedValue(), {
      duration: duration || 250,
    });
  }, [isEnd, duration, getSharedValue, shared]);

  const color = useAnimatedStyle(() => {
    console.log(key);
    return {
      [key]: interpolateColor(shared.value, [0, 1], [start, end]),
    };
  });

  return color;
};
