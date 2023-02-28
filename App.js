import React from 'react';
import { View } from 'react-native';
import ExpoImageExample from './expo-image-picker';
import ReactNativeImageExample from './react-native-image-picker';
export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <ExpoImageExample />
      <ReactNativeImageExample />
    </View>
  );
}
