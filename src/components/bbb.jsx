import React from 'react';
class B extends React.Component {
  constructor() {
    super();
    this.state = {
      num: 999
    }
  }
  render () {
    var i = 888
    var Name = React.createClass({
      getInitialState: function () {
        return {clickNum: 0}
      },
      click: function () {
        this.setState(function() {
          return {clickNum: this.state.clickNum + 1}
        }.bind(this))
      },
      render: function () {
        return (
          <div>
            <p onClick={this.click}>{this.props.name}</p>
            <p>{this.state.clickNum}</p>
          </div>
        )
      }
    })
    var Time = React.createClass({
      getInitialState: function () {
        return {t: 10}
      },
      componentDidMount: function () {
        setInterval(function () {
          if (this.state.t > 0) {
            this.setState({
              t: this.state.t - 1
            })
          }
        }.bind(this), 1000)
      },
      render: function () {
        return (
          <p>{this.state.t}</p>
        )
      }
    })
    return (
      <div>
      	<p>222</p>
        <p>{this.state.num}</p>
        <p>{i}</p>
        <p>{10+12}</p>
        <Name name="linsen" />
        <Time />
      </div>
    )
  }
}
export default B;