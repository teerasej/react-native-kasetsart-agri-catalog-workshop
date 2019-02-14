import React from "react";
import { StyleSheet, View, Alert } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Form,
  Item,
  Input,
  Label,
  List,
  ListItem,
  Thumbnail
} from "native-base";

export default class App extends React.Component {

  state = {
    items: [],
    loading: true,
  }


  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    console.log('เริ่มแอพ...');

    let response = await fetch("http://aginfo.oae.go.th/Mobile_App_php/json/day.php");
    // console.log(response);
    let json = await response.json();
    console.log(json)

    this.setState({
      items: json
    })
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ loading: false });
  }


  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }

    return (
      <Container>
        <Header>
          <Body>
            <Title>Contact Book</Title>
          </Body>
        </Header>
        <Content>

          <List dataArray={this.state.items}
            renderRow={(rowData) => {
              return (
                <ListItem thumbnail>
                  <Left>
                    <Thumbnail square source={ { uri: rowData.image_g } } />
                  </Left>
                  <Body>
                    <Text>{rowData.group_c} {rowData.group_n}</Text>
                    <Text note>{rowData.phone}</Text>
                  </Body> 
                </ListItem>
              )
            }}
          >

          </List>

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  itemFont: {
    color: 'green'
  }
})