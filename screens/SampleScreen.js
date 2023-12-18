//HomeScreen.js

import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";


const SampleScreen = () => {

  const navigation = useNavigation();

  return (
    <View>
      <Text style={styles.h1}>HomeScreen</Text>
    </View>
  );
};

export default SampleScreen;