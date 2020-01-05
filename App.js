import React, { useState } from 'react'
import styled from 'styled-components/native'

const Container = styled.SafeAreaView`
  flex:1;
`
const ImageBack = styled.ImageBackground`
  flex:1;
  width:100%;
  align-items:center;
`
const Header = styled.View`
  width:100%;
  height:80px;
  justify-content:center;
  align-items:center;
`
const Title = styled.Text`
  font-size:30px;
  font-weight:bold;
  color:#45b0fb;
`
const ContainerInfo = styled.View`
  width:100%;
  height:120px;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  padding:20px;
`
const Area = styled.View`
  justify-content:center;
  align-items:center;
`
const TextArea = styled.Text`
  font-size:18px;
  color:#45b0fb;
  font-weight:bold;
`
const MetaText = styled.Text`
  font-size:18px;
  color:#45b0fb;
`
const ConsuText = styled.Text`
  font-size:18px;
  color:#45b0fb;
`
const StatusText = styled.Text`
  font-size:18px;
  color:#45b0fb;
`

const ContainerConsumo = styled.View`
  width:100%;
  height:140px;
  justify-content:center;
  align-items:center;
  margin-top:90px;
`
const Quantidade = styled.Text`
  font-size:80px;
  font-weight:bold;
  color:#FFF;
`
const ButtonCount = styled.TouchableOpacity`
  width:250px;
  height:60px;
  justify-content:center;
  align-items:center;
  border:2px solid #FFF;
  margin-top:150px;
  border-radius:25px;
`
const TitleButton = styled.Text`
  color:#FFF;
  font-size:18px;
`
const App = () => {
  const [consumo, setConsumo] = useState(0)
  const [status, setStatus] = useState('Ruim')
  const [qtdAgua, setQtdAgua] = useState(0)

  const atualizar = () => {
    let c = Math.floor((consumo/2000)*100)

    if (qtdAgua >= 100) {
      setStatus('Bom')
    }else{
      setStatus('Ruim')
    }

    setQtdAgua(c)
  }

  const drinkWater = () => {
    let c = consumo + 200
    setConsumo(c)

    atualizar()
  }

  return(
    <Container>
      <ImageBack source={require('./src/imgs/waterbg.png')}>
        <Header>
        <Title>Drink Water App</Title>
        </Header>
        <ContainerInfo>
          <Area>
            <TextArea>Meta</TextArea>
            <MetaText>2000ml</MetaText>
          </Area>
          <Area>
            <TextArea>Consumido</TextArea>
            <ConsuText>{ consumo }ml</ConsuText>
          </Area>
          <Area>
            <TextArea>Status</TextArea>
            <StatusText>{ status }</StatusText>
          </Area>
        </ContainerInfo>
        <ContainerConsumo>
          <Quantidade>{ qtdAgua }%</Quantidade>
        </ContainerConsumo>
        <ButtonCount onPress={drinkWater}>
          <TitleButton>Beber 200ml</TitleButton>
        </ButtonCount>
      </ImageBack>
    </Container>
  )
}

export default App