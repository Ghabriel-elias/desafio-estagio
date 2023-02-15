import React, { useEffect, useState } from "react";
import { TouchableOpacity, Modal, ActivityIndicator, View } from "react-native";
import { Inputs } from "../../components/inputs";
import { EyeShow } from "../../components/showPassword";
import { Touchables } from "../../components/Touchables";
import { useNavigation } from '@react-navigation/native'

import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  ContentModal,
  Container,
  ContainerInput,
  Footer,
  Header,
  ImageLogo,
  Main,
  SafeArea,
  Title,
  TextMaybeError,
  TitleInputs,
  TitleLogin,
  ForgetPassword,
  Create,
  TextQuestion,
  TextCreat,
  ViewSeparate,
  TextLogin,
  Line,
  ViewTouchGoogle,
  LogoGoogle,
  TextTouchGoogle,
} from "./style";

export function Home() {

  const [hideModal, setHideModal] = useState(false)
  const [opacityContainer, setOpacityContainer] = useState(1)

  const [emailError, setEmailError] = useState('')
  const [senhaError, setSenhaError] = useState('')

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  useEffect(() => {
    setHideModal(true)
    setOpacityContainer(0.4)
    async function load() {
      const emailLoad = await AsyncStorage.getItem('email')
      const senhaLoad = await AsyncStorage.getItem('senha')
      setHideModal(false)
      setOpacityContainer(1)
      if (emailLoad != '' && senhaLoad != '') {
        navigation.navigate('Dashboard')
      }
    }
    load()
  }, [])

  const navigation: any = useNavigation()

  const [hidePassword, setHidePassword] = useState(true)
  const [eye, setEye] = useState('eye-off')

  function showPass() {
    if (eye === 'eye') {
      setEye('eye-off')
      setHidePassword(true)
    } else {
      setEye('eye')
      setHidePassword(false)
    }
  }

  function autentication() {
    if (email === '' || senha === '') {
      setEmailError('Preencha as informações para continuar')
      setSenhaError('Preencha as informações para continuar')
      return
    } else if (!email.includes('@')) {
      setEmailError('Email inválido, não há "@".')
      return
    } else if (!email.includes('.com')) {
      setEmailError('Email inválido, não há ".com"')
      return
    } else if (senha.length < 7) {
      setSenhaError('A senha deve conter no mínimo 8 caracteres.')
    } else {
      navigation.navigate("Dashboard")
      async function registrarUsuario() {
        await AsyncStorage.setItem('email', email)
        await AsyncStorage.setItem('senha', senha)
      }
      registrarUsuario()
      setEmailError('')
      setSenhaError('')
      return
    }
  }

  return (
    <SafeArea>
      <Modal visible={hideModal} transparent={true} >
        <ContentModal>
          <ActivityIndicator size={45} color={'#FA641E'} />
        </ContentModal>
      </Modal>
      <Container style={{ opacity: opacityContainer }}>
        <Header>
          <ImageLogo />
          <Title>Para entregadores</Title>
        </Header>
        <Main>
          <TitleLogin>Login</TitleLogin>
          <TitleInputs>Email ou telefone</TitleInputs>
          <ContainerInput>
            <Inputs value={email} placeholder="Ex: email@email.com" onChangeText={(text) => setEmail(text)} ></Inputs>
          </ContainerInput>
          <TextMaybeError type="login">{emailError}</TextMaybeError>
          <TitleInputs>Senha</TitleInputs>
          <ContainerInput>
            <Inputs value={senha} onChangeText={(text) => setSenha(text)} secureTextEntry={hidePassword} textContentType="password"></Inputs>
            <EyeShow eye={eye} type='password' onPress={showPass}></EyeShow>
          </ContainerInput>
          <TextMaybeError type="login">{senhaError}</TextMaybeError>
          <TouchableOpacity>
            <ForgetPassword>Esqueci minha senha</ForgetPassword>
          </TouchableOpacity>
          <Touchables icon="" type="noIcon" title="Entrar" onPress={autentication}></Touchables>
          <Create>
            <TextQuestion>Não tem uma Conta? </TextQuestion>
            <TouchableOpacity>
              <TextCreat>Criar agora!</TextCreat>
            </TouchableOpacity>
          </Create>
          <Footer>
            <ViewSeparate>
              <TextLogin>Entrar com</TextLogin>
              <Line></Line>
            </ViewSeparate>
            <ViewTouchGoogle>
              <LogoGoogle source={require('../../assets/logo-google.png')} />
              <TextTouchGoogle>Continuar com o Google</TextTouchGoogle>
            </ViewTouchGoogle>
          </Footer>
        </Main>
      </Container>
    </SafeArea>
  )
}