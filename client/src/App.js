import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import ReactList from 'react-list';

const renderItem = (index, key) =>
  <div key={key} className={'item' + (index % 2 ? '' : ' even')}>
    {index}
  </div>;
renderItem.toJSON = () => renderItem.toString();


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      myLeft: 10,
      myTop: 10,
      myWidth: 300,
      myHeight: 300
    };
  }

  showAlert = () => {
    this.setState({myLeft: 200, myHeight: 100});
  }

  showAlert2 = () => {
    this.setState({myLeft: 200, myHeight: 150});
  }

  render() {
    return <div className="App">
      <a href="#" onClick={this.showAlert}>Step 1</a>&nbsp;
      <a href="#" onClick={this.showAlert2}>Step 2</a>&nbsp;
      <a href="#">Step 3</a>
      <div className='component' style={{top: this.state.myTop, left: this.state.myLeft, width: this.state.myWidth, height: this.state.myHeight}}>
        <ReactList
          axis='y'
          key='test'
          length={10000}
          itemRenderer={
            (column, key) => renderItem(column, key)
          }
          type='uniform'
        /></div>
    </div>
  }
}

export default App;
