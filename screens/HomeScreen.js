import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Switch, Text } from 'react-native';
import ListItem from '../components/ListItem';
import AddItem from '../components/AddItem';
import CardItem from '../components/CardItem';

import DeleteConfirmationModal from '../components/DeleteConfirmationModal';
import * as Font from 'expo-font';

import { useSelector, useDispatch } from 'react-redux';




export default function HomeScreen({ navigation }) {
  const [fontsLoaded] = Font.useFonts({
    BodoniModa: require('../assets/fonts/BodoniModa.ttf'),
  });
  const items = useSelector(state => state.items);

  const [inputValue, setInputValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const [viewAsCard, setViewAsCard] = useState(false);

  if (!fontsLoaded) {
    return <View><Text>Cargando...</Text></View>;
  }

  const dispatch = useDispatch();

  const addItem = () => {
    if (inputValue.trim()) {
      const newItem = { id: Math.random().toString(), value: inputValue, completed: false };
      dispatch({ type: 'ADD_ITEM', payload: newItem });
    }
  };

  const deleteItem = (id) => {
    setSelectedId(id);
    setModalVisible(true);
  }

  const confirmDeleteItem = () => {
    dispatch({ type: 'DELETE_ITEM', payload: selectedId });
    setModalVisible(false);
  };


  const toggleComplete = (id) => {
    dispatch({ type: 'TOGGLE_COMPLETE', payload: id });
  };

  const renderItem = ({ item }) => (
    <ListItem item={item} toggleComplete={toggleComplete} deleteItem={deleteItem} navigation={navigation} />
  );

  const renderCardItem = ({ item }) => (
    <CardItem item={item} toggleComplete={toggleComplete} deleteItem={deleteItem} navigation={navigation} />
  );


  return (
    <View style={styles.container}>
      <DeleteConfirmationModal modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        confirmDeleteItem={confirmDeleteItem}
      />

      <AddItem inputValue={inputValue} setInputValue={setInputValue} addItem={addItem} />

      <View style={styles.switchContainer}>
        <Text>{viewAsCard ? 'Card View' : 'List View'}</Text>
        <Switch
          value={viewAsCard}
          onValueChange={() => setViewAsCard(previousState => !previousState)}
        />
      </View>

      {
        viewAsCard ?
          <FlatList
            data={items}
            renderItem={renderCardItem}
            keyExtractor={item => item.id}
          />
          :
          <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
      }
    </View >
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
  switchContainer: {
    flexDirection: 'row',
    // Justify end
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10,
  }
});
