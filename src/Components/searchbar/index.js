import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const SearchBar = props => (
  <View style={styles.container}>
    <View style={styles.searchSection}>
      <TextInput {...props} style={styles.input} />
    </View>
  </View>
);

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.8)',
    paddingVertical: 20,
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.5)',
    width: '80%',
    borderRadius: 25,
    height: 40,
  },
  input: {
    width: '80%',
    padding: 0,
    color: '#fff',
  },
});
