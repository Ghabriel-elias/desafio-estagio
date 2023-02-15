import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, IconEye } from "./style";

interface ButtonProps extends TouchableOpacityProps {
  eye: string,
  type: 'password' | 'totalGain'
}

export function EyeShow({ eye, onPress, type }: ButtonProps) {
  return (
    <Container onPress={onPress}>
      <IconEye name={eye} type={type} />
    </Container>
  )
}