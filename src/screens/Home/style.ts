import styled, { css } from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context'
import { RFValue } from "react-native-responsive-fontsize";

interface TextErrorProps {
  type: 'login' | 'dashboard'
}

interface OpacityProp {
  opacity: string
}

export const SafeArea = styled(SafeAreaView)`
  width: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
`

export const ContentModal = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Container = styled.View<OpacityProp>`
  ${(props => props.opacity === 'opacityOn' && css`
  opacity: 0.4;
  `)}
  ${(props => props.opacity === 'opacityOff' && css`
  opacity: 1;
  `)}
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
  width: 90%;
`

export const Header = styled.View`
  width: 100%;
  flex: 0.3;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ImageLogo = styled.Image.attrs({
  source: require('../../assets/logo-Pigz.png')
})`
  height: ${RFValue(50)}px;
  width: ${RFValue(100)}px;
  margin-bottom: 8px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.title_home};
  font-size: ${RFValue(18)}px;
`

export const Main = styled.View`
  width: 100%;
  flex: 1;
`

export const TitleLogin = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.title_login};
  font-size: ${RFValue(16)}px;
  margin-bottom: ${RFValue(15)}px;
`

export const TextMaybeError = styled.Text<TextErrorProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.colorReject};
  font-size: ${RFValue(10)}px;
  height:  ${RFValue(20)}px;
  ${(props) => props.type === 'login' && css`
    margin-bottom: ${RFValue(10)}px;
  `}
`

export const TitleInputs = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.texts_home};
  font-size: ${RFValue(13)}px;
  margin-bottom:  ${RFValue(6)}px;
`

export const ContainerInput = styled.View`
  width: 100%;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.linear_gradient_dark};
  border-radius: 15px;
  flex-direction: row;
  height: ${RFValue(50)}px;
  padding: 0px ${RFValue(14)}px;
  justify-content: space-between;
  align-items: center;
`

export const ForgetPassword = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.texts_home};
  font-size: ${RFValue(13)}px;
  margin-top: ${RFValue(6)}px;
  margin-bottom: ${RFValue(24)}px;
  text-decoration: underline;
`

export const Create = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: ${RFValue(36)}px;
`

export const TextQuestion = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.texts_home};
  font-size: ${RFValue(13)}px;
`

export const TextCreat = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.linear_gradient_dark};
  font-size: ${RFValue(13)}px;
`

export const Footer = styled.View`
  margin-top: ${RFValue(40)}px;
  width: 100%;
  flex: 0.4;
  align-items: center;
  justify-content: center;
`

export const ViewSeparate = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  `

export const TextLogin = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.title_home};
  font-size: ${RFValue(13)}px;
  width: 30%;
  `

export const Line = styled.View`
  width: 70%;
  border-color: ${({ theme }) => theme.colors.texts_home};
  border-width: 0.5px;
  `

export const ViewTouchGoogle = styled.TouchableOpacity`
  margin-top: ${RFValue(25)}px;
  width: 100%;
  border-width: 0.5px;
  border-radius: 15px;
  border-color: ${({ theme }) => theme.colors.texts_home};
  height: ${RFValue(50)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

export const LogoGoogle = styled.Image.attrs({
  source: require('../../assets/logo-google.png')
})`
  width: ${RFValue(25)}px;
  height: ${RFValue(25)}px;
`

export const TextTouchGoogle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.texts_home};
  font-size: ${RFValue(15)}px;
`