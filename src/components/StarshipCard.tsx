import React from "react"
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import FeedScreen from '../screens/FeedScreen'
import { data } from "../api/data";

const StarCard = () =>(
    <Card>
    <Card.Title title="item.name" subtitle="Card Subtitle" />
    <Card.Content>
      <Title>'hello !'</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
)
