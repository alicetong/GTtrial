import React, { PureComponent } from 'react';
import { connect } from 'unistore/react';
import styled from 'styled-components';
import { actions } from '~/Store';
import {BrowserRouter, Route} from 'react-router-dom';
import SelectPlan from './components/SelectPlan';
import Navbar from './components/NavBar';
import Payment from './components/Payment';

const AppWrapper = styled.div`
  height: 100%;
  position: relative;
  background-color: #e8e8e8;
`;

class App extends PureComponent {
  componentDidMount() {
    this.props.loadData();
  }
  render() {
    return (
      <BrowserRouter>
        <AppWrapper>
          <Navbar />
          <div>
            <Route exact={true} path='/' render={() => (
              <div>
                <SelectPlan />
              </div>
            )} />
            <Route exact={true} path='/payment' render={() => (
              <div>
                <Payment />
              </div>
            )} />
          </div>
        </AppWrapper>
      </BrowserRouter>
    );
  }
}

export default connect(
  state => state,
  actions
)(App);
