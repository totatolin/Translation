import React from 'react';
class B extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   num: 666
    // }
  }
  render () {
    var i = 888
    var Name = React.createClass({
      render: function () {
        return (
          <p>{this.props.name}</p>
        )
      }
    })
    return (
      <div>
      	<p>222</p>
        <p>333</p>
        <p>{i}</p>
        <p>{10+12}</p>
        <Name name="linsen" />
      </div>
    )
  }
}
export default B;