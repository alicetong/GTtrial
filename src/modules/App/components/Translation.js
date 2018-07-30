import React from 'react';
import styled from 'styled-components';
import Button from './GoTButton';
import Card from '../img/cards.png';
class Translation extends React.Component {
    constructor() {
        super();

        this.state = {
            contactname: '',
            email: '',
            phone: '',
            numberphone: '',
            countrycode: '',
            promocode: ''
        };
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }
    render() {
        const { contactname, email, numberphone, phone, promocode } = this.state
        return (
            <div style={{ width: '100%' }}>
                <div style={{ display: 'inline-flex', overflow: 'hidden', width: '100%' }}>
                    <HeaderText>Translation Payment</HeaderText>
                    <Step>2 of 2 Steps</Step>
                </div>
                <hr />
                <section style={{ padding: '0px 27px 63px 29px' }}>
                    <form style={{width:'60%'}}>
                        <PanelHeaderText>Contact Information</PanelHeaderText>
                        <Label>Contact Name*</Label><br />
                        <Input type='text' name='contactname' value={contactname} onChange={this.handleChange} /><br />
                        <Label>Mobile phone *</Label><br />
                        <InlineInputs>
                        <Select>
                            <option value='+86'> China (+86)</option>
                        </Select>
                        <Input type='text' name='numberphone' value={numberphone} onChange={this.handleChange} /><br />
                        <input type='hidden' name='phone' value={phone} onChange={this.handleChange} /><br />
                        </InlineInputs><br/>
                        <Label>Email *</Label><br />
                        <Input type='text' name='email' value={email} onChange={this.handleChange} /><br />
                        <PanelHeaderText>Contact Information</PanelHeaderText>
                        <Label>Payment currency *</Label><br />
                        <InlineInputs>
                        <Select>
                            <option value='HKD'> HKD - Hong Kong Dollar</option>
                        </Select>
                        <img style={{width: '139px',height: '28px', margin: '15px 0px'}} src={Card}/><br/>
                        </InlineInputs>
                        <Label>Total Price</Label><br />
                        <p>99.30 Hong Kong Dollar</p>
                    </form>
                    <form>
                        <Label>Use promotion code (if applicable)</Label><br />
                        <InlineInputs>
                        <Input type='text' name='promocode' value={promocode} onChange={this.handleChange} />
                        <ApplyPromo type="submit" value="Verify" />
                        </InlineInputs>
                    </form>
                    <div style={{margin:'134px 0px 20px 0px'}}>
                    <Term>By clicking 'Accept and Continue', you agree to the rules, restrictions and <a href="#">terms & conditions</a></Term>
                    <Button
                        align='right'
                        text='Confirm and Pay'
                        onClick={this.redirectToTarget}
                    />
                    </div>
                </section>
            </div >
        );
    }
}

export default Translation;

const HeaderText = styled.div`
font-size: 16px;
color: #303030;
font-weight: 700;
margin: 16px 0px 5px 0px;
padding: 0px 0px 7px 18px;
text-align: left;
float: left;
width:100%;
`;
const Step = styled.div`
font-family: Roboto;
font-size: 16px;
color: #c8c8c8;
font-weight: 700;
margin: 16px 0px 5px 0px;
padding: 0px 0px 7px 18px;
text-decoration: none solid rgb(200, 200, 200);
text-align: right;
float: right;
width:100%;
margin-right: 17px;
`;

const PanelHeaderText = styled.h3`
font-size: 16px;
color: #303030;
font-weight: 700;
text-decoration: none solid rgb(48, 48, 48);
`;

const Divider = styled.hr`
margin: 39px 0px 19px 0px;
background-color: #e8e8e8;
border: 1px solid #e8e8e8;
opacity: .8;
`;

const Label = styled.label`

font-size: 14px;
color: #5e5e5e;
line-height: 18px;

`;

const Input = styled.input`
width: 100%;
height: 34px;
padding: 10px;
margin: 12px 0px;
border: 1px solid #ebebeb;
background-color: #ffffff;

`;

const ApplyPromo = styled.input`
font-weight:900;
padding: 6px 10px;
background-color: #ebebeb;
font-size: 14px;
color: #000000;
text-align: center;
border:none;
height: 34px;
margin: 12px 5px;
`;

const Select = styled.select`
height: 34px;
border: 1px solid #ebebeb;
background-color: #ffffff;
margin: 12px 10px 12px 0px;
padding: 0px 10px;
`;
const InlineInputs = styled.div`
display: inline-flex;
`;
const Term = styled.p`
margin: 15px 0px 29px 0px;
`;