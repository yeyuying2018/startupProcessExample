import React, {Component} from 'react';
import {
    Naviagtor
} from 'react-native';
import WelcomePage from './WelcomePage';

function setup(){
    class Root extends Component {
        renderScene(route, navigator){
            let Component = route.component;
            return <Component {...route.params} navigator={navigator} />
        }
        render(){
            return <Navigator
                initialRoute = {{component: WelcomePage}}
                renderScene = {(route, navigator)=>this.renderScene(route, navigator)}
                />
        }
    }
}