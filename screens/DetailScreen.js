import React from 'react';
import { View, Text } from 'react-native';

export default function DetailsScreen({ route }) {
  const { task } = route.params;

  return (
    <View>
      <Text>{task.title}</Text>
    </View>
  );
};
