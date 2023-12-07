import React from 'react'

import { Button, TextInput, StyleSheet } from 'react-native'

function AddItem({ inputValue, setInputValue, addItem }) {
    return (
        <>
            <TextInput
                placeholder="Add new item"
                value={inputValue}
                onChangeText={setInputValue}
                style={styles.input}
            />
            <Button title="Add Item" onPress={addItem} />

        </>
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 15,
        fontSize: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        marginBottom: 20,
    }
})

export default AddItem