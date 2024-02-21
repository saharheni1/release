import React from 'react';
import {Pressable} from 'react-native';

import {ExampleIcon} from '@assets';
import {useAppTheme} from '@hooks';
import {ThemeColors} from '@theme';

export interface IconBase {
  size?: number;
  color?: string;
}

export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  size?: number;
  onPress?: () => void;
}

export function Icon({
  name,
  color = 'backgroundContrast',
  size,
  onPress,
}: IconProps) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];

  if (onPress) {
    return (
      <Pressable testID={name} onPress={onPress} hitSlop={10}>
        <SVGIcon color={colors[color]} size={size} />
      </Pressable>
    );
  }

  return <SVGIcon color={colors[color]} size={size} />;
}

const iconRegistry = {
  exampleIcon: ExampleIcon,
};
type IconType = typeof iconRegistry;
type IconName = keyof IconType;
