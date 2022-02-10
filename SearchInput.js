import {View, TextInput, StyleSheet, Image} from 'react-native';
import React from 'react';
export default function SearchInput() {
  return (
    <View style={styles.view}>
      {/* <Feather name="search" style={{fontSize: 20}} /> */}
      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyi_CVTmoL1ITHFxQkfLwvj93hcsgA1Olkhg&usqp=CAU',
        }}
        style={styles.image}
      />
      <TextInput placeholder="search your fund" />
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 14,
    height: 14,
    paddingTop: 12,
    marginRight: 10.25,
    marginLeft: 16,
  },
  view: {
    flexDirection: 'row',
    height: 41,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 0.5,
    borderColor: '#CCCCCC',
    borderStyle: 'solid',
    borderRadius: 5,
    marginBottom: 15,
    elevation: 2,
  },
});
