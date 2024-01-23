import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './Home';
import About from './About';
import Settings from './Settings';
const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
export default MyStack;
