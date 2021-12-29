import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import ReactNativeModal from 'react-native-modal';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const Modal = props => (
  <ReactNativeModal
    isVisible={props.visible || false}
    onBackdropPress={props.close}>
    <View style={styles.container}>
      <TouchableOpacity onPress={props.close} style={styles.closebtn}>
        <Image
          source={require('../../assets/close.png')}
          style={{height: 18, width: 18}}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={styles.modalBox}>
        {props.children}
        <TouchableOpacity onPress={props.close} style={styles.btn2}>
          <Text style={styles.btnText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  </ReactNativeModal>
);

export default Modal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  closebtn: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  modalBox: {
    height: height / 1.4,
    width: width / 1.25,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  btn1: {
    height: 50,
    width: width / 1.8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#21912B',
    borderRadius: 50,
    marginBottom: 10,
  },
  btnText: {color: '#fff', fontSize: 22},
  btn2: {
    height: 50,
    width: width / 1.8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue',
    borderRadius: 50,
    marginBottom: 20,
  },
});
