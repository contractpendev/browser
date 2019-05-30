import React, { Component } from "react";
import './App.css';
import ReactList from 'react-list';

class Button extends React.Component 
{ 
  constructor(props) {
    super(props);

    this.state = {
      idOfCanvas: props.props.idOfCanvas,
    };
  }

  componentDidMount() {
    var i = document.getElementById("renderitem_" + this.state.idOfCanvas);
    var c2 = i.getContext('2d');

    c2.fillStyle = "#FFFFFF";
    c2.fillRect(0, 0, 285, 18);

    c2.drawImage(document.getElementById('testCanvas'), 100, 100, 285, 18, 0, 0, 285, 18);    
  }

  componentDidUpdate(prevProps, prevState) {
    var i = document.getElementById("renderitem_" + this.state.idOfCanvas);
    var c2 = i.getContext('2d');

    c2.fillStyle = "#FFFFFF";
    c2.fillRect(0, 0, 285, 18);

    c2.drawImage(document.getElementById('testCanvas'), 100, 100, 285, 18, 0, 0, 285, 18);    
/*    var i = document.getElementById("renderitem_" + this.state.idOfCanvas);
    var c2 = i.getContext('2d');
    c2.fillStyle = "#FFFFFF";
    c2.fillRect(0, 0, 200, 50);*/
    //c2.drawImage(document.getElementById('canvas'), 100,280, 200, 50, 0, 0, 200, 50);    
  }

  componentWillReceiveProps(props) {
    this.setState({ idOfCanvas: props.props.idOfCanvas })
  }

  render() {  return (    
    <canvas id={"renderitem_" + this.state.idOfCanvas} width="285" height="18" style={{width: 285, height: 18, padding:0, margin:0}} />
    );}
}

/*var AppBase = React.createClass({
  componentDidMount: function() {
    var $this = $(ReactDOM.findDOMNode(this));
    // set el height and width etc.
  },

  render: function () {
    return (
      <div className="wrapper">
        <Sidebar />
          <div className="inner-wrapper">
            <ActionBar title="Title Here" />
            <BalanceBar balance={balance} />
            <div className="app-content">
              <List items={items} />
          </div>
        </div>
      </div>
    );
  }
});
<canvas id={"renderitem_" + index} width="285" height="18" style={{width: 285, height: 18, padding:0, margin:0}} />
*/


const renderItem = (index, key) =>
  <div key={key} className={'item' + (index % 2 ? '' : ' even')}>
    <Button props={{idOfCanvas: index}} />
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
    //window.addEventListener('resize', resizeCanvas, false);

    // draw on the canvas
    var canvas = document.getElementById("testCanvas")
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();

    this.setState({myLeft: 200, myHeight: 800});
  }

  showAlert2 = () => {
    this.setState({myLeft: 500, myWidth: 300, myHeight: 350});
  }

  render() {
    return <div className="App">
      <div className="links">
      <button onClick={this.showAlert}>Step 1</button>&nbsp;
      <button onClick={this.showAlert2}>Step 2</button>&nbsp;
      <button>Step 3</button>
      </div>
      <canvas id='testCanvas' className='myCanvas' />

<div className='component' style={{top: this.state.myTop, left: this.state.myLeft, width: this.state.myWidth, height: this.state.myHeight}}>

        <ReactList
          axis='y'
          key='test'
          length={10000}
          itemRenderer={
            (column, key) => renderItem(column, key)
          }
          type='uniform'
        />
        </div>

    </div>
  }
}

export default App;
