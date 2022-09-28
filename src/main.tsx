import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './redux/app/store'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
   //Provider chuyền store cho tất cả những thằng trong nó

   
  document.getElementById('root')
)