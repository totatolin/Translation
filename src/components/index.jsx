import React from 'react';
import axios from 'axios';
class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      aaa: null,
      bbb: 123
    }
    // axios.get('/proxy-api/test/test')
    axios.get('/proxy-api/img/img')
    .then((res) => {
      // this.state.aaa = res.data
      // console.log(this.state.aaa)
      // this.setState({
      //   aaa: res.data
      // })
    })
  }
  render () {
    let that = this
    // setTimeout(() => {
    //   console.log(that.state.aaa)
    // }, 1000)
    return (
      // this.state.aaa
      // <p>{this.state.bbb}</p>
      <div dangerouslySetInnerHTML={{__html: this.state.aaa}}>
      </div>
    )
  }
}
export default Header; 