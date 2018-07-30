import React, { PureComponent } from 'react';
import { connect } from 'unistore/react';
import styled from 'styled-components';
import { actions } from '~/Store';
import { BrowserRouter ,  Route } from "react-router-dom";
import SelectPlan from './components/SelectPlan';
import Payment from './components/Payment';
import Navbar from './components/NavBar';
import Footer from './components/Footer';

class App extends PureComponent {
  componentDidMount() {
    this.props.loadData();
  }
  render() {
    return (

      <BrowserRouter>
         <AppWrapper>
          <Navbar />
          <AdvertiseText>Online MBA in 1 Year  — Online MBA International Business in 1 Year. Get more information!</AdvertiseText>

          <Route exact path="" component={ SelectPlan} />
          <Route exact path="/payment" component={Payment} />

        </AppWrapper>
        </BrowserRouter>

    );
  }
}

export default connect(
  state => state,
  actions
)(App);



const AppWrapper = styled.div`
  height: 100%;
  position: relative;
  background-color: #e8e8e8;
`;
const AdvertiseText = styled.h6`
text-align:center;
font-size: 14px;
color: #000000;
font-weight:300;
`;

