import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailsScreen({ route }) {
  const { task } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Details</Text>
      <View style={styles.taskContainer}>
        <Text style={styles.taskTitle}>{task.value}</Text>
        <Text style={styles.taskStatus}>Status: {task.completed ? 'Completed' : 'Incomplete'}</Text>
      </View>
    </View>
  );
};

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
});