import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import CommonStyles from './CommonStyles';

const ListItem = ({ item, toggleComplete, deleteItem, navigation }) => (
    <View style={CommonStyles.listItem}  >
        <Text
            onPress={() => {
                toggleComplete(item.id);
            }}
            style={[CommonStyles.itemText, item.completed ? CommonStyles.itemCompleted : null]}
        >
            {item.value}
        </Text>
        <Button title="Details" onPress={() => navigation.navigate('Details', {task: item})}></Button>
        {/* Create a snakk soace */}
        <Text> </Text>
        <Button title="Delete" onPress={() => deleteItem(item.id)} />
    </View>
);
export default ListItem;