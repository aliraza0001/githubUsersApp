import React, {useEffect, useState, useCallback} from 'react';
import {Text, SafeAreaView, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import debounce from 'lodash/debounce';
import {getUsers} from './src/Redux/Actions/UserActions';
import LoadingIndicator from './src/Components/LoadingIndicator';
import Card from './src/Components/card';
import SearchBar from './src/Components/searchbar';

const App = () => {
  // dispatch hook for use redux actions
  const dispatch = useDispatch();
  // destructure values from redux store
  const {loading, users, user: searchedUser} = useSelector(state => state);
  // use useState for save value of input in state
  const [search, setSearch] = useState('');
  //github user's action
  const onRefresh = useCallback(() => dispatch(getUsers()), []);
  //search by name action
  const getUserByName = val => (val ? dispatch(getUsers(val)) : onRefresh());
  // delay using loadsh debounce function and used useCallBack hook for recreat function
  const debounceFn = useCallback(debounce(getUserByName, 1000), []);
  // searchOnStop function update the input value and call debounce method
  const searchOnStop = val => {
    setSearch(val);
    debounceFn(val);
  };
  //get gitHub users list on first mount
  useEffect(() => {
    onRefresh();
  }, []);
  //flatlist keyExtractor method
  const keyExtractor = useCallback(item => item?.node_id, []);
  //RenderItem return each list item to flat list
  const RenderItem = useCallback(({item}) => <Card {...{...item}} />, []);
  // data variable data base on search
  const data = searchedUser?.login ? [searchedUser] : users;
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={RenderItem}
        keyExtractor={keyExtractor}
        style={{flex: 1}}
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text
            style={{
              alignSelf: 'center',
              color: '#fff',
              fontWeight: '700',
              marginTop: 10,
            }}>
            List is Empty
          </Text>
        )}
        onRefresh={onRefresh}
        refreshing={false}
        ListHeaderComponent={
          <SearchBar
            placeholder="Searc by name"
            placeholderTextColor="#fff"
            autoCapitalize="sentences"
            onChangeText={searchOnStop}
            value={search}
          />
        }
        stickyHeaderIndices={[0]}
      />
      <LoadingIndicator isVisible={loading} />
    </SafeAreaView>
  );
};

export default App;
