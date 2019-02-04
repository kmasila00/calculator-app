import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Calculator.css';

class Calculator extends Component {

  calculation = (type) => {
    this.props.dispatch({type:'CALCULATION', data: type})
  };

  equals = () => {
    this.props.dispatch({type:'EQUALS'})
  };

  clear = () => {
    this.props.dispatch({type:'CLEAR'})
  };

  enterDigit = (digit) => {
    this.props.dispatch({type:'ENTER_DIGIT', data: digit})
  };

  storeMemory = () => {
    this.props.dispatch({type:'STORE_MEMORY'})
  };

  retrieveMemory = () => {
    this.props.dispatch({type:'RETRIEVE_MEMORY'})
  };

  render() {
    let numArr = [0,1,2,3,4,5,6,7,8,9];

    return (
      <div className="calcApp">
        <div className="calcContainer">
          <div className="screen">
            <label>{this.props.screen}</label>
          </div>
          <div className="msClearContainer">
            <div onClick={this.storeMemory} className="tile">MS</div>
            <div onClick={this.retrieveMemory} className="tile">MR</div>
            <div onClick={this.clear} className="tile">CE</div>
          </div>
          <div className="buttonTiles">
            <div className="numTiles">
              {numArr.map((elem, key) => {
                return (
                  <div className="tile" onClick={() => { this.enterDigit(elem) }} key={key}>{elem}</div>
                )
              })}
            </div>
            <div className="functionTiles">
              <div onClick={() => { this.calculation('add') }} className="tile">+</div>
              <div onClick={() => { this.calculation('subtract') }} className="tile">-</div>
              <div onClick={() => { this.calculation('multiply') }} className="tile">*</div>
              <div onClick={() => { this.calculation('divide') }} className="tile">/</div>
              <div onClick={this.equals} className="tile equalButton">=</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    screen: state.calcReducer.screen,
    total: state.calcReducer.total,
    memory: state.calcReducer.memory,
    calc: state.calcReducer.calc
  }
};

export default connect(mapStateToProps)(Calculator);
