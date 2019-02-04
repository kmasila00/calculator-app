import AppReducer from './AppReducer';

describe('Testing AppReducer', () => {

  it("Check initial state", () => {
    expect(AppReducer(undefined, {type:'UNDEFINED'}).calcReducer).toEqual({
      total: 0,
      screen: '0',
      memory: 0,
      calc: ''
    })
  });

  it("Check digit input", () => {
    let state = {total: 0, screen: '7', memory: 0, calc: ''};
    expect(AppReducer(undefined, {type:'ENTER_DIGIT', data: 7}).calcReducer.screen).toEqual('7');
    expect(AppReducer(undefined, {type:'ENTER_DIGIT', data: 3}).calcReducer.screen).toEqual('3');
    expect(AppReducer({calcReducer: state}, {type:'ENTER_DIGIT', data: 9}).calcReducer.screen).toEqual('79');
    expect(AppReducer({calcReducer: state}, {type:'ENTER_DIGIT', data: 1}).calcReducer.screen).toEqual('71');
  });

  it("Check Memory Storage", () => {
    let state = {total: 0, screen: '746', memory: 0, calc: ''};
    expect(AppReducer({calcReducer: state}, {type:'STORE_MEMORY'}).calcReducer.memory).toEqual('746');
    state.screen = '164';
    expect(AppReducer({calcReducer: state}, {type:'STORE_MEMORY'}).calcReducer.memory).toEqual('164');
  });

  it("Check Memory Retrival", () => {
    let state = {total: 0, screen: '0', memory: '43', calc: ''};
    expect(AppReducer({calcReducer: state}, {type:'RETRIEVE_MEMORY'}).calcReducer.screen).toEqual('43');
    state.memory = '12';
    expect(AppReducer({calcReducer: state}, {type:'RETRIEVE_MEMORY'}).calcReducer.screen).toEqual('12');
  });

  it("Check Memory Retrival", () => {
    let initialState = {total: 0, screen: '0', memory: '0', calc: ''};
    let state = {total: 32, screen: '1678', memory: '0', calc: 'add'};
    expect(AppReducer({calcReducer: state}, {type:'CLEAR'}).calcReducer).toEqual(initialState);
    state = {total: 32654, screen: '8', memory: '0', calc: 'multiply'};
    expect(AppReducer({calcReducer: state}, {type:'CLEAR'}).calcReducer).toEqual(initialState);
  });

  it("Returns correct calculation", () => {
    let state = {total: 12, screen: '3', memory: '0', calc: 'add'};
    expect(AppReducer({calcReducer: state}, {type:'EQUALS'}).calcReducer.total).toEqual(15);
    state.calc = 'subtract';
    expect(AppReducer({calcReducer: state}, {type:'EQUALS'}).calcReducer.total).toEqual(9);
    state.calc = 'multiply';
    expect(AppReducer({calcReducer: state}, {type:'EQUALS'}).calcReducer.total).toEqual(36);
    state.calc = 'divide';
    expect(AppReducer({calcReducer: state}, {type:'EQUALS'}).calcReducer.total).toEqual(4);
  })

});
