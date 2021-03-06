import React from 'react';
import axios from 'axios';
import qs from 'qs';
import '../style/aaa.scss';
class A extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      data: [],
      img: ''
    }
    // axios.get('/proxy-api/test/test')
    axios.get('/proxy-api/img/img')
    .then((res) => {
      // this.state.data = res.data
      // console.log(this.state.aaa)
      this.setState({
        img: res.data
      })
      console.log(res)
    })
    this.valueChange = (event) => {
      this.setState({value: event.target.value})
    }
    this.add = () => {
      axios.post('/proxy-api/test/add', qs.stringify({
        id: 4,
        name: this.state.value
      }))
      // console.log(this.state.value)
    }
  }
  render () {
    return (
      // <div dangerouslySetInnerHTML={{__html: this.state.data}}>
      // </div>
      <div>
        <p className="test">12345</p>
        {this.state.data.map((item) => {
          return (
            <div key={item.id}>
              <div>{item.name}</div>
            </div>
          )
        })}
        <img src={this.state.img}></img>
        <input value={this.state.value} onChange={this.valueChange}></input>
        <button onClick={this.add}>add</button>
      </div>
    )
  }
}
export default A;