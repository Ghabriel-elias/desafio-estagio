import React from "react";
import { Input } from "./style";
import { TextInputProps } from "react-native";

interface InputProps extends TextInputProps { }

export function Inputs({ ...rest }: InputProps) {
  return (
    <Input {...rest} />
  )
}