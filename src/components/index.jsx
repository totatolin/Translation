import React from 'react';
import axios from 'axios';
class Header extends React.Component {
  constructor() {
    super();
    console.log(1);
    axios.get('/proxy-api/markdown')
    .then((res) => {
      console.log(res)
    })
  }
  render () {
    return (
      <h1> This is Header </h1>
    )
  }
}
export default Header; 