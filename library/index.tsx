import React, { SFC, ReactNode } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

type ButtonProps = TouchableOpacityProps & {
  onPress?: () => any;
  children: ReactNode;
};

const Button: SFC<ButtonProps> = ({ onPress, children, ...props }) => (
  <TouchableOpacity { ...props } onPress={ onPress }>
    <Text>{ children }</Text>
  </TouchableOpacity>
);

export default Button;

export { Button, ButtonProps };
