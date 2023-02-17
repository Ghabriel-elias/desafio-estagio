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

export function Touchables({ icon, title, type, ...rest }: TouchableProps) {
  return (
    <Container>
      <Touchable {...rest}>
        <Gradient>
          <Icon name={icon} type={type} />
          <TextTouchable>{title}</TextTouchable>
        </Gradient>
      </Touchable>
    </Container >
  )
}