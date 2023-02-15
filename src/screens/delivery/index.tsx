import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Touchables } from "../../components/Touchables";

import { SafeArea } from "../Home/style";

import {
  Container,
  Header,
  TitlesView,
  Titles,
  MainContents,
  Main,
  ViewMoney,
  TitleMoney,
  ViewBall,
  ViewLIne,
  ViewDeliveryIcon,
  Icon,
  ViewTexsIcon,
  TitleTextIcon,
  SubtitleTextIcon,
  MainContent,
  AreaLine,
  ViewEntrega,
  ViewEnderecos,
  ViewInformations,
  ViewSmallBall,
  TitlePedido,
  ViewSubtitles,
  SubtitlePedidos,
  Footer,
  TouchableReject,
  IconReject,
  TextReject,
} from "./style";

export function Delivery({ route }: any) {

  const [coleta, setColeta] = useState('')

  const [entrega, setEntrega] = useState('')

  const [coletaKm, setColetaKm] = useState(0)

  const [entregaKm, setEntregaKm] = useState(0)

  const restaurantes = [
    { restaurante: 'Restaurante Pimenta do Cheiro' },
    { restaurante: 'Restaurante Bucadim' },
    { restaurante: 'Bamboo Restaurante' },
    { restaurante: 'Tulipa Restaurante' },
    { restaurante: 'Restaurante Prato Cheio' },
  ]

  const enderecos = [
    { rua: 'Rua Cerejo Cruz, 583 - Centro' },
    { rua: 'R. Cristóvão Coelho, 512 - Mecejana' },
    { rua: 'R. Valério Magalhães, 382 - São Francisco' },
    { rua: 'R. Padre Caleri, 60 - São Francisco' },
    { rua: 'R. Angaricó, 228-402 - Aparecida' },
  ]

  useEffect(() => {
    navigation.addListener('focus', () => {
      const coletaIndex = parseFloat(Math.floor(Math.random() * 5).toFixed(0))
      const entregaIndex = parseFloat(Math.floor(Math.random() * 5).toFixed(0))

      const coletaKm = parseFloat(Math.floor(Math.random() * 7).toFixed(0))
      const entregaKm = parseFloat(Math.floor(Math.random() * 7).toFixed(0))

      setColetaKm(coletaKm + 1)
      setEntregaKm(entregaKm + 1)

      setColeta(restaurantes[coletaIndex].restaurante)
      setEntrega(enderecos[entregaIndex].rua)
    })
  }, [])

  const navigation = useNavigation()

  function accept() {
    route.params?.setMoneyGain(route.params?.money + route.params?.moneyGenerate)
    route.params?.setAceitas(route.params?.aceitas + 1)
    route.params?.setTotal(route.params?.total + 1)
    navigation.goBack()
  }


  function reject() {
    route.params?.setRejeitadas(route.params?.rejeitadas + 1)
    route.params?.setTotal(route.params?.total + 1)
    navigation.goBack()
  }

  return (
    <SafeArea>
      <Container>
        <Header>
          <TitlesView type="noBorder">
            <Titles>Tempo Estimado</Titles>
            <Titles>Número de ID</Titles>
          </TitlesView>
          <TitlesView type='border'>
            <MainContents>{route.params?.minutes} Min</MainContents>
            <MainContents>#{route.params?.id}</MainContents>
          </TitlesView>
        </Header>
        <Main>
          <ViewMoney>
            <Titles>Valor da Entrega</Titles>
            <TitleMoney>R$ {route.params?.moneyGenerate}</TitleMoney>
            <ViewDeliveryIcon>
              <Icon name='delivery-dining' />
              <ViewTexsIcon>
                <TitleTextIcon>Entrega</TitleTextIcon>
                <SubtitleTextIcon>Percurso Total: {coletaKm + entregaKm}km</SubtitleTextIcon>
              </ViewTexsIcon>
            </ViewDeliveryIcon>
            <MainContent>
              <AreaLine>
                <ViewLIne>
                  <ViewEntrega>
                    <ViewBall></ViewBall>
                    <ViewSmallBall></ViewSmallBall>
                  </ViewEntrega>
                  <ViewEntrega>
                    <ViewBall></ViewBall>
                    <ViewSmallBall></ViewSmallBall>
                  </ViewEntrega>
                </ViewLIne>
              </AreaLine>
              <ViewEnderecos>
                <ViewInformations>
                  <TitlePedido>Coleta</TitlePedido>
                  <ViewSubtitles>
                    <SubtitlePedidos>{coleta}</SubtitlePedidos>
                    <SubtitlePedidos>Distancia: {coletaKm}km</SubtitlePedidos>
                  </ViewSubtitles>
                </ViewInformations>
                <ViewInformations>
                  <TitlePedido>Entrega</TitlePedido>
                  <ViewSubtitles>
                    <SubtitlePedidos>{entrega}</SubtitlePedidos>
                    <SubtitlePedidos>Distancia: {entregaKm}km</SubtitlePedidos>
                  </ViewSubtitles>
                </ViewInformations>
              </ViewEnderecos>
            </MainContent>
          </ViewMoney>
        </Main>
        <Footer>
          <Touchables title="Aceitar" type="icon" icon="check" onPress={accept}></Touchables>
          <TouchableReject onPress={reject}>
            <IconReject name='close' />
            <TextReject >Rejeitar</TextReject>
          </TouchableReject>
        </Footer>
      </Container>
    </SafeArea>
  )
}