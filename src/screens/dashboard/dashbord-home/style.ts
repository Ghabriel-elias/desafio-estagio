import styled, { css } from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient'
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../../global/styles/theme";

interface CardMargin {
  type: 'resumo' | 'entrega'
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
  width: 100%;
  align-items: center;
`

export const Main = styled.View`
  flex: 0.9;
  width: 90%;
  justify-content: space-evenly;
`

export const TotalDay = styled(LinearGradient).attrs({
  start: { x: 0, y: 1 },
  end: { x: 1, y: 0 },
  colors: [theme.colors.linear_gradient_light, theme.colors.linear_gradient_dark]
})`
  border-radius: 15px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 0.7;
  margin-bottom: ${RFValue(10)}px;
  padding: 0px ${RFValue(20)}px;
`

export const ViewTotalGain = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const ViewData = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const TitleTotal = styled.Text`
  color: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
`

export const MoneyTotal = styled.Text`
  color: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.bold_roboto};
  font-size: ${RFValue(30)}px;
  margin-left: ${RFValue(10)}px;
`

export const Data = styled.Text`
  color: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
`

export const Cards = styled.KeyboardAvoidingView<CardMargin>`
  width: 100%;
  border-radius: 15px;
  border-width: 0.5px;
  border-color: ${({ theme }) => theme.colors.cards_shadow};
  flex-direction: column;
  justify-content: center;
  height: ${RFValue(185)}px;
  padding: 0px ${RFValue(16)}px;
  ${(props => props.type === 'resumo' && css`
    margin-bottom: ${RFValue(10)}px;
    height: ${RFValue(160)}px;
  `)}
`

export const TitleCards = styled.Text`
  color: ${({ theme }) => theme.colors.title_home};
  font-family: ${({ theme }) => theme.fonts.bold_poppins};
  font-size: ${RFValue(14)}px;
`

export const ViewCards = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-top: ${RFValue(15)}px;
`

export const CardsResumo = styled.View`
  width: 32%;
  border-radius: 15px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.cards_shadow};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: ${RFValue(90)}px;
`

export const TitleResumo = styled.Text`
  color: ${({ theme }) => theme.colors.subtitle_resumo};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(10)}px;
`

export const ContResumo = styled.Text`
  color: ${({ theme }) => theme.colors.title_home};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(30)}px;
`

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.subtitle_id};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(10)}px;
  margin-bottom: ${RFValue(5)}px;
`

export const AreaInput = styled.View`
  width: 75%;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.input_password};
  border-radius: 15px;
  padding: 0px ${RFValue(14)}px;
  align-items: center;
  justify-content: center;
  height: ${RFValue(40)}px;
  /* margin-bottom: ${RFValue(13)}px; */
`

export const AreaInputs = styled.KeyboardAvoidingView`
  flex-direction: row;
  justify-content: space-between;
`

export const TouchableOk = styled.TouchableOpacity`
  width: 20%;
  background-color: ${({ theme }) => theme.colors.input_password};
  border-radius: 15px;
  align-items: center;
  height: ${RFValue(40)}px;
  justify-content: center;
  align-items: center;
`

export const TextOk = styled.Text`
  color: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
`