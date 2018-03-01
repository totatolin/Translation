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
        this.setState(function(state) {
          return {clickNum: state.clickNum + 1}
        })
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
    return (
      <div>
      	<p>222</p>
        <p>{this.state.num}</p>
        <p>{i}</p>
        <p>{10+12}</p>
        <Name name="linsen" />
      </div>
    )
  }
}
export default B;