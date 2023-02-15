import styled, { css } from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient'
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../global/styles/theme";
import { MaterialIcons } from '@expo/vector-icons';

interface IconChoose {
  type: 'icon' | 'noIcon'
}

export const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const Touchable = styled.TouchableOpacity`
  width: 100%;
`

export const Gradient = styled(LinearGradient).attrs({
  start: { x: 0, y: 1 },
  end: { x: 1, y: 0 },
  colors: [theme.colors.linear_gradient_light, theme.colors.linear_gradient_dark]
})`
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  height: ${RFValue(45)}px;
  flex-direction: row;
`

export const Icon = styled(MaterialIcons) <IconChoose>`
  ${(props => props.type === 'icon' && css`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.background};
  padding-right: ${RFValue(7)}px;
  `)}
`

export const TextTouchable = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.background} ;
`
