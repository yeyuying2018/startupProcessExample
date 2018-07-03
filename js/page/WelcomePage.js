import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import NavigationBar from '../common/Navigation;
import HomePage from './HomePage';

export default class WelcomePage extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.timer = setTimeout(()=>{
            this.props.navigator.resetTo({
                component: HomePage
            })
        }, 2000)
    }
    componentWillMount(){
        this.timer && clearTimeout(this.timer);
    }
    render(){
        return (
            <View style={styles.container}>
                <navigationBar
                    title="欢迎"
                    style={{backgroundColor:'#6495ED' }} />
                <Text style={styles.tips}>欢迎</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    tips: {
        fontSize: 29
    }
})