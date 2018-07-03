import {
    StackNavigator,
    TabNavigator,
    TabBarBottom,
    Image
} from "react-navigation"
import HomePage from '../page/HomePage';
import React from 'react';

class TabBarComponent extends React.Component {
    constructor(props){
        super(props);
        this.theme = {
            tintColor: props.activeTintColor,
            updateTime: new Date().getTime()
        };
    }
    render(){
        const {routes, index} = this.props.navigationState;
        const {theme} = routes[index].params;
        if(theme && theme.updateTime>this.theme.updateTime){
            this.theme = theme;
        }
        return <TabBarBottom
            {...this.props}
            activeTintColor = {this.theme.tintColor || this.props.activeTintColor}
            />
    }
}

export const AppTabNavigator = TabNavigator({
    Page1: {
        screen:Page1,
        navigationOptions: {
            tabBarLabel: 'page1',//底部标题
            tabBarIcon: ({tintColor, focused}) => (//底部图标
                <Ionicons
                    name={focused?'ios-home':'ios-home-outline'}
                    size={26}
                    style={{color:tintColor}}
                    />
            ),
        }
    },
    Page2: {
        screen: Page2,
        navigationOptions: {
            tabBarLabel: 'Page2',
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={focused ? 'ios-people': 'ios-people-outline' }
                    size ={26}
                    style={{color: tintColor}}
                    />
            ),
        }
    },
    Page3: {
        screen: Page3,
        navigationOptions: {
            tabBarLabel: 'Page3',
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={focused ? 'ios-chatboxes': 'ios-chatboxes-outline' }
                    size ={26}
                    style={{color: tintColor}}
                    />
            ),
        }
    }
}, {
    //tabBarPosition: 'bottom',
    tabBarComponent: TabBarComponent,
    tabBarOptions: {
        activeTintColor: Platform.OS === 'ios' ? '#e91e61' : '#e64303',

    }
})
export const AppStackNavigator = StackNavigator({
    HomePage: {
        screen: HomePage
    },
    Page1: {
        screen: Page1,
        navigationOptions:({navigation})=>({
            title: `${navigation.state.params.name}页面名`,
        })
    },
    Page2: {
        screen: Page2,
        navigationOptions: {
            title: 'Page2'
        }
    },
    Page3: {
        screen: Page3,
        navigationOptions: (props) => {
            //
            //{"navigation":
            //    {"state":
            //        {"params":
            //            {"title":"Devio"},
            //            "routeName":"Page3",
            //            "key":"id-1530501050905-1"},
            //        "actions":{}
            //    },
            //    "screenProps":{},
            //    "navigationOptions":{}
            //}
            const {navigation} = props;
            const {state, setParams} = navigation;
            const {params} = state;
            return {
                title: params.title ? params.title : 'THIS IS Page3',
                headerRight: (
                    <Button
                        title={params.mode === 'edit'? '保存': '编辑'}
                        onPress={()=>{
                            setParams({mode: params.mode==='edit' ? '' : 'edit'})

                        }}
                        />
                )

            }
        }
    },
    TabNav:{
        screen: AppTabNavigator,
        navigationOptions: {
            title: 'THIS IS TabNavigator'
        }
    }
},{
    navigationOptions: {
        //header: null
    }
})