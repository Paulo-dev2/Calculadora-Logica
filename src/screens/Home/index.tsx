
import React, { useState } from 'react';
import { SafeAreaView, StatusBar, View, Text } from 'react-native';
import { styles } from './styles';
import Row from '../../components/Row';
import { Button } from '../../components/Button';
import calculator from '../../util/calculator';
import { setTruthTable, setTableHeader } from '../../redux/action';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

function Home() {
  const [result, setResult] = useState<Boolean>(false)
  const [expressao, setExpressao] = useState("");
  const dispatch = useDispatch();
  const navigation  = useNavigation();
  const error: string = "Invalid Expression"

  const handleTap = (type: string, value: String = "" ) => {
    if(type == "clear") setExpressao("")
    if(type == "del") setExpressao(prevState => prevState.slice(0, -1))
    setExpressao(prevState => prevState + value);
  };

  const handleTapResult = () => {
    const result = calculator(expressao)
    if (!result) {
      setResult(false);
      return;
    }
    dispatch(setTruthTable(result.truthTable)); // Despachando a ação setTruthTable
    dispatch(setTableHeader(result.tableHeader)); // Despachando a ação setTableHeader
    setResult(true);
    navigation.navigate('Tabela')

  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{marginBottom: 50}}>
           <Text style={styles.value}>
           {expressao}
         </Text>
         <Row>
           <Button
             text="AC"
             theme="accent"
             onPress={() => handleTap("clear")}
           />
           <Button
             text="DEL"
             theme="accent"
             onPress={() => handleTap("del")}
           />
           <Button
             text="="
             theme="accent"
             onPress={() => handleTapResult()}
           />
         </Row>
 
         <Row>
           <Button text="P" onPress={() => handleTap("number", "P")} theme="secondary"/>
           <Button text="Q" onPress={() => handleTap("number", "Q")} theme="secondary"/>
           <Button text="R" onPress={() => handleTap("number", 'R')} theme="secondary"/>
           <Button text="S" onPress={() => handleTap("number", "S")} theme="secondary"/>
         </Row>
 
         <Row>
           <Button text="~" onPress={() => handleTap("number", "~")} />
           <Button text="^" onPress={() => handleTap("number", "^")} />
           <Button text="V" onPress={() => handleTap("number", "V")} />
           <Button text="->" onPress={() => handleTap("number", "->")} />
         </Row>
 
         <Row>
           <Button text="<->" onPress={() => handleTap("number", "<->")} />
           <Button text="(" onPress={() => handleTap("number", "(")} />
           <Button text=")" onPress={() => handleTap("number", ")")} />
         </Row>
      </SafeAreaView>
    </View>
  );
};

export default Home;
