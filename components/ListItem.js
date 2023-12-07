import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ListItem = ({ item, toggleComplete, deleteItem}) => (
    <View style={styles.listItem}  >
        <Text    onPress={() => toggleComplete(item.id)} style={[styles.itemText, item.completed ? styles.itemCompleted : null]}>{item.value}</Text>
        <Button title="Delete" onPress={() => deleteItem(item.id)} />
    </View>
);


const styles = StyleSheet.create({
    itemText: {
        flex: 1,
    },  
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
    },
    itemCompleted: {
        textDecorationLine: 'line-through',
    },
});
export default ListItem;