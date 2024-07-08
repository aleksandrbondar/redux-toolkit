import './App.css'
import { Provider } from 'react-redux'
import store from '../redux/store'
import Counter from '../Counter/Counter'
import User from '../User/User'
import Storage from '../Storage/Storage'
import Posts from '../Posts/Posts'


const App = () => {
  return (
    <Provider store={store}>
      <Counter />
      <User />
      <Posts />
      <Storage />
    </Provider>
  )
}

export default App