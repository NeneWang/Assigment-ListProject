import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Camera } from 'expo-camera';

export default function DetailsScreen({ route }) {
  const { task } = route.params;
  const [hasPermission, setHasPermission] = useState(null);
  const [photoUri, setPhotoUri] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setPhotoUri(photo.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Details</Text>
      <View style={styles.taskContainer}>
        <Text style={styles.taskTitle}>{task.value}</Text>
        <Text style={styles.taskStatus}>Status: {task.completed ? 'Completed' : 'Incomplete'}</Text>
      </View>
      {hasPermission === null ? (
        <Text>Requesting camera permission...</Text>
      ) : hasPermission === false ? (
        <Text>No access to camera</Text>
      ) : (
        <View>
          <Camera style={styles.camera} ref={cameraRef} />
          <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
            <Text style={styles.captureButtonText}>CAPTURE</Text>
          </TouchableOpacity>
          {photoUri && <Image source={{ uri: photoUri }} style={styles.takenImage} />}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  taskContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  taskTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  taskStatus: {
    fontSize: 16,
    color: 'gray',
  },
  camera: {
    height: 200,
    width: '100%',
  },
  captureButton: {
    backgroundColor: 'white',
    borderRadius: 35,
    padding: 15,
    alignSelf: 'center',
    margin: 20,
  },
  captureButtonText: {
    fontSize: 18,
  },
  takenImage: {
    width: '100%',
    height: 200,
    marginTop: 20,
    borderRadius: 10,
  },
});
