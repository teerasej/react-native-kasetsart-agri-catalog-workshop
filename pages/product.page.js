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

export default class ProductPage extends React.Component {

    state = {
        products: []
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('group_n'),
            headerStyle: {
                backgroundColor: 'green',
            },
            headerTintColor: 'white'
        };
    }

    componentDidMount() {
        let category = this.props.navigation.state.params;
        console.log('กำลังแสดงสินค้าของ', category.group_n);

        this.setState({
            products: category.data
        })
    }

    itemSelected = (product) => {
        console.log('เลือกแล้ว', product.name);
        // alert(product.group_n);
        this.props.navigation.navigate('Market', product );
    }

    render() {

        return (

            <Container>

                <Content>
                    <List dataArray={this.state.products}
                        renderRow={(product) => {

                            return (
                                <ListItem thumbnail onPress={() => { this.itemSelected(product) }}>
                                    <Left>
                                        <Thumbnail
                                            square
                                            source={{ uri: 'http://aginfo.oae.go.th/Mobile_App_php/' + product.image_p }} />
                                    </Left>
                                    <Body>
                                        <Text>{product.name}</Text>
                                        {/* <Text note>{product.group_c}</Text> */}
                                    </Body>
                                </ListItem>
                            )
                        }}
                    >

                    </List>
                </Content>

            </Container>

        )
    }
}

const styles = StyleSheet.create({})
