import React from "react";
import { TextInputProps } from "react-native";

import { Input } from "./style";

type InputProps = TextInputProps

export function Inputs({ ...rest }: InputProps) {
  return (
    <Input {...rest} />
  )
}