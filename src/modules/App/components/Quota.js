import React from 'react';
import styled from 'styled-components';

class Quota extends React.Component {

    render() {
        return (
            <MainPanel>
                <div style={{ width: '100%' }}>
                    <PanelHeaderText style={{ padding: '0px 0px 7px 18px' }}>Add quota</PanelHeaderText>
                    <hr />
                    <section style={{ padding: '0px 27px 33px 29px' }}>
                        <PanelHeaderText>Add extra quota to your provided features</PanelHeaderText>
                        <PanelSubHeaderText>Increase your quota for the below features</PanelSubHeaderText>
                        <div style={{ margin: '35px 0px 20px 0px' }}
                        >
                            <label>
                                <input type='radio' name='add' value='true' />
                                Add Quota
                            </label>
                        </div>
                        <table style={{ width: '100%' }}>
                            <thead>
                                <tr>
                                    <TableHeaderGrey>Build Your Creative Career</TableHeaderGrey>
                                    <TableHeader>Original</TableHeader>
                                    <TableHeaderYellow>Added Quota</TableHeaderYellow>
                                    <TableHeader></TableHeader>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <Td>Out-of-Network Messaging</Td>
                                    <TdCenter><b>5</b></TdCenter>
                                    <TdCenterYellow><b>+3</b></TdCenterYellow>
                                    <Td><b>per week</b></Td>
                                </tr>
                                <tr>
                                    <Td>Opportunity Post</Td>
                                    <TdCenter><b>1</b></TdCenter>
                                    <TdCenterYellow><b>+1</b></TdCenterYellow>
                                    <Td><b>simultaneously</b></Td>
                                </tr>                                
                            </tbody>
                        </table>
                    </section>
                </div>
            </MainPanel>
        );
    }
}

export default Quota;

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
`;
const TableHeaderGrey = TableHeader.extend`
width:40%;
color: #8c8c8c;
text-align:left;
`;
const TableHeaderYellow = TableHeader.extend`
color: #ffc800;
`;
const Td = styled.td`
padding: 5px 0px;
`;
const TdCenter = Td.extend`
text-align:center;
`;
const TdCenterYellow = TdCenter.extend`
color: #ffc800;

`;