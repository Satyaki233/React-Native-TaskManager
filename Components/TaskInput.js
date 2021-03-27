import React,{useState} from 'react'
import {View,Text,StyleSheet,TextInput,Button,Modal} from 'react-native'

const TaskInput = ({onAddTask,visible,onCancel}) => {

    const [task , setTask ] = useState("");
   

    
  const taskAdd =(enteredText)=>{
    setTask(enteredText);
 }

    return (
      <Modal visible={visible} animationType="slide">
        <View style={styles.content}>
        <TextInput
          style={styles.textInput}
          placeholder="Type here"
          onChangeText={taskAdd}
          value={task}
        />
        <View style={styles.inputButton}>
          <Button 
        title="ADD" 
        onPress={() =>{
            onAddTask(task) 
            setTask("")
            onCancel()
          }}
        />
        <Button
        title="cancel"
        onPress={onCancel}
        />
        </View>
       
      </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
    content:
    {
    flex:1,
    justifyContent:'center', 
    alignItems:'center'
    },
    textInput:{
        width:'80%',
        borderColor:'black',
        borderWidth:2,
        margin:10
    },
    inputButton:{
      flexDirection:'row',
      width:"80%",
      justifyContent:'space-between',
      alignItems:'center',
    }
    
})

export default TaskInput
