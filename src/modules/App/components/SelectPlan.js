import React from 'react';
import styled from 'styled-components';
import IconA from '../img/planA.svg';
import IconB from '../img/planB.svg';
import IconC from '../img/planC.svg';
import IconD from '../img/planD.svg';
import IconA1 from '../img/planA1.svg';
import IconA2 from '../img/planA2.png';
import IconA4 from '../img/planA4.svg';
import IconB2 from '../img/planB2.svg';
import IconD1 from '../img/planD1.png';
import IconD2 from '../img/planD2.png';
import Icon3 from '../img/plan3.svg';
import IconD41 from '../img/planD41.png';
import IconD42 from '../img/planD42.png';
import Button from './GoTButton';
import SideBar from './SideBar';
class SelectPlan extends React.Component {

  constructor() {
    super();

    this.state = {
      paymentplan: 'option1',
      paymentmethod: '',
      priceMonthly: 199,
      priceYearly: 159
    };
    this.handleChange = this.handleChange.bind(this);
    this.renderPlanHilight = this.renderPlanHilight.bind(this);
    this.redirectToTarget = this.redirectToTarget.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });

    if (event.target.name === 'paymentplan') {
      if (event.target.value === 'option2') {
        this.setState({
          priceMonthly: 495,
          priceYearly: 395
        })
      } else if (event.target.value === 'option3') {
        this.setState({
          priceMonthly: 675,
          priceYearly: 539
        })
      } else if (event.target.value === 'option4') {
        this.setState({
          priceMonthly: 999,
          priceYearly: 799
        })
      } else {
        this.setState({
          priceMonthly: 199,
          priceYearly: 159
        })
      }
    }


  }

  renderPlanHilight = () => {
    if (this.state.paymentplan === 'option2') {
      return (
        <div style={{ display: 'inline-flex' }}>
          <PlanSelected>
            <PlanSelectedIcon src={IconA1} />
            <PlanSelectedHeader>Personal Dashboard</PlanSelectedHeader>
            <PlanSelectedDetail>Get data on your profile traffic, job applications and competing applicants</PlanSelectedDetail>
          </PlanSelected>
          <PlanSelected>
            <PlanSelectedIcon src={IconB2} />
            <PlanSelectedHeader>Smart Recommendations</PlanSelectedHeader>
            <PlanSelectedDetail>Receive personalized recommendations on <b>work opportunities and 15 local talents weekly</b></PlanSelectedDetail>
          </PlanSelected>
          <PlanSelected>
            <PlanSelectedIcon src={Icon3} />
            <PlanSelectedHeader>Out-of-network Messaging</PlanSelectedHeader>
            <PlanSelectedDetail>Message users outside your connections; <b>20 users per week</b></PlanSelectedDetail>
          </PlanSelected>
          <PlanSelected>
            <PlanSelectedIcon src={IconD41} style={{ width: '59px', height: '59px', marginTop: '-12px', marginBottom: '-11px' }} />
            <PlanSelectedHeader>Talent Finder</PlanSelectedHeader>
            <PlanSelectedDetail>Browse and connect with talents and businesses outside of your network, with full visibility</PlanSelectedDetail>
          </PlanSelected>
        </div>
      )
    } else if (this.state.paymentplan === 'option3') {
      return (
        <div style={{ display: 'inline-flex' }}>
          <PlanSelected>
            <PlanSelectedIcon src={IconD1} />
            <PlanSelectedHeader>Corporate Dashboard</PlanSelectedHeader>
            <PlanSelectedDetail>Receive data based on our analyses and comparison of your profile traffic, applicants</PlanSelectedDetail>
          </PlanSelected>
          <PlanSelected>
            <PlanSelectedIcon src={IconB2} />
            <PlanSelectedHeader>Smart Recommendations</PlanSelectedHeader>
            <PlanSelectedDetail>Receive personalized recommendations on <b>work opportunities and 30 local talents weekly</b></PlanSelectedDetail>
          </PlanSelected>
          <PlanSelected>
            <PlanSelectedIcon src={Icon3} />
            <PlanSelectedHeader>Out-of-network Messaging</PlanSelectedHeader>
            <PlanSelectedDetail>Message users outside your connections; <b>30 users per week</b></PlanSelectedDetail>
          </PlanSelected>
          <PlanSelected>
            <PlanSelectedIcon src={IconD42} />
            <PlanSelectedHeader>Opportunity Posts</PlanSelectedHeader>
            <PlanSelectedDetail>Post opportunities and projects for recruitment or collaboration;<b> 2 posts simultaneously</b></PlanSelectedDetail>
          </PlanSelected>
        </div>
      )
    } else if (this.state.paymentplan === 'option4') {
      return (
        <div style={{ display: 'inline-flex' }}>
          <PlanSelected>
            <PlanSelectedIcon src={IconD1} />
            <PlanSelectedHeader>Corporate Dashboard</PlanSelectedHeader>
            <PlanSelectedDetail>Receive data based on our analyses and comparison of your profile traffic, applicants</PlanSelectedDetail>
          </PlanSelected>
          <PlanSelected>
            <PlanSelectedIcon src={IconD2} />
            <PlanSelectedHeader>Global Recommendations</PlanSelectedHeader>
            <PlanSelectedDetail>Receive personalized recommendations on <b>partnerships and 50 international talents weekly</b></PlanSelectedDetail>
          </PlanSelected>
          <PlanSelected>
            <PlanSelectedIcon src={Icon3} />
            <PlanSelectedHeader>Out-of-network Messaging</PlanSelectedHeader>
            <PlanSelectedDetail>Message users outside your connections; <b>40 users per week</b></PlanSelectedDetail>
          </PlanSelected>
          <PlanSelected>
            <PlanSelectedIcon src={IconD41} style={{ width: '59px', height: '59px', margin: '-10px -5px -20px -12px' }} />
            <PlanSelectedIcon src={IconD42} />
            <PlanSelectedHeader>Opportunity Posts</PlanSelectedHeader>
            <PlanSelectedDetail>Post opportunities and projects for recruitment or collaboration;<b> 5 posts simultaneously</b></PlanSelectedDetail>
          </PlanSelected>
        </div>
      )
    } else {
      return (
        <div style={{ display: 'inline-flex' }}>
          <PlanSelected>
            <PlanSelectedIcon src={IconA1} />
            <PlanSelectedHeader>Personal Dashboard</PlanSelectedHeader>
            <PlanSelectedDetail>Get data on your profile traffic, job applications and competing applicants</PlanSelectedDetail>
          </PlanSelected>
          <PlanSelected>
            <PlanSelectedIcon src={IconA2} />
            <PlanSelectedHeader>Work Recommendations</PlanSelectedHeader>
            <PlanSelectedDetail>Receive personalized recommendations on work opportunities</PlanSelectedDetail>
          </PlanSelected>
          <PlanSelected>
            <PlanSelectedIcon src={Icon3} />
            <PlanSelectedHeader>Out-of-network Messaging</PlanSelectedHeader>
            <PlanSelectedDetail>Message users outside your connections; <b>5 users per week</b></PlanSelectedDetail>
          </PlanSelected>
          <PlanSelected>
            <PlanSelectedIcon src={IconA4} />
            <PlanSelectedHeader>Featured application</PlanSelectedHeader>
            <PlanSelectedDetail>Let your job applications appear prioritized and highlighted to employers</PlanSelectedDetail>
          </PlanSelected>
        </div>
      )
    }


  }
  renderApplyMember = () => {
    if (this.state.paymentplan === 'option1') {
      return (
        <MainPanel>
          <section style={{ padding: '5px 27px 33px 29px' }}>
            <PanelHeaderText>Apply this membership</PanelHeaderText>
            <PanelSubHeaderText>Select to which profile you will apply the premium plan chosen above</PanelSubHeaderText>
            <div style={{ marginTop: '19px' }}>
              <ChoiceBox><input type='radio' name='profile' value='individual' />
                <b>Individual Profile: Paul Lee </b><br />
              </ChoiceBox>
              <ChoiceBox><input type='radio' name='profile' value='corporate' />
                <b>Corporate Profile: GoTalents</b><br />
              </ChoiceBox>
            </div>
          </section>
        </MainPanel>
      )
    }
    else {
      return (null)
    }
  }

  renderSubsPeriod = () => {
    if (this.state.paymentmethod !== '' && this.state.paymentmethod === 'optionA') {
      return (
        <div>
          <SelectMonth>
            {this.getRangeOptions(3, 12)}
          </SelectMonth>
          Months
        </div>
      )
    } else if (this.state.paymentmethod !== '' && this.state.paymentmethod === 'optionB') {
      return (
        <div>
          <SelectMonth>
            {this.getRangeOptions(1, 5)}
          </SelectMonth>
          Year(s)
        </div>
      )
    } else {
      return (
        <div>
          <SelectMonth>
            {this.getRangeOptions(1, 12)}
          </SelectMonth>
          Months
        </div>
      )
    }

  }

  getRangeOptions = (start, end) => {
    var arr = [];
    for (let i = start; i <= end; i++) {
      arr.push(<option key={i} value="{i}">{i}</option>)
    }
    return arr;
  }
  redirectToTarget = () => {
    this.props.history.push('/payment')
  }

  render() {
    const borderSelected = '2px solid #ffc800'
    const borderChoices = '1px solid #d1d1d1'
    const { priceMonthly, priceYearly } = this.state
    return (
      <div>
        
        <PanelArea>
          <MainPanel>
            <div style={{ width: '100%' }}>
              <PanelHeaderText style={{ padding: '0px 0px 7px 18px' }}>Become a Premium Member</PanelHeaderText>
              <hr />
              <section style={{ padding: '0px 27px 33px 29px' }}>
                <PanelHeaderText>Membership type</PanelHeaderText>
                <PanelSubHeaderText>Explore and choose a plan that best helps your creative journey</PanelSubHeaderText>
                <Planarea>
                  <PlanForm>
                    <FormChoice borderColor={this.state.paymentplan === 'option1' ? borderSelected : borderChoices}>
                      <ChoiceBox>
                        <Choice
                          type='radio'
                          name='paymentplan'
                          value='option1'
                          checked={this.state.paymentplan === 'option1'}
                          onChange={this.handleChange} />
                        <div>
                          <ChoiceIcon src={IconA} />
                          <ChoiceTopic>Plan A</ChoiceTopic>
                          <ChoiceSubTopic>Build Your Creative Career <br /> </ChoiceSubTopic>
                          <ChoiceDetail>Made for talented individuals and groups seeking employment</ChoiceDetail>
                        </div>
                      </ChoiceBox>
                    </FormChoice>
                    <FormChoice borderColor={this.state.paymentplan === 'option2' ? borderSelected : borderChoices}>
                      <ChoiceBox><Choice
                        type='radio'
                        name='paymentplan'
                        value='option2'
                        checked={this.state.paymentplan === 'option2'}
                        onChange={this.handleChange} />
                        <div>
                          <ChoiceIcon src={IconB} />
                          <ChoiceTopic>Plan B</ChoiceTopic>
                          <ChoiceSubTopic>Launch Your Creative Project <br /> </ChoiceSubTopic>
                          <ChoiceDetail>Made for talents seeking collaboration and entrepreneurship</ChoiceDetail>
                        </div>
                      </ChoiceBox>
                    </FormChoice>
                    <FormChoice borderColor={this.state.paymentplan === 'option3' ? borderSelected : borderChoices}>
                      <ChoiceBox><Choice
                        type='radio'
                        name='paymentplan'
                        value='option3'
                        checked={this.state.paymentplan === 'option3'}
                        onChange={this.handleChange} />
                        <div>
                          <ChoiceIcon src={IconC} />
                          <ChoiceTopic>Plan C</ChoiceTopic>
                          <ChoiceSubTopic>Hire Creative Professionals (for SMEs)</ChoiceSubTopic>
                          <ChoiceDetail>Made for small-medium businesses seeking recruitment</ChoiceDetail>
                        </div>
                      </ChoiceBox>
                    </FormChoice>
                    <FormChoice borderColor={this.state.paymentplan === 'option4' ? borderSelected : borderChoices}>
                      <ChoiceBox><Choice
                        type='radio'
                        name='paymentplan'
                        value='option4'
                        checked={this.state.paymentplan === 'option4'}
                        onChange={this.handleChange} />
                        <div>
                          <ChoiceIcon src={IconD} />
                          <ChoiceTopic>Plan D</ChoiceTopic>
                          <ChoiceSubTopic>Hire Creative Professionals (for MNCs)</ChoiceSubTopic>
                          <ChoiceDetail>Made for larger companies seeking large-scale recruitment</ChoiceDetail>
                        </div>
                      </ChoiceBox>
                    </FormChoice>
                  </PlanForm>
                </Planarea>
              </section>
              <hr />
              <section style={{ padding: '0px 25px 20px 25px' }}>
                <PlanSelectedTopic>Key Highlights</PlanSelectedTopic>
                {this.renderPlanHilight()}
              </section>
            </div>
          </MainPanel>
          <SideBar />
          {this.renderApplyMember()}
          <MainPanel>
            <section style={{ padding: '5px 27px 33px 29px' }}>
              <PanelHeaderText>Payment method</PanelHeaderText>
              <PanelSubHeaderText>Subscribe monthly or annually, but fees will always be charged monthly</PanelSubHeaderText>
              <PayChoices>
                <div style={{ width: '50%' }}>
                  <ChoiceBox>
                    <input type='radio'
                      name='paymentmethod'
                      value='optionA'
                      checked={this.state.paymentmethod === 'optionA'}
                      onChange={this.handleChange} />
                    Subscribe monthly <br />
                  </ChoiceBox>
                  <br />
                  <PriceBoxDetail>
                    <PriceBox style={{ paddingTop: '8px' }}>
                      <h2>HKD {priceMonthly}</h2>
                      <br />
                      <PriceCondition>Charged every month, for minimum 3-months' purchase</PriceCondition>
                    </PriceBox >
                  </PriceBoxDetail>
                </div>
                <div style={{ width: '50%' }}>
                  <ChoiceBox>
                    <input type='radio'
                      name='paymentmethod'
                      value='optionB'
                      checked={this.state.paymentmethod === 'optionB'}
                      onChange={this.handleChange} />
                    Subscribe annually<br />
                  </ChoiceBox>
                  <PriceBoxDetail>
                    <YellowText>Discount offered for annual subscription!</YellowText>
                    <PriceBox >
                      <h2>HKD {priceYearly}</h2>
                      <br />
                      <PriceCondition>Charged every month, for 1-year purchase</PriceCondition>
                    </PriceBox>
                  </PriceBoxDetail>
                </div>
              </PayChoices>
            </section>
          </MainPanel>
          <MainPanel>
            <section style={{ padding: '5px 27px 33px 29px' }}>
              <PanelHeaderText>Subscription duration</PanelHeaderText>
              <PanelSubHeaderText>Indicate how long you want to be a member to this plan</PanelSubHeaderText>
              <p>Please select number of months you want to subscribe.</p>
              {this.renderSubsPeriod()}
            </section>
          </MainPanel>
          <MainPanel>
            <section style={{ padding: '5px 27px 33px 29px', width: '100%' }}>
              <PanelHeaderText>Added quota</PanelHeaderText>
              <PanelSubHeaderText>Select to add quota to the below features</PanelSubHeaderText>
              <PayChoices>
                <div >
                  <ChoiceBox><input type='radio' name='quota' value='true' />
                    Add quota <br />
                  </ChoiceBox>
                  <br />
                  <PriceBoxDetail>
                    <p>Out-of-network Messaging  <b>+3 per week</b></p>
                    <p>Opportunity Post  <b>+1</b></p>
                    <p style={{ color: '#8c8c8c', margin: '20px 0px' }}>HKD 30 per month</p>
                    <a href="#">Learn More</a>
                  </PriceBoxDetail>
                </div>
              </PayChoices>
              <Divider />
              <Term>By clicking 'Accept and Continue', you agree to the rules, restrictions and <a href="#">terms & conditions</a></Term>
            
                <Button
                  align='right' 
                  text='Confirm and Pay'
                  onClick={this.redirectToTarget}
                />
           
            </section>
          </MainPanel>
        </PanelArea>
      </div>
    );
  }
}

