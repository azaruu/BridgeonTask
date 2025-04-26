import ReactDom from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.js'
import "tailwindcss";
import TodoApp from './component/TodoApp.jsx'

ReactDom.createRoot (document.getElementById('root')).render(
  <Provider store={store}>
      <TodoApp/>
  </Provider>
)
 