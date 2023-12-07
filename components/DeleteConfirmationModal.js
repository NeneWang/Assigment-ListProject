import React from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

const DeleteConfirmationModal = ({ modalVisible, setModalVisible, confirmDeleteItem }) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
      setModalVisible(!modalVisible);
    }}
  >
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Are you sure you want to delete this item?</Text>
        <View style={styles.dialogOptions}>
          <Button title="Yes" onPress={confirmDeleteItem} />
          <Button title="No" onPress={() => setModalVisible(false)} />
        </View>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    width: '80%',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  dialogOptions: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-between',
  }
});

export default DeleteConfirmationModal;