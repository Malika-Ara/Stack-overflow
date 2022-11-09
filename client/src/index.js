import React from 'react';
import { render } from "react-dom";
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import { legacy_createStore as createStore,applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import Reducers from './reducers'
import reportWebVitals from './reportWebVitals';



const store = createStore( Reducers, compose(applyMiddleware(thunk)))

// root.render(
//   <Provider store={store}>
//     {/* <React.StrictMode>
//       <App />
//     </React.StrictMode> */}
//     <App/>
//   </Provider>,
//   document.getElementById('root')
// );
// reportWebVitals();
render(<><Provider store={store}><App /></Provider></>, document.getElementById("root"));