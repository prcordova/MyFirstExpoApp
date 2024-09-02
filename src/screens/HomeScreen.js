import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Switch,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Container from "../components/Container";

export default function HomeScreen({ navigation }) {
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("por fazer");
  const [isCompleted, setIsCompleted] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleCreateTask = () => {
    const newTask = {
      id: tasks.length + 1,
      task,
      status,
      isCompleted,
    };
    setTasks([...tasks, newTask]);
    setTask("");
    setStatus("por fazer");
    setIsCompleted(false);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEditTask = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    setTask(taskToEdit.task);
    setStatus(taskToEdit.status);
    setIsCompleted(taskToEdit.isCompleted);
    handleDeleteTask(id);
  };

  const handleToggleCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const handleChangeStatus = (id, newStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <Container>
      <Text style={styles.title}>Criação de Tarefas</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite a tarefa"
        value={task}
        onChangeText={setTask}
      />

      <Text style={styles.label}>Status:</Text>
      <Picker
        selectedValue={status}
        style={styles.picker}
        onValueChange={(itemValue) => setStatus(itemValue)}
      >
        <Picker.Item label="Por fazer" value="por fazer" />
        <Picker.Item label="Fazendo" value="fazendo" />
        <Picker.Item label="Feito" value="feito" />
        <Picker.Item label="Cancelada" value="cancelada" />
      </Picker>

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Concluída:</Text>
        <Switch value={isCompleted} onValueChange={setIsCompleted} />
      </View>

      <Button title="Criar Tarefa" onPress={handleCreateTask} />

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>{item.task}</Text>
            <Text style={styles.taskStatus}>{item.status}</Text>
            <Text style={styles.taskCompleted}>
              {item.isCompleted ? "Concluída" : "Não Concluída"}
            </Text>
            <View style={styles.actions}>
              <Button title="Editar" onPress={() => handleEditTask(item.id)} />
              <Button
                title="Excluir"
                onPress={() => handleDeleteTask(item.id)}
              />
              <Button
                title="Toggle"
                onPress={() => handleToggleCompletion(item.id)}
              />
              <Picker
                selectedValue={item.status}
                style={styles.picker}
                onValueChange={(newStatus) =>
                  handleChangeStatus(item.id, newStatus)
                }
              >
                <Picker.Item label="Por fazer" value="por fazer" />
                <Picker.Item label="Fazendo" value="fazendo" />
                <Picker.Item label="Feito" value="feito" />
                <Picker.Item label="Cancelada" value="cancelada" />
              </Picker>
            </View>
          </View>
        )}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: "100%",
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  taskItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  taskText: {
    fontSize: 18,
  },
  taskStatus: {
    fontSize: 14,
    color: "gray",
  },
  taskCompleted: {
    fontSize: 14,
    color: "green",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
