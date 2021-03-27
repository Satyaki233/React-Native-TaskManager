

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, FlatList } from 'react-native';
import TaskInput from './Components/TaskInput';
import TaskItem from './Components/TaskItem'

const App = () => {

 
  const [taskManager , setTaskManager ] = useState([]);
  const [isAddMode,setisAddMode] = useState(false);



  const taskManagerAdd = taskTitle =>{
    setTaskManager(currentTask => [...currentTask,{key:Math.random().toString(),value:taskTitle}])
  }

  const taskManagerDel = (taskId) =>{
    setTaskManager(currentTask =>{
      return(
        currentTask.filter((task) =>task.key !== taskId)
      )
    })
  }

  const activeModal = () =>{
    setisAddMode(isAddMode => true);
  }

  const onCancel =()=>{
    setisAddMode(isAddMode => false)
  }
  

  return (
    <View style={styles.container}>
      <Button title="Add Task" onPress={activeModal}/>
     <TaskInput onAddTask={taskManagerAdd} visible={isAddMode} onCancel={onCancel}  />
{/* ---------------Ountput  Section------------------ */}  
      <View>
        <FlatList data={taskManager}
        renderItem={Itemdata =>
             <TaskItem content={Itemdata.item.value} Id={Itemdata.item.key} onDel={taskManagerDel} />
}/>
     
      </View>   
    </View>
  );
};

export default App;

// React Native Styles
const styles = StyleSheet.create({
  container: {
   padding: 50
  }

});