import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from 'react-native';

import Modal from '../Modal';
import Profile from '../Profile';

const Card = props => {
  const [visiabl, setVisiabl] = React.useState(false);
  const toggle = () => setVisiabl(!visiabl);
  const {login, avatar_url, html_url} = props;
  const openUrl = () => Linking.openURL(html_url);
  return (
    <View style={Style.container}>
      <TouchableOpacity onPress={toggle} activeOpacity={0.5}>
        <Image source={{uri: avatar_url}} style={Style.img} />
      </TouchableOpacity>
      <View style={Style.textContainer}>
        <Text onPress={toggle} style={Style.text}>
          {login?.toUpperCase() || 'Test User'}
        </Text>
        <Text onPress={openUrl} style={Style.text}>
          {html_url || 'Test User'}
        </Text>
      </View>
      {visiabl && (
        <Modal visible={visiabl} close={toggle}>
          <Profile data={props} />
        </Modal>
      )}
    </View>
  );
};

export default Card;

const Style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 0.25,
    borderColor: '#666666',
    justifyContent: 'space-around',
    padding: 10,
  },
  img: {width: 50, height: 50, borderRadius: 50 / 2},
  textContainer: {width: '70%', height: 50, justifyContent: 'space-around'},
  text: {color: '#fff', fontWeight: 'bold', textAlign: 'left'},
});
