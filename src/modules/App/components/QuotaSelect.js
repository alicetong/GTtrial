import React from 'react';
import styled from 'styled-components';

class QuotaSelect extends React.Component {
    getRangeOptions = () => {
        var arr = [];
        for (let i = 1; i <= 12; i++) {
            arr.push(<option key={i} value="{i}">{i}</option>)
        }
        return arr;
    }
    render() {
        return (
            <MainPanel>
                <section style={{ padding: '5px 27px 33px 29px' }}>
                    <PanelHeaderText>Quota duration</PanelHeaderText>
                    <PanelSubHeaderText>Indicate how long you want to have added quota</PanelSubHeaderText>
                    <p>Please select number of months you want to subscribe.</p>
                    <div>
                        <SelectMonth>
                            {this.getRangeOptions()}
                        </SelectMonth>
                        Months
        </div>
                </section>
            </MainPanel>
        );
    }
}

export default QuotaSelect;

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
const SelectMonth = styled.select`
width: 53px;
height: 28px;
border: 1px solid #d1d1d1;
font-size: 14px;
color: #303030;
text-decoration: none solid rgb(48, 48, 48);
margin-right: 5px;
`;