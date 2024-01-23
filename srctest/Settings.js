import React from 'react';
import {View, Text, Button} from 'react-native';

const Settings = ({route, navigation}) => {
  return (
    <View>
      <Text>Settings</Text>
      <Text>Settings</Text>
      <Text>Settings</Text>
      <Text>Settings</Text>
      <Text>Settings</Text>
      <Text>Settings</Text>
      <Button onPress={() => navigation.navigate('Home')} title="Goto Home" />
    </View>
  );
};
export default Settings;
