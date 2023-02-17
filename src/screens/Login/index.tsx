import React, { useEffect, useState } from "react";
import { TouchableOpacity, Modal, ActivityIndicator } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'

import { Inputs } from '../../components/TextInputs'
import { EyeShow } from "../../components/EyesShows";
import { Touchables } from "../../components/TouchablesOpacitys";
import { PropsStack } from "../../models";

import {
  SafeArea,
  ContentModal,
  Container,
  Header,
  ImageLogo,
  Title,
  Main,
  TitleLogin,
  TitleInputs,
  ContainerInput,
  TextMaybeError,
  ForgetPassword,
  Create,
  TextQuestion,
  Footer,
  ViewSeparate,
  TextLoginWithGoogle,
  Line,
  ViewTouchGoogle,
  LogoGoogle,
  TextTouchGoogle,
} from "./style";

export function Home() {

  const navigation = useNavigation<PropsStack>()

  const [hideModal, setHideModal] = useState(false)
  const [opacityContainer, setOpacityContainer] = useState('opacityOff')

  useEffect(() => {
    setHideModal(true)
    setOpacityContainer('opacityOn')
    async function load() {
      const emailLoad = await AsyncStorage.getItem('email')
      const senhaLoad = await AsyncStorage.getItem('senha')
      setHideModal(false)
      setOpacityContainer('opacityOff')
      if (emailLoad != '' && senhaLoad != '') {
        navigation.navigate('Dashboard')
      }
    }
    load()
  }, [])

  const [emailError, setEmailError] = useState('')
  const [senhaError, setSenhaError] = useState('')

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  function autentication() {
    if (email === '' || senha === '') {
      setEmailError('Preencha as informações para continuar')
      setSenhaError('Preencha as informações para continuar')
    } else if (!email.includes('@')) {
      setEmailError('Email inválido, não há "@".')
    } else if (!email.includes('.com')) {
      setEmailError('Email inválido, não há ".com"')
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
    }
  }

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

  return (
    <SafeArea>
      <Modal visible={hideModal} transparent={true} >
        <ContentModal>
          <ActivityIndicator size={45} color={'#FA641E'} />
        </ContentModal>
      </Modal>
      <Container opacity={opacityContainer}>
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
            <TextQuestion color="black">Não tem uma Conta? </TextQuestion>
            <TouchableOpacity>
              <TextQuestion color='orange'>Criar agora!</TextQuestion>
            </TouchableOpacity>
          </Create>
          <Footer>
            <ViewSeparate>
              <TextLoginWithGoogle>Entrar com</TextLoginWithGoogle>
              <Line></Line>
            </ViewSeparate>
            <ViewTouchGoogle>
              <LogoGoogle />
              <TextTouchGoogle>Continuar com o Google</TextTouchGoogle>
            </ViewTouchGoogle>
          </Footer>
        </Main>
      </Container>
    </SafeArea>
  )
}