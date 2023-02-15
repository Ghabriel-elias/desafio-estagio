import React from "react";
import { TouchableOpacityProps } from 'react-native'
import {
  Container,
  Touchable,
  TextTouchable,
  Gradient,
  Icon
} from "./style";

interface TouchableProps extends TouchableOpacityProps {
  icon: string,
  title: string
  type: 'icon' | 'noIcon'
}

export function Touchables({ icon, onPress, title, type }: TouchableProps) {
  return (
    <Container>
      <Touchable onPress={onPress}>
        <Gradient>
          <Icon name={icon} type={type} />
          <TextTouchable>{title}</TextTouchable>
        </Gradient>
      </Touchable>
    </Container >
  )
}