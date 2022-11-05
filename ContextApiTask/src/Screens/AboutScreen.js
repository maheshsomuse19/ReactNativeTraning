import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import ContextData from '../Data/ContextData';

const AboutScreen = ({navigation}) => {
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
      <View style={{display: 'flex', alignItems: 'center'}}>
        <Text style={{color: 'orange', fontSize: 30, height: 500}}>
          Welcome {data.firstname}
        </Text>
      </View>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({});
