import React, { Component } from "react";
import {
    AppRegistry,
    StyleSheet,
    View,
} from 'react-native';
import ActionBar from 'react-native-action-bar'

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#33cc33',
        flex: 1,
        paddingTop: 10,
        alignItems: 10,
        padding:10
    },
});

export class Main extends Component {
    render() {
        return (
            <View style={styles.screen}>
                <ActionBar
                    containerStyle={styles.bar}
                    backgroundColor='#33cc33'
                    rightIcons ={[{
                        name: 'menu',
                        onPress: () => console.log('menu clicked')
                    },
                    ]}
                />
            </View>
        );
    }
}
