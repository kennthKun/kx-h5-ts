import React, { Component } from 'react';
import { ConfigProvider } from 'antd';
import zhCn from 'antd/es/locale/zh_CN';
import { BrowserRouter } from 'react-router-dom';
import VConsole from "vconsole";
import { Provider } from 'react-redux';
import { currentEnv } from "./consts/env"
import Routes from './routes';
import store from './store';
import './App.css';
import './reset.css';

class App extends Component {
  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }
  componentDidMount() {
    // 非生产环境加载vconsole
    if (currentEnv !== "prod" && currentEnv !== "pre") {
      new VConsole();
    }
  }

  render() {
    return (
      <ConfigProvider locale={zhCn} prefixCls={'kx'}>
        <Provider store={store}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </Provider>
      </ConfigProvider>
    );
  }
}
export default App;
