import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [text, onChangeText] = useState("");
  const [tasks, setTasks] = useState(["task1", "task2"]);

  function addTask(task) {
    setTasks([...tasks, task]);
    onChangeText("");
  }

  function deleteTask(task) {
    const updatedTasks = tasks.filter((item) => item !== task);
    setTasks(updatedTasks);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={text}
          onChangeText={onChangeText}
          style={styles.textInput}>
        </TextInput>

        <TouchableOpacity style={styles.button} onPress={() => {addTask(text)}}>
          <Text style={styles.buttonTitle}> add </Text>
        </TouchableOpacity>
      </View>
  

      <FlatList
        data={tasks}
        renderItem={({ item }) => <View style={styles.task}>
            <Text>{item}</Text>
            <TouchableOpacity onPress={() => deleteTask(item)}>
              <Text style={styles.deleteButtonTitle}> delete </Text>
            </TouchableOpacity>
          </View>}
        keyExtractor={(item, index) => index.toString()}>
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
  },
  textInput: {
    width: 200,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 15, 
    marginTop: 60,
  },
  button: {
    backgroundColor: '#3AB09E',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 60,
    marginBottom: 15,
    marginLeft: 10,
  },
  buttonTitle: {
    color: '#FEFEFA'
  },
  task: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-between'
  },
  deleteButtonTitle: {
    color: '#318CE7'
  },
  deleteButton: {
    marginLeft: 5,
  }
});
