import React from 'react';
import { createStore } from 'redux';
import AppReducer from './AppReducer';

const appStore = createStore(AppReducer);

export default appStore;