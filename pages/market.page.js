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

export default class MarketPage extends React.Component {

    state = {
        markets: [],
        unitPrice: ""
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('name'),
            headerStyle: {
                backgroundColor: 'green',
            },
            headerTintColor: 'white'
        };
    }

    componentDidMount() {
        let product = this.props.navigation.state.params;
        console.log('กำลังแสดงสินค้าของ', product.type);

        this.setState({
            markets: product.type,
            unitPrice: product.unit
        })
    }

    render() {

        let content;

        if(this.state.markets == null){
            content = (<Text>ไม่มีข้อมูลตลาดตอนนี้นะจ๊ะ</Text>);
        } else {
            content = (
                <List dataArray={this.state.markets}
                        renderRow={(market) => {

                            return (
                                <ListItem thumbnail onPress={() => { this.itemSelected(market) }}>
                                    {/* <Left>
                                        <Thumbnail
                                            square
                                            source={{ uri: 'http://aginfo.oae.go.th/Mobile_App_php/' + market.image_p }} />
                                    </Left> */}
                                    <Body>
                                        <Text>{market.marketname}</Text>
                                        <Text note>ราคา {market.price} {this.state.unitPrice} เมื่อวันที่ {market.daily}</Text>
                                    </Body>
                                </ListItem>
                            )
                        }}
                    >

                    </List>
            );
        }



        return (

            <Container>

                <Content>
                    {content}   
                </Content>

            </Container>

        )
    }
}

const styles = StyleSheet.create({})
