import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'

const TaskItem = ({content , onDel,Id}) => {
    return (
    <TouchableOpacity onPress={onDel.bind(this, Id)}>
    <View  style={styles.listitem}>
        <Text>
        {content}
        </Text>
    </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listitem:{
        padding:10,
        marginVertical:10,
        justifyContent:'center',
        backgroundColor:'#f0dfe4',
        borderRadius:20
        
      }
    
})

export default TaskItem
