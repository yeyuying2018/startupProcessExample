/**
 * NavigationBar
 * @flow
 */
import React, {Component, PropTypes} from 'react';

import {
    StyleSheet,
    Text,
    View,
    AsyncStorage,
    TextInput
    } from 'react-native';
import NaviagtionBar from '../common/navigatorBar';
import Toast,{} from 'react-native-'
export default class AsyncStorageTest extends Component {

    constructor(props) {
        super(props);

    }
    onSave(){
        AsyncStorage.setItem(KEY, this.text,(error)=>{
            //保存成功
            if(!error){
                this.toast.show('保存成功', DURATION.LENGTH_LONG);
            }else{
                //保存失败
                this.toast.show('保存失败', DURATION.LENGTH_LONG);
            }
        })
    }
    onFetch(){
        AsyncStorage.getItem(KEY, (error, result)=>{
            //取出成功
            if(!error){
                if(result!=='' && result!==null ){
                    this.toast.show('取出的内容为：'+result, DURATION.LENGTH_LONG);
                }else{
                    this.toast.show('取出的内容不存在：'+result, DURATION.LENGTH_LONG);
                }
            }else{
                //取出失败
                this.toast.show('取出失败', DURATION.LENGTH_LONG);
            }
        })
    }
    onRmove(){
        AsyncStorage.removeItem(KEY, (error)=>{
            //删除成功
            if(!error){
                this.toast.show('删除成功', DURATION.LENGTH_LONG);
            }else{
                //删除失败
                this.toast.show('删除失败', DURATION.LENGTH_LONG);
            }
        })
    }
    render() {
        return(
            <View style={styles.container}>
                <NavigationBar
                    title='AsyncStorageTest的基本使用'
                    style={{backgroundColor: '#6495ED'}}
                />
                <View style={{flexDirection: row}}>
                    <TextInput
                        style={{borderWidth: 1, height: 40}}
                        onChange={(text)=>this.text=text}
                        />
                    <Text style={styles.tips}
                        onPress={()=>this.onSave()}
                    >保存</Text>
                    <Text style={styles.tips}
                          onPress={()=>this.onRemove()}
                    >移除</Text>
                    <Text style={styles.tips}
                          onPress={()=>this.onFetch()}
                     >取出</Text>
                </View>
                <Toast ref={toast=>this.toast=toast} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    tips: {
        fontSize: 18,
        margin: 5,
    }

})
