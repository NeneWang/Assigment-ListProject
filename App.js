import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, TextInput, Button, StyleSheet, Modal } from 'react-native';
import ListItem from './components/ListItem';
import DeleteConfirmationModal from './components/DeleteConfirmationModal';


export default function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const addItem = () => {
    if (inputValue.trim()) {
      setItems([...items, { id: Math.random().toString(), value: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const deleteItem = (id) => {
    setSelectedId(id);
    setModalVisible(true);
  };

  const confirmDeleteItem = () => {
    setItems(items.filter(item => item.id !== selectedId));
    setModalVisible(false);
  };


  const toggleComplete = (id) => {
    setItems(
      items.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const renderItem = ({ item }) => (
    <ListItem item={item} toggleComplete={toggleComplete} deleteItem={deleteItem} />
  );

  return (
    <View style={styles.container}>
      <DeleteConfirmationModal modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        confirmDeleteItem={confirmDeleteItem}
      />
      <TextInput
        placeholder="Add new item"
        value={inputValue}
        onChangeText={setInputValue}
        style={styles.input}
      />
      <Button title="Add Item" onPress={addItem} />
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    paddingHorizontal: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
});
