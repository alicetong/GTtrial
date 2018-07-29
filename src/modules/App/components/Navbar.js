import React from 'react';
import styled from 'styled-components';
import Logo from '../img/GoTalents_Logo.png';
import IconSearch from '../img/searchIcon.png';
import IconConnection from '../img/connentionIcon.png';
import IconMessage from '../img/messageIcon.png';
import IconNews from '../img/newsfeedIcon.png';
import IconOpportunity from '../img/opportunityIcon.png';
import IconUpdate from '../img/updateIcon.png';
import IconProfile from '../img/profileIcon.png';
import IconArrowDown from '../img/arrowDown.svg';
const AppNav = styled.div`
width: 100%;
height: 54px;
background:#212124; 

overflow:hidden;
`;
const Navlogo = styled.img`
width: 115px;
height: 33px;
margin: 9px 20px 9px 70px;
`;
const SearchBox = styled.div`
margin: 11px 20px ;
display: inline-flex;
`;
const SearchArea = styled.input`
width: 282px;
height: 32px;
font-size: 14px;
color: #555;
background-color: #fff;
background-image: none;
border: 1px none #c8c8c8;
border-radius: 3px;
padding: 0px 12px;
`;
const SearchButton = styled.button`
width: 35px;
height: 32px;
border-radius: 2px;
background-color: #ebebeb;
border: 0;
box-shadow: none;
margin-left: -7px;
padding: 0px;
`;
const SearchIcon = styled.img`
width: 16px;
height: 17px;
margin: 7px 8px 9px 8px;
`;
const NavLeft = styled.div`
float: left;
display: inline-flex;
`;
const NavRight = styled.div`
float: right;
display: inline-flex;
`;
const RightMenu = styled.div`
display: inline-block;
`;
const RightIcon = styled.div`
text-align: center;
margin: 3px 8px;
display: inline-block;
cursor: pointer;
`;
const MenuIcon = styled.img`
width: 29px;
height: 29px;
opacity: 0.8;
`;
const MenuLabel = styled.div`
height: 12px;
opacity: 0.8;
font-size: 10px;
color: #ffffff;
font-weight: 500;
text-decoration: none solid rgb(255, 255, 255);
text-align: center;
`;
const Divider = styled.div`
color: #8a8a8a;
font-weight: 500;
font-size: 28pt;
opacity: .5;
display: inline-flex;
margin: 5px 20px 5px 20px;
`;
const ProfileIcon = styled.img`
width: 26px;
height: 26px;
margin-top: 5px;
margin-right: 60px;
border: 1px solid #fff;
border-radius: 50%;
cursor: pointer;
`;
const ProfileMenu = styled.div`
cursor: pointer;
display: flex;
cursor: pointer;
height: 12px;
opacity: 0.8;
font-size: 10px;
color: #ffffff;
font-weight: 500;
text-decoration: none solid rgb(255, 255, 255);
text-align: center;
`;
class NavBar extends React.Component {
    render() {
        return (
            <AppNav >
                <NavLeft>
                <Navlogo src={Logo} />
                <SearchBox>
                    <SearchArea type="text"></SearchArea>
                    <SearchButton><SearchIcon src={IconSearch} /></SearchButton>
                </SearchBox>
                </NavLeft>
                <NavRight>
                    <RightMenu>
                        <RightIcon>
                            <MenuIcon src={IconNews} />
                            <MenuLabel>NewFeed</MenuLabel>
                        </RightIcon>
                        <RightIcon>
                            <MenuIcon src={IconOpportunity} style={{ width: '23px', height: '23px' }} />
                            <MenuLabel>Opportunity</MenuLabel>
                        </RightIcon>
                        <RightIcon>
                            <MenuIcon src={IconUpdate} style={{ width: '31px', height: '31px' }} />
                            <MenuLabel>Update</MenuLabel>
                        </RightIcon>
                        <RightIcon>
                            <MenuIcon src={IconConnection} />
                            <MenuLabel>Connection</MenuLabel>
                        </RightIcon>
                        <RightIcon>
                            <MenuIcon src={IconMessage} />
                            <MenuLabel>Messages</MenuLabel>
                        </RightIcon>
                    </RightMenu>
                    <Divider>|</Divider>
                    <RightIcon>
                        <ProfileIcon src={IconProfile} />
                        <ProfileMenu>Me<img src={IconArrowDown} style={{ width: '17px', height: '17px', marginTop: '-3px' }} /></ProfileMenu>
                    </RightIcon>
                </NavRight>
            </AppNav>
        );
    }
}

export default NavBar;

