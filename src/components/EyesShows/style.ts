import styled, { css } from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";

interface TypeEyeProps {
  type: 'password' | 'totalGain'
}

export const IconEye = styled(Feather) <TypeEyeProps>`
  ${(props => props.type === 'password' && css`
    color: ${({ theme }) => theme.colors.input_password};
    font-size: ${RFValue(25)}px;
  `)}

  ${(props => props.type === 'totalGain' && css`
    color: ${({ theme }) => theme.colors.background};
    font-size: ${RFValue(24)}px;
  `)}
`