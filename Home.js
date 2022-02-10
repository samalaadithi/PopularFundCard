import * as React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import PopularFundCard from '../components/PopularFundCard.js';
import SearchInput from '../components/SearchInput';
import ViewAll from '../components/ViewAll.js';
//import List from "./Screens/List.js"
const arr = [1, 2, 3, 4, 5];
export default function Home() {
  const navigation = useNavigation();
  const renderItem = ({item}) => <PopularFundCard />;
  return (
    <View style={{flex: 1}}>
      <View>
        <SearchInput />
      </View>
      <View>
        <ViewAll />
        <FlatList horizontal data={arr} renderItem={renderItem} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 30,
  },
});
