import { useState } from 'react';
import { Button, Image, View, Text } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    const result = await launchImageLibrary({
      selectionLimit: 1,
      quality: 1,
      mediaType: 'photo',
    });

    if (!result.didCancel) {
      setImage((result?.assets && result?.assets[0].uri) ?? '');
    }
  };

  const clearImage = () => {
    setImage('');
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'black', fontWeight: 600, fontSize: 20 }}>
        Project B
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
