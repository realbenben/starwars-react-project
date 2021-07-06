import React from "react"
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import FeedScreen from '../screens/FeedScreen'
import { data } from "../api/data";
import { View, SafeAreaView, FlatList } from "react-native";


const App = () => {
const renderItem = ({item}) =>{
console.log(item.name)
return(
  <View>
    <Card>
    <Card.Title title={item.name} subtitle={item.model}/>
    <Card.Content>
      <Paragraph>manufacturer: {item.manufacturer}</Paragraph>
      <Paragraph>cost in credits: {item.cost_in_credits}</Paragraph>
      <Paragraph>length: {item.length}</Paragraph>
      <Paragraph>max atmosphering speed: {item.max_atmosphering_speed}</Paragraph>
      <Paragraph>crew: {item.crew}</Paragraph>
      <Paragraph>passengers: {item.passengers}</Paragraph>
      <Paragraph>cargo_capacity: {item.cargo_capacity}</Paragraph>
      <Paragraph>consumables: {item.consumables}</Paragraph>
      <Paragraph>hyperdrive rating: {item.hyperdrive_rating}</Paragraph>
      <Paragraph>MGLT: {item.MGLT}</Paragraph>
      <Paragraph>starship class: {item.starship_class}</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Buy the spaceship</Button>
    </Card.Actions>
  </Card>
  </View>
)
}
  return(
  <SafeAreaView >
    <View>
      <FlatList
        data={data.results}
        renderItem={renderItem}
        keyExtractor={item => item.name}
        />
    </View>
  </SafeAreaView>
)};



export default App;
