import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import ContextData from '../Data/ContextData';

const HomeScreen = ({navigation}) => {
  const data = useContext(ContextData);
  console.log(data);
  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('About')}>
          <Text>About</Text>
        </TouchableOpacity>
      </View>

      {/* <View style={{display: 'flex', alignItems: 'center'}}>
        <TouchableOpacity
          style={{backgroundColor: 'blue', padding: 10}}
          onPress={data.update}>
          <Text>Press me</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
