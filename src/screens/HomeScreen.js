import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";


const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>SAamii</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Go to Components Demo"
      />

      <Button

        title="Go To List Demo"
        onPress={() => navigation.navigate('List')}
      />
      
        <Button

title="Go To Image Demo"
onPress={() => navigation.navigate('Image')}
/>
        <Button

title="Go To Counter Demo"
onPress={() => navigation.navigate('CounterScreen')}
/> <Button
title="Go To Color Demo"
onPress={() => navigation.navigate('Color')}
/>
 <Button title="Go To Square Demo"
onPress={() => navigation.navigate('Square')}
/>
 <Button title="Go To Text Demo"
onPress={() => navigation.navigate('Text')}
/>
 <Button title="Go To Box Demo"
onPress={() => navigation.navigate('Box')}
/>

    </View>
  )
};

const styles = StyleSheet.create({
  textstyle: {
    fontSize: 0
  }
});

export default HomeScreen;
