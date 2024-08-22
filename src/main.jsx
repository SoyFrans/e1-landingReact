import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Provider} from "react-redux"
import { store } from './assets/components/Header/ShopList/store.jsx'

import { PersistGate } from "redux-persist/integration/react";
import { persistor, storeRedux } from './assets/components/redux/store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider storeRedux={storeRedux} store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
); 
