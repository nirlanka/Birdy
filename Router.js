/**
 * @format
 * @flow
 */

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomePage from './pages/HomePage';

const MainNavigator = createStackNavigator({
  Home: {screen: HomePage},
});

const App = createAppContainer(MainNavigator);

export default App;