import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Input = styled.TextInput`
  width: 90%;
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.poppins_regular};
  color: ${({ theme }) => theme.colors.placeholder};
`
