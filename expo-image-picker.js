import React, { useState } from 'react';
import { Button, Image, View, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      selectionLimit: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const clearImage = () => {
    setImage('');
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'white',
      }}
    >
      <Text style={{ color: 'black', fontWeight: 600, fontSize: 20 }}>
        Project A
      </Text>
      {image ? (
        <>
          <Button title="Clear image" onPress={clearImage} />

          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        </>
      ) : (
        <Button title="Pick an image from camera roll" onPress={pickImage} />
      )}
    </View>
  );
}
