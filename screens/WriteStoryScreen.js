import * as React from 'react';
import {Text,View,StyleSheet,TouchableOpacity,TextInput} from 'react-native';

export default class WriteStory extends React.Component{
    constructor(props){
        super(props);
        this.state={
                textEntered:'',
                Title:'',
                
        }
    }

    render(){
        return(
            <View>
                <TouchableOpacity>
                    <Text 
                    style={styles.body}>StoryHub</Text>
                </TouchableOpacity>

                <TextInput
                value={this.state.title}
                placeholder="Title"
                onChangeText={(text)=>{
                    this.setState({
                        Title:text
                    })
                }}
                />
                

                <TextInput
                value={this.state.textEntered}
                placeholder="Story"
                onChangeText={(text)=>{
                    this.setState({
                        textEntered:text
                    })
                }}
                placeholderTextColor='black'
                multiline={true}
                />


            </View>
        )
    }
}


const styles = StyleSheet.create({
    body:{
        backgroundColor:'pink',
        color:'black',
        textAlign:'center',
        alignSelf:'center',
        borderWidth:2,
        borderRadius:15,

    },
})