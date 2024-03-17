import "react-native-gesture-handler";
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  Home  from './src/screens/Home';
import Tabela  from "./src/screens/Tabela";
import store from "./src/redux";

const Stack = createStackNavigator();

const App = (): JSX.Element => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Calc"
          component={Home}
        />
        <Stack.Screen
          name="Tabela"
          component={Tabela}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
);

export default App;
