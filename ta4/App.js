import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  const imageUrl1 = 'https://cdn.recetasderechupete.com/wp-content/uploads/2024/01/24-postres-gourmet.jpg';
  const imageUrl2 = 'https://aprende.com/wp-content/uploads/2022/06/platillo-gourmet.jpg';

  const [chosenImage, setChosenImage] = useState(imageUrl1);

  function changeImage() {
    if (chosenImage == imageUrl1) {
      setChosenImage(imageUrl2);
    } else {
      setChosenImage(imageUrl1);
    }
  }

  return (
    <View style={styles.container}>
      <SafeAreaProvider>
        <SafeAreaView>
          <Image source={{uri: chosenImage}} 
            style={styles.image}/>
          
          <TouchableOpacity onPress={changeImage} style={styles.changeImageButton}>
          <Text> change image </Text>
      </TouchableOpacity>
        </SafeAreaView>
      </SafeAreaProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  changeImageButton: {
    backgroundColor: '#FFB7C5',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  image: {
    width: 200,
    height: 150,
    borderRadius: 10,
    margin: 20,
  },
});
