import React from 'react';
import {ActivityIndicator, View, Text} from 'react-native';
import ReactNativeModal from 'react-native-modal';

const LoadingIndicator = ({isVisible}) => (
  <ReactNativeModal isVisible={isVisible} backdropOpacity={0.3}>
    <View
      style={{
        height: 80,
        width: '100%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        alignItems: 'center',
        borderRadius: 5,
      }}>
      <Text style={{color: '#000', fontWeight: '500', fontSize: 16}}>
        Loading
      </Text>
      <ActivityIndicator size="large" color="green" />
    </View>
  </ReactNativeModal>
);

export default LoadingIndicator;