export default SelectPlan;


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
const Planarea = styled.div`
margin-top:12px;

`;
const PlanForm = styled.form`
display: inline-flex;
width: 100%;

`;
const FormChoice = styled.div`
width: 25%;
padding: 8px;
margin: 3px;
cursor: pointer;
border: ${props => props.borderColor};
border-radius: 2px;
background-color: #ffffff;
`;
const ChoiceBox = styled.label`
text-align: center;
cursor: pointer;

`;
const Choice = styled.input`
visibility:hidden;
`;

const ChoiceTopic = styled.h5`
font-size: 12px;
color: #ffc800;
font-weight: 700;
text-decoration: none solid rgb(255, 200, 0);
line-height: 16px;
text-align: center;
margin: 0px 0px 5px 0px;

`;
const ChoiceSubTopic = styled.h4`
font-size: 14px;
color: #1c1c1c;
font-weight: 700;
text-decoration: none solid rgb(28, 28, 28);
line-height: 16px;
text-align: center;
margin: 0px 0px 10px 0px;
`;
const ChoiceDetail = styled.h6`
font-size: 12px;
color: #a3a3a3;
font-weight: 500;
text-decoration: none solid rgb(163, 163, 163);
line-height: 15px;
text-align: center;
margin: 0px 0px 5px 0px;
`;
const ChoiceIcon = styled.img`
width: 43px;
height: 43px;

`;
const PlanSelectedTopic = styled.p`
font-size: 13px;
color: #ffc800;
font-weight: 900;
text-decoration: none solid rgb(255, 200, 0);
line-height: 18px;

`;
const PlanSelected = styled.div`
width: 25%;
text-align: center;

`;
const PlanSelectedIcon = styled.img`
width: 36px;
height: 36px;

`;
const PlanSelectedHeader = styled.p`
font-size: 12px;
color: #1a1a1a;
font-weight: 500;
text-decoration: none solid rgb(26, 26, 26);
line-height: 16px;
text-align: center;

`;
const PlanSelectedDetail = styled.p`

font-size: 12px;
color: #8a8a8a;
font-weight: 500;
text-decoration: none solid rgb(138, 138, 138);
line-height: 14px;
text-align: center;

`;
const PayChoices = styled.div`

display: inline-flex;
margin: 38px 0px 0px 0px;

`;
const YellowText = styled.p`
font-weight: 900;
font-size: 14px;
color: #ffc800;
text-decoration: none solid rgb(255, 200, 0);
line-height: 16px;
margin: 0px 0px 30px 0px;
`;
const PriceCondition = styled.h5`
font-weight: normal;
font-size: 13px;
color: #1c1c1c;
text-decoration: none solid rgb(28, 28, 28);
line-height: 17px;
`;
const PriceBox = styled.div`
text-align: 'left'
`;
const PriceBoxDetail = styled.div`
padding: 0px 0px 0px 16px;
width: 100%;
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

const Divider = styled.hr`
margin: 39px 0px 19px 0px;
background-color: #e8e8e8;
border: 1px solid #e8e8e8;
opacity: .8;
`;
const Term = styled.p`
margin: 15px 0px 29px 0px;
`;