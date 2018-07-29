import React from 'react';
import styled from 'styled-components';
import Logo from '../img/GoTalents_Logo.png';
import IconSearch from '../img/searchIcon.png';
import IconConnection from '../img/connentionIcon.png';
import IconMessage from '../img/messageIcon.png';
import IconNews from '../img/newsfeedIcon.png';
import IconOpportunity from '../img/opportunityIcon.png';
import IconUpdate from '../img/updateIcon.png';
const AppNav = styled.div`
width: 100%;
height: 54px;
background:#212124; 
display: inline-flex;
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
const RightMenu = styled.div`
float:right;
`;
const RightIcon = styled.div`
text-align: center;
margin: 8px 8px;
display: inline-block;
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
class NavBar extends React.Component {
    render() {
        return (
            <AppNav >
                <Navlogo src={Logo} />
                <SearchBox>
                    <SearchArea type="text"></SearchArea>
                    <SearchButton><SearchIcon src={IconSearch} /></SearchButton>
                </SearchBox>
                <RightMenu>
                    <RightIcon>
                        <MenuIcon  src={IconNews}/>
                        <MenuLabel>NewFeed</MenuLabel>
                    </RightIcon>
                    <RightIcon>
                        <MenuIcon  src={IconOpportunity}/>
                        <MenuLabel>Opportunity</MenuLabel>
                    </RightIcon>
                    <RightIcon>
                        <MenuIcon  src={IconUpdate}/>
                        <MenuLabel>Update</MenuLabel>
                    </RightIcon>                    
                    <RightIcon>
                        <MenuIcon  src={IconConnection}/>
                        <MenuLabel>Connection</MenuLabel>
                    </RightIcon>
                    <RightIcon>
                        <MenuIcon  src={IconMessage}/>
                        <MenuLabel>Messages</MenuLabel>
                    </RightIcon>                                                            
                </RightMenu>
            </AppNav>
        );
    }
}

export default NavBar;

