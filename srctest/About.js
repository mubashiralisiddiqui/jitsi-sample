import React from 'react';
import {View, Text, Button} from 'react-native';

const About = ({route, navigation}) => {
  return (
    <View>
      <Text>About</Text>
      <Text>About</Text>
      <Text>About</Text>
      <Text>About</Text>
      <Text>About</Text>
      <Text>About</Text>
      <Button
        onPress={() => navigation.navigate('Settings')}
        title="Goto Settings"
      />
    </View>
  );
};
export default About;
