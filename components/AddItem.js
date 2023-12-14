import React from 'react'
import CommonStyles from './CommonStyles'

import { Button, TextInput, StyleSheet } from 'react-native'

function AddItem({ inputValue, setInputValue, addItem }) {
    return (
        <>
            <TextInput
                placeholder="Add new item"
                value={inputValue}
                onChangeText={setInputValue}
                style={CommonStyles.listInput}
            />
            <Button title="Add Item" onPress={addItem} />

        </>
    )
}


export default AddItem