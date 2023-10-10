import { Colors } from 'react-native/Libraries/NewAppScreen';

const COLORS = <ColorType>{
  primary: '#009688',
  secondary: 'rgba(255, 55, 24, 0.70)',
  tertiary: '#EFEFEF',
  grey: '#9C9C9C',
  lightGrey: 'rgba(231, 231, 231, 0.8)',
  red: '#ED1F43',
  primaryTransp: 'rgba(0, 150, 136, 0.2)',
  transparent: 'rgba(0, 0, 0, 0.15)',
};

const SIZES = <SizeType>{
  xxSmall: 8,
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

type ColorType = {
  primary: string;
  secondary: string;
  tertiary: string;
  grey: string;
  lightGrey: string;
  red: string;
  primaryTransp: string;
  transparent: string;
};

type SizeType = {
  xxSmall: number;
  xSmall: number;
  small: number;
  medium: number;
  large: number;
  xLarge: number;
  xxLarge: number;
};

export { COLORS, SIZES };
