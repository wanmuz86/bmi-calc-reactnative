import React, {useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableHighlight,Keyboard,Touchable } from 'react-native';

export default function App() {
  const [height,setHeight] = useState(0)
  const [weight,setWeight] = useState(0)
  const [bmi, setBmi] = useState(0)
  const [indicator, setIndicator] = useState('')
  const calculateBmi = () => {
    let bmic = weight / ((height/100)**2)
    setBmi(bmic.toFixed(1))
    if (bmic < 18){
      setIndicator("Underweight")
    }
    else if (bmic < 25){
      setIndicator("Normal")
    }
    else if (bmic < 30){
      setIndicator("Overweight")
    }
    else {
      setIndicator("Obese")
    }
  }

  return (
   <TouchableHighlight onPress={Keyboard.dismiss}>
    <ImageBackground source={require('./assets/bg.png') }style={{width:'100%', height:'100%'}}>
    <View style={styles.container}>
      <Text style={styles.headingText}>BMI Calculator</Text>
  
  {/* Almost similar to div class row */}
    <View style={{flexDirection:'row'}}>
      <TextInput 
      placeholder="Height"
      keyboardType="numeric"
      style={styles.textInputStyle}
      value={height}
      onChangeText={text=> setHeight(text)}
      />
      <TextInput 
      placeholder="Weight"
      keyboardType="numeric"
      style={styles.textInputStyle}
      value={weight}
      onChangeText={text=>setWeight(text)}
      />
    </View>
    <TouchableHighlight onPress={calculateBmi}>
      <Text style={{textAlign:'center',fontSize:30,color:'orange',padding:30}}>Calculate</Text>
    </TouchableHighlight>
  <Text style={styles.textStyle}>{bmi}</Text>
    <Text style={styles.textStyle}>{indicator}</Text>
    </View>
    </ImageBackground>
    </TouchableHighlight>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  headingText: {
    color:'yellow',
    marginTop:30,
    textAlign:'center',
    fontSize:30
    
  },
  textInputStyle:{
    height:80,
    textAlign:"center",
    width:'50%',
    fontSize:50,
    marginTop:24,
    color:'yellow'
  },
  textStyle: {textAlign:'center',fontSize:30,color:'yellow',padding:30}
});
