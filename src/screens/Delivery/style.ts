import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialIcons } from '@expo/vector-icons';

import theme from '../../global/styles/theme'

interface BorderType {
  type: 'border' | 'noBorder'
}

export const Container = styled.View`
  flex: 1;
  width: 90%;
`

export const Header = styled.View`
  flex: 0.2;
`

export const TitlesView = styled.View<BorderType>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  ${(props => props.type === 'border' && css`
    border-bottom-width: 0.3px;
    border-bottom-color: ${({ theme }) => theme.colors.subtitles} ;
  `)}
`

export const Titles = styled.Text`
  color: ${({ theme }) => theme.colors.subtitles};
  font-family: ${({ theme }) => theme.fonts.poppins_regular};
  font-size: ${RFValue(13)}px;
`

export const MainContents = styled.Text`
  color: ${({ theme }) => theme.colors.linear_gradient_dark};
  font-family: ${({ theme }) => theme.fonts.poppins_bold};
  font-size: ${RFValue(20)}px;
`

export const Main = styled.View`
  flex: 1;
  width: 100%;
`

export const ViewMoney = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  `

export const TitleMoney = styled.Text`
  color: ${({ theme }) => theme.colors.linear_gradient_dark};
  font-size: ${RFValue(32)}px;
  font-family: ${({ theme }) => theme.fonts.poppins_bold};
  margin-bottom: ${RFValue(10)}px;
`

export const ViewDeliveryIcon = styled(LinearGradient).attrs({
  start: { x: 0, y: 1 },
  end: { x: 1, y: 0 },
  colors: [theme.colors.linear_gradient_light, theme.colors.linear_gradient_dark]
})`
  border-radius: 20px;
  align-items: center;
  justify-content: flex-start;
  height: ${RFValue(50)}px;
  flex-direction: row;
  width: 100%;
`

export const Icon = styled(MaterialIcons)`
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.background};
  width: 10%;
  margin-left: ${RFValue(10)}px;
`

export const ViewTexsIcon = styled.View`
  flex-direction: column;
  justify-content: center;
`

export const TitleTextIcon = styled.Text`
  color: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.roboto_medium};
  font-size: ${RFValue(16)}px;
`

export const SubtitleTextIcon = styled.Text`
  color: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.roboto_regular};
  font-size: ${RFValue(10)}px;
`

export const MainContent = styled.View`
  width: 100%;
  flex-direction: row;
`

export const AreaLine = styled.View`
  align-items: center;
  width: 15%;
`

export const ViewLIne = styled.View`
  height: ${RFValue(170)}px;
  width: 1px;
  background-color: ${({ theme }) => theme.colors.color_line_entrega};
  align-items: center;
  justify-content: space-between;
`

export const ViewEntrega = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 110px;
`

export const ViewBall = styled(LinearGradient).attrs({
  start: { x: 0, y: 1 },
  end: { x: 1, y: 0 },
  colors: [theme.colors.linear_gradient_light, theme.colors.linear_gradient_dark]
})`
  width: ${RFValue(18)}px;
  height: ${RFValue(18)}px;
  border-radius: 20px;
`

export const ViewSmallBall = styled.View`
  width: ${RFValue(10)}px;
  height: ${RFValue(10)}px;
  border-radius: 20px;
  border-width: 0.5px;
  border-color: ${({ theme }) => theme.colors.linear_gradient_dark};
  background-color: ${({ theme }) => theme.colors.background};
`

export const ViewEnderecos = styled.View`
  width: 80%;
  height: ${RFValue(200)}px;
  justify-content: space-between;
  margin-top: 5px;
`

export const ViewInformations = styled.View`
  flex-direction: column;
  height: ${RFValue(100)}px;
  justify-content: space-around;
`

export const TitlePedido = styled.Text`
  color: ${({ theme }) => theme.colors.linear_gradient_dark};
  font-family: ${({ theme }) => theme.fonts.roboto_medium};
  font-size: ${RFValue(16)}px;
  height: ${RFValue(25)}px;
`

export const SubtitlePedidos = styled.Text`
  color: ${({ theme }) => theme.colors.subtitles};
  font-family: ${({ theme }) => theme.fonts.roboto_regular};
  font-size: ${RFValue(14)}px;
`

export const Footer = styled.View`
  flex: 0.5;
  width: 100%;
`

export const TouchableReject = styled.TouchableOpacity`
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.colorReject};
  height: ${RFValue(45)}px;
  flex-direction: row;
  margin-top: ${RFValue(15)}px;
`

export const IconReject = styled(MaterialIcons)`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.colorReject};
  padding-right: ${RFValue(7)}px;
`

export const TextReject = styled.Text`
  font-family: ${({ theme }) => theme.fonts.poppins_medium};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.colorReject} ;
`