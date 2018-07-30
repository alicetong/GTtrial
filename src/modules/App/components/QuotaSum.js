import React from 'react';
import styled from 'styled-components';
import Button from './GoTButton';
class QuotaSum extends React.Component {
    handleNext = () => {
        this.props.nextStep()
    }
    render() {
        return (
            <MainPanel>
                <div style={{ width: '100%' }}>
                    <section style={{ padding: '0px 27px 63px 29px' }}>
                        <PanelHeaderText>Confirm purchase</PanelHeaderText>
                        <PanelSubHeaderText>This is before and after your quota subscription</PanelSubHeaderText>
                        <table style={{ width: '100%',margin:'20px 0px 30px 0px' }}>
                            <thead>
                                <tr>
                                <TableHeader></TableHeader>
                                    <TableHeader>Before</TableHeader>
                                    <TableHeader>After</TableHeader>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <Td>Out-of-Network Messaging</Td>
                                    <Td>5 per week</Td>
                                    <Td>8 per week <Yellow>(+3)</Yellow></Td>
                                </tr>
                                <tr>
                                    <Td>Opportunity Post</Td>
                                    <Td>1</Td>
                                    <Td>2 <Yellow>(+1)</Yellow></Td>
                                </tr>                                
                            </tbody>
                        </table>
                        <TableDivider/>
                        <div style={{textAlign:'right'}}>
                            <h1 style={{marginBottom:'10px'}}>120</h1>
                            <h4 style={{marginTop: '5px'}}>Hong Kong Dollars</h4>
                        </div>
                        <Divider/>
                        <div style={{margin:'14px 0px 20px 0px'}}>
                    <Term>By clicking 'Accept and Continue', you agree to the rules, restrictions and <a href="#">terms & conditions</a></Term>
                    <Button
                        align='right'
                        text='Confirm and Pay'
                        onClick={this.handleNext}
                    />
                    </div>                        
                    </section>
                </div>
            </MainPanel>
        );
    }
}

export default QuotaSum;

const MainPanel = styled.div`

grid-column: 1 / span 3;
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
`;
const PanelSubHeaderText = styled.h4`
font-size: 14px;
color: #8c8c8c;
font-weight: 300;
margin: 5px 0px;

`;
const TableHeader = styled.th`
width:20%;
border-bottom: 1px solid #e8e8e8;
padding: 8px 0px;
text-align: left;
`;

const Td = styled.td`
padding: 5px 0px;
`;

const Yellow = styled.span`
color: #ffc800;
font-weight:900;
`;

const TableDivider = styled.hr`
margin: 39px 0px 19px 0px;
background-color: #000;
border: 1px solid #000;
opacity: .5;
`;

const Term = styled.p`
margin: 15px 0px 29px 0px;
`;

const Divider = styled.hr`
margin: 39px 0px 19px 0px;
background-color: #e8e8e8;
border: 1px solid #e8e8e8;
opacity: .8;
`;