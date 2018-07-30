import React from 'react';
import styled from 'styled-components';

class SideBar extends React.Component {


  render() {
    return (
        <SidePanel>
        <div style={{ width: '100%', position: 'relative' }}>
          <PanelHeaderText> Request Summary </PanelHeaderText>
          <div>
            <hr />
            <ListSection >
              <PanelSubHeaderText>Plan Type</PanelSubHeaderText>
              <PanelSubHeaderText>Duration</PanelSubHeaderText>
              <PanelSubHeaderText>Payment Information</PanelSubHeaderText>
              <PanelSubHeaderText>Add Quota</PanelSubHeaderText>
              <PanelSubHeaderText>yes</PanelSubHeaderText>
            </ListSection>
          </div>
          <div style={{ position: 'absolute', bottom: '0', width: '100%' }}>
            <hr />
            <SumSection>
              <Total>Total Price </Total>
              <Result>Unknown</Result>
            </SumSection>
          </div>
        </div>
      </SidePanel>
    );
  }
}

export default SideBar;

const SidePanel = styled.div`
grid-column: span 1;
display:flex;
background-color: #ffffff;
box-shadow: 0px 1px 2px rgba(0,0,0,0.4);
@media (max-width: 700px) {
  grid-column: 1 / span 5;
}
`;
const PanelHeaderText = styled.h3`
font-size: 16px;
color: #303030;
font-weight: 700;
margin: 16px 0px 5px 0px;
padding: 0px 0px 7px 18px;

`;
const PanelSubHeaderText = styled.h4`
font-size: 14px;
color: #8c8c8c;
font-weight: 300;
margin: 15px 0px;

`;
const ListSection = styled.section`
padding: 5px 27px 33px 29px;
`;
const SumSection = styled.section`
padding: 5px 20px 14px 20px;
display: inline-flex;
width: 100%;

`;
const Total = styled.div`
float: left; 
padding: 5px;
width: 100%;
textAlign: left;
`;
const Result = styled.div`
float: right; 
padding: 5px;
width: 100%;
text-align: right;
color: #d1d1d1;
`;