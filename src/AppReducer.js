import React from 'react';
import {combineReducers} from 'redux'

const initialState = {
  total: 0,
  screen: '0',
  memory: 0,
  calc: ''
};

const calcReducer = (state = initialState, action) => {
  switch (action.type){
    case ("EQUALS") :
      let newTotal = 0;
      console.log("ACTION", action.data);
      if (state.calc === 'add') {
        newTotal = state.total + Number(state.screen);
      } else if (state.calc === 'subtract') {
        newTotal = state.total - Number(state.screen);
      } else if (state.calc === 'multiply') {
        newTotal = state.total * Number(state.screen);
      } else if (state.calc === 'divide') {
        newTotal = state.total / Number(state.screen);
      }
      console.log("newTotal", newTotal);
      return Object.assign({}, state, {
        total: newTotal,
        screen: `${newTotal}`,
        calc: ''
      });
      break;
    case ("CALCULATION") :
      return Object.assign({}, state, {
        total: Number(state.screen),
        screen: '0',
        calc: action.data
      });
      break;
    case ("RETRIEVE_MEMORY") :
      return Object.assign({}, state, {
        screen: state.memory,
      });
      break;
    case ("STORE_MEMORY") :
      return Object.assign({}, state, {
        memory: state.screen,
      });
      break;
    case ("CLEAR") :
      return Object.assign({}, state, {
        total: 0,
        screen: '0',
        calc: ''
      });
      break;
    case ("ENTER_DIGIT") :
      return Object.assign({}, state, {
        screen: state.screen === '0' ? `${action.data}` : `${state.screen}${action.data}`
      });
      break;
    default :
      return state;
  }
};

//Set up in a way so that there can be multiple reducers
const AppReducer = combineReducers({calcReducer});

export default AppReducer;