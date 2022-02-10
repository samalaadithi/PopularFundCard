import React from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  Button,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
const PopularFundCard = () => {
  return (
    <View style={styles.view}>
      <View>
        <View style={{paddingBottom: 10}}>
          <Image
            style={styles.img}
            source={{
              uri: 'https://play-lh.googleusercontent.com/C4D7Q0MAAkI5EGIIM34frMuREWlTde55XKb1N-lq9lW8LqALuE5NjONUIIMWHBCtxg',
            }}
          />
        </View>
        <View style={styles.vview}>
          <Text style={styles.txt}>
            HDFC Balanced Adv Direct Plan Dividend Payout Option
          </Text>
          <View style={{alignItems: 'flex-end'}}>
            <Text style={styles.per}>5.67%</Text>
            <Text style={styles.perc}>3Y Returns</Text>
          </View>
        </View>
        <View style={{borderWidth: 1, borderColor: '#E7E7E7'}}></View>
      </View>
      <View>
        <Text style={styles.txt2}>5star | Mid/Small Cap</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    marginRight: 10,
    backgroundColor: 'white',
    borderColor: '#CCCCCC',
    borderWidth: 0.5,
    width: 308,
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    backgroundColor: '#FFFFFF',
  },
  vview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txt: {
    fontSize: 14,
    fontWeight: '500',
    color: '#273149',
    width: 234,
    paddingBottom: 20,
  },
  per: {
    fontSize: 10,
    fontWeight: 'normal',
    paddingBottom: 3,
  },
  perc: {
    fontSize: 8,
    fontWeight: '100',
    color: '#666666',
  },
  img: {
    height: 14,
    width: 14,
  },
  txt2: {
    fontWeight: '500',
    fontSize: 8,
    color: '#666666',
    paddingTop: 2,
  },
});
export default PopularFundCard;
