import React  from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter, Route, Routes} from 'react-router-dom'
import App from './App';
import Card from './Card';
import Navbar from './Navbar';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux'

import Tolkit from './Tolkit';

import {configureStore} from '@reduxjs/toolkit'
import  niceReducer  from './tolkit/user';
import Svganimation from './Svganimation';

import {store} from './store/store'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<Provider store={store}>
<App/>
</Provider>

 {/** 
 
  <HashRouter>
  <Navbar/>
  <Routes>
  <Route path='/'  element={ <App/>} />
  <Route path='/add'  element={ <Card/>}/>
  <Route path='/tol'  element={ <Svganimation/>}/>

  </Routes>    
  </HashRouter>*/} 

  </React.StrictMode>
);

