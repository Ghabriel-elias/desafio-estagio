import React, { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native'
import { LogBox } from 'react-native';

import { Input } from "../../../components/inputs/style";
import { EyeShow } from "../../../components/showPassword";
import { Touchables } from "../../../components/Touchables";
import { SafeArea, TextMaybeError } from "../../Home/style";
import { PropsStack } from '../../../models/index'

import {
  Container,
  Main,
  TotalDay,
  ViewTotalGain,
  ViewData,
  TitleTotal,
  MoneyTotal,
  Data,
  Cards,
  TitleCards,
  ViewCards,
  CardsResumo,
  TitleResumo,
  ContResumo,
  Subtitle,
  AreaInput,
  TouchableOk,
  AreaInputs,
  TextOk,
} from "./style";

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export function DashboardHome() {

  const navigation = useNavigation<PropsStack>()

  const [data, setData] = useState('')

  useEffect(() => {
    setData(`${new Date().getDate()}/${new Date().getMonth() + 1}`)
  }, [])

  const [money, setMoney] = useState(0)
  const [eye, setEye] = useState('eye-off')
  const [totalGain, setTotalGain] = useState('----')

  function showMoney() {
    if (eye === 'eye-off') {
      setEye('eye')
      setTotalGain(`R$ ${String((money).toFixed(2))}`)
    } else if (eye === 'eye') {
      setEye('eye-off')
      setTotalGain('----')
    }
  }

  const [id, setId] = useState('')

  const [textError, setTextError] = useState('')

  const [aceitas, setAceitas] = useState(0)

  const [rejeitadas, setRejeitadas] = useState(0)

  const [total, setTotal] = useState(0)

  function sendInformations() {
    if (id === '') {
      setTextError('Insira um identificador para a entrega.')
    } else if (id.length < 4) {
      setTextError('Insira um id válido de 4 números.')
    } else {
      const moneyGenerate = parseFloat((Math.random() * 70).toFixed(2))
      const minutesGenerate = Math.floor(Math.random() * 30).toFixed(0)
      navigation.navigate('Delivery', {
        id: id,
        moneyGenerate: moneyGenerate,
        minutes: minutesGenerate,
        setMoneyGain: setMoney,
        money: money,
        setAceitas: setAceitas,
        aceitas: aceitas,
        setRejeitadas: setRejeitadas,
        rejeitadas: rejeitadas,
        setTotal: setTotal,
        total: total
      })
      setTextError('')
      setId('')
      setEye('eye-off')
      setTotalGain('----')
    }
  }

  return (
    <SafeArea>
      <Container >
        <Main>
          <TotalDay>
            <ViewTotalGain>
              <TitleTotal>Ganhos do Dia</TitleTotal>
              <Data>{data}</Data>
            </ViewTotalGain>
            <ViewData>
              <MoneyTotal>{totalGain}</MoneyTotal>
              <EyeShow type="totalGain" eye={eye} onPress={showMoney} ></EyeShow>
            </ViewData>
          </TotalDay>
          <Cards type='resumo'>
            <TitleCards>Resumos das Entregas</TitleCards>
            <ViewCards>
              <CardsResumo>
                <TitleResumo>Aceitas</TitleResumo>
                <ContResumo>{aceitas}</ContResumo>
              </CardsResumo>
              <CardsResumo>
                <TitleResumo>Rejeitadas</TitleResumo>
                <ContResumo>{rejeitadas}</ContResumo>
              </CardsResumo>
              <CardsResumo>
                <TitleResumo>Total</TitleResumo>
                <ContResumo>{total}</ContResumo>
              </CardsResumo>
            </ViewCards>
          </Cards>
          <Cards type='entrega' behavior="padding">
            <TitleCards>Iniciar Nova Entrega</TitleCards>
            <Subtitle>Número de Identificação</Subtitle>
            <AreaInputs>
              <AreaInput >
                <Input value={id} keyboardType="numeric" maxLength={4} onChangeText={(text) => setId(text)} />
              </AreaInput>
              <TouchableOk onPress={() => sendInformations()}>
                <TextOk>Ok</TextOk>
              </TouchableOk>
            </AreaInputs>
            <TextMaybeError type="dashboard">{textError}</TextMaybeError>
            <Touchables type="icon" icon="qr-code-scanner" title="Escanear Qrcode" />
          </Cards>
        </Main>
      </Container>
    </SafeArea>
  )
}