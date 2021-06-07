import {Provider} from 'react-redux';
import store from './store';
import RestaurantScreen from './components/RestaurantScreen';
import RestaurantList from './components/RestaurantList';
const App = () => (
  <Provider store={store}>
    <RestaurantScreen />
    <RestaurantList />
  </Provider>
);

export default App;
