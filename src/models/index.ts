import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";

export type propsNavigationStack = {
  Home: undefined
  Dashboard: undefined
  Delivery: {
    id: string,
    moneyGenerate: number,
    minutes: string,
    setMoneyGain: React.Dispatch<React.SetStateAction<number>>,
    money: number,
    setAceitas: React.Dispatch<React.SetStateAction<number>>,
    aceitas: number,
    setRejeitadas: React.Dispatch<React.SetStateAction<number>>,
    rejeitadas: number,
    setTotal: React.Dispatch<React.SetStateAction<number>>,
    total: number
  }
}

export type PropsStack = NativeStackNavigationProp<propsNavigationStack>