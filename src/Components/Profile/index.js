import React, {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getUser, removeUser} from '../../Redux/Actions/UserActions';

const Profile = props => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state);
  //openUrl open user github url in browser
  const openUrl = () => Linking.openURL(user?.html_url || props.data?.html_url);

  useEffect(() => {
    dispatch(getUser(props.data.login));
    //inside return remove user from redux state
    return () => dispatch(removeUser());
  }, []);
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        style={{
          height: 150,
          width: 150,
          borderRadius: 150 / 2,
          marginVertical: 10,
        }}
        source={{uri: user?.avatar_url || props.data.avatar_url}}
        resizeMode="contain"
      />
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          color: '#000',
        }}>
        {user?.name || props?.data?.login}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 15,
          width: 230,
          justifyContent: 'space-around',
        }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: '#000',
          }}>
          Followings {user?.following || 0}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: '#000',
          }}>
          Followers {user?.followers || 0}
        </Text>
      </View>
      {user?.location && (
        <Text style={{color: '#000', marginTop: 10}}>{user?.location}</Text>
      )}
      <TouchableOpacity
        style={{
          borderColor: '#000',
          borderWidth: 1,
          borderRadius: 10,
          height: 40,
          justifyContent: 'center',
          width: 200,
          marginTop: 15,
          alignItems: 'center',
        }}>
        <Text onPress={openUrl} style={{fontSize: 14, color: '#000'}}>
          {user?.html_url || props.data?.html_url}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
