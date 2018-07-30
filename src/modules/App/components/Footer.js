import React from 'react';
import styled from 'styled-components';
import Logo from '../img/GoTalents_Logo.png';
import FlagEN from '../img/en-flag.png';

class Footer extends React.Component {
    render() {
        return (
            <AppNav >
                <Menulist>
                    <List>ABOUT</List>
                    <List>|</List>
                    <List>PRESS</List>
                    <List>|</List>
                    <List>BLOG</List>
                    <List>|</List>
                    <List>CAREER</List>
                    <List>|</List>
                    <List>CONTACT</List>
                    <List>|</List>
                    <List>HELP</List>
                    <List>|</List>
                    <List>TRANSLATION</List>
                </Menulist>
                <Divider />
                <div style={{ display: 'inline-block',width:'100%',overflow:'hidden',marginBottom:'10px' }}>
                    <div style={{ textAlign: 'left',float:'left' }}>
                        <Navlogo src={Logo} />
                        <Menulist style={{ margin: '0', padding: '0px' }}>
                            <List>© 2018</List>
                            <List>User Agreement</List>
                            <List>Privacy Policy</List>
                            <List>Cookie Policy</List>
                            <List>Copyright Policy</List>
                        </Menulist>
                    </div>
                    <div style={{ textAlign: 'right',float:'right',margin: '10px 15px 0px 0px' }}>
                        <Flag src={FlagEN}/> <span>English</span>
                    </div>
                </div>


            </AppNav>
        );
    }
}

export default Footer;

const AppNav = styled.div`
width: 100%; 
overflow:hidden;
color: #fff;
background-image: linear-gradient(90deg, #000000 67%, #575757 100% );
background-position: center center;
`;
const Menulist = styled.ul`
display: inline-flex;
    list-style-type: none;
    margin-left: 20px;
`;
const List = styled.li`
padding: 0px 10px;
`;
const Divider = styled.hr`
margin: 0;
background-color: #ffc800;
border: 2px solid #ffc800;
opacity: .8;
`;
const Navlogo = styled.img`
width: 63px;
height: 18px;
margin: 9px 20px 0px 70px;
`;
const Flag = styled.img`
width: 25px;
height: 25px;
margin-top: -10px;
    margin-bottom: -7px;
    margin-right: 5px;
`;
