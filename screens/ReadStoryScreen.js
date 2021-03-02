import * as React from 'react';
import {Text,View,StyleSheet} from 'react-native';

export default class ReadStory extends React.Component{
    
    render(){
        return(
            <View>
                <Text style={styles.body}>Read Story</Text>
            </View>
        )
    }
}
const styles=StyleSheet.create({
        body:{
            color:'pink',
            backgroundColor:'black',
            textAlign:'center'
        }
})

