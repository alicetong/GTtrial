import React from 'react';
import styled from 'styled-components';
import SideBar from './SideBar';
import Translation from './Translation';
import Quota from './Quota';
import QuotaSelect from './QuotaSelect';
import QuotaSum from './QuotaSum';
import Payment from './PaymentSuccess';
class Payments extends React.Component {

    constructor() {
        super();

        this.state = {
            step: 2,

        };
        this.renderSteps = this.renderSteps.bind(this);
        this.handleNextStep = this.handleNextStep.bind(this)

    }
    handleNextStep = () => {
        this.setState({
            step: this.state.step + 1
        })
    }
    renderSteps = () => {
        
        switch (this.state.step) {
            case 1:
                return <PanelArea><MainPanel><Translation nextStep={this.handleNextStep} /></MainPanel><SideBar /></PanelArea>
            case 2:
                return <PanelArea><Quota /><SideBar/><QuotaSelect/><QuotaSum  nextStep={this.handleNextStep}/></PanelArea>
            case 3:
                return <PanelArea><MainPanel><Payment /></MainPanel><SideBar /></PanelArea>

        }
    }
    render() {
        return this.renderSteps()
    }
}

export default Payments;


const PanelArea = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 1em;
margin: 0 auto;
padding: 0 10% 2% 10%;
`;
const MainPanel = styled.div`

grid-column: 1 / span 3;
display:flex;
background-color: #ffffff;
box-shadow: 0px 1px 2px rgba(0,0,0,0.4);
@media (max-width: 700px) {
  grid-column: 1 / span 5;
}
`;