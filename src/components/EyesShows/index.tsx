import React from "react";
import { TouchableOpacityProps, TouchableOpacity } from "react-native";

import { IconEye } from "./style";

interface ButtonProps extends TouchableOpacityProps {
  eye: string,
  type: 'password' | 'totalGain'
}

export function EyeShow({ eye, type, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity {...rest}>
      <IconEye name={eye} type={type} />
    </TouchableOpacity>
  )
}