import React from 'react';
import styled from 'styled-components';
import SideBar from './SideBar';
import Translation from './Translation';
class Payments extends React.Component {


    render() {
        return (
            <div>
                <PanelArea>
                    <MainPanel>
                        <Translation />
                    </MainPanel>                    
                        <SideBar />                    
                </PanelArea>
            </div>
        );
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