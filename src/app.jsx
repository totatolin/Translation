import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import { DatePicker } from 'antd';
// import Head from './components/index.jsx';
// import A from './components/aaa.jsx';
// import B from './components/bbb.jsx';
// import {Provider} from 'react-redux';
import Routers from './router/router.jsx'; //路由配置
// import store from './Redux/Store/Store';
// import './Config/Config.js';//引入默认配置

// import 'antd/dist/antd.css';
import './style/aaa.scss';
// import './Style/head.scss';
// import './Style/index.scss';
// import './Style/chooseProducts.scss';
// import './Style/helpCenter.less';
// import './Style/saleRecord.less';
// import './Style/allDeposit.less';
// import './Style/applyDeposit.less';
// import './Style/applyRecord.less';

// store.subscribe(() => { //监听state变化
//     //console.log(store.getState())
// });

render(
    // <Provider store={store}>
    //     // {route}
    // </Provider>,
    // <A />,
    <Routers />,
    document.getElementById('app')
);

// ReactDOM.render(<DatePicker />, document.getElementById('app'));

