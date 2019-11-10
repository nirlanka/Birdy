/**
 * @format
 * @flow
 */

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomePage from './pages/HomePage';
import PostTweetPage from './pages/PostTweetPage';

const MainNavigator = createStackNavigator({
  HomePage: {screen: HomePage},
  PostTweetPage: {screen: PostTweetPage}
}, {
    initialRouteName: 'HomePage',
});

const App = createAppContainer(MainNavigator);

export default App;