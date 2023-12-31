import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import CommonStyles from './CommonStyles';



function CardItem({ item, toggleComplete, deleteItem, navigation }) {
    return (
        <View style={CommonStyles.card}>
            <Text onPress={() => toggleComplete(item.id)} style={[CommonStyles.cardTitle, item.completed ? CommonStyles.itemCompleted : null]}>
                {item.value}
            </Text>

            <Button title="Details" onPress={() => navigation.navigate('Details', { task: item })}></Button>
            {/* Create a snakk soace */}
            <Text> </Text>
            <Button title="Delete" onPress={() => deleteItem(item.id)} />
        </View>
    );
}

export default CardItem;