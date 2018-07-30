import React from 'react';
import styled from 'styled-components';
import Button from './GoTButton';
class PaymentSuccess extends React.Component {

    constructor() {
        super();

        this.state = {


        };


    }
    render() {
        return (
            <div style={{ width: '100%' }}>
                <PanelHeaderText>Payment Confirmation</PanelHeaderText>
                <hr />
                <Banner><BannerText>Your payment has been received</BannerText></Banner>
                <section style={{ padding: '0px 27px 33px 29px' }}>
                    <div style={{ marginTop: '40px' }}>
                        <SubtextBold>Congratulations, you are now a premium member!</SubtextBold>
                        <Subtext>An email has been sent to your inbox</Subtext>
                    </div>
                    <div style={{ margin: '20px 100px 33px 120px', border: '1px solid #d1d1d1' }}>
                        <Table>
                            <thead>
                                <tr>
                                    <TableHeader style={{ width: '30%' }}>Billed to</TableHeader>
                                    <TableHeader style={{ width: '40%' }}>Invoice no.</TableHeader>
                                    <TableHeader style={{ width: '30%' }}>Date of Issue</TableHeader>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <Td>Paul Lee address something 123</Td>
                                    <Td>00000000</Td>
                                    <Td>1/2/2018</Td>
                                </tr>
                            </tbody>
                        </Table>
                        <Table>
                            <thead>
                                <tr>
                                    <TableHeader style={{ width: '30%' }}>Quantity</TableHeader>
                                    <TableHeader style={{ width: '40%' }}>Description</TableHeader>
                                    <TableHeader style={{ width: '30%' }}>Unit Price</TableHeader>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <Td>1</Td>
                                    <Td>Premium Membership C 3 Months</Td>
                                    <Td>123,456,789</Td>
                                </tr>
                                <tr>
                                    <Td>1</Td>
                                    <Td>Add Quota</Td>
                                    <Td>30</Td>
                                </tr>                               
                            </tbody>
                        </Table>                        
                        <Divider />
                        <div style={{textAlign:'right',padding:'26px'}}>
                            <h4 style={{margin: '5px 0px',color: '#a3a3a3'}}>Total Price</h4>
                            <h1 style={{marginBottom:'10px'}}>123,456,789</h1>
                            <h4 style={{marginTop: '5px'}}>Hong Kong Dollars</h4>
                        </div>
                    </div>
                    <div>
                        <Subtext>
                            Your monthly bill date and payment will occur the same day each month,
                         until the last month of your subscription period
                         </Subtext>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '54px' }}>
                        <Button
                            text='Main Page'
                        />
                    </div>
                </section>
            </div>
        );
    }
}

export default PaymentSuccess;


const PanelHeaderText = styled.h3`
font-size: 16px;
color: #303030;
font-weight: 700;
text-decoration: none solid rgb(48, 48, 48);
padding: 0px 0px 0px 18px;
`;
const Banner = styled.div`
width: 100%;
background-image: linear-gradient(90deg, #ffcd03 2%, #ffdb4b 100% );
background-position: center center;
`;
const BannerText = styled.p`
margin: -9px 0px 0px 0px;
padding: 53px 39px;
text-align: center;
font-size: 27px;
`;
const Subtext = styled.h4`
margin: 10px;
text-align: center;
font-size: 14px;
font-weight: 300;
`;
const SubtextBold = Subtext.extend`
font-weight: 900;
`;
const Table = styled.table`
width: 100%;
margin: 20px 0px 30px 0px;
padding: 0px 26px;
`;
const TableHeader = styled.th`
font-size: 14px;
color: #a3a3a3;
font-weight: 700;

text-align: left;
`;

const Td = styled.td`
padding: 5px 0px;
`;

const Divider = styled.hr`
margin: 39px 0px 19px 0px;
background-color: #e8e8e8;
border: 1px solid #e8e8e8;
opacity: .8;
`;