import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {normalizeRect} from 'react-native/Libraries/StyleSheet/Rect';

export default function ViewAll() {
  return (
    <View
      style={{
        width: 330,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
      }}>
      <Text style={styles.card}>Popular Funds</Text>
      <TouchableOpacity>
        <Text style={styles.viewall}>View all</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  viewall: {
    fontSize: 11,
    fontWeight: '500',
    color: '#00B871',
  },
  card: {
    fontSize: 14,
    fontWeight: '600',
    color: '#00000033',
  },
});
