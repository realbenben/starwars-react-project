import React from "react";
import { SafeAreaView, StyleSheet, Text, StatusBar, View, FlatList } from "react-native";

import { data } from "../api/data";


const App = () => {
const renderItem = ({item}) =>{
console.log(item.name)
return(
  <View>
    <Text>
      {item.name}
      {item.model}
    </Text>
  </View>
)
}
  return(
  <SafeAreaView style={styles.safeContainer}>
    <View style={styles.container}>
      <FlatList
        data={data.results}
        renderItem={renderItem}
        keyExtractor={item => item.name}
        />
    </View>
  </SafeAreaView>
)};


export default App;

