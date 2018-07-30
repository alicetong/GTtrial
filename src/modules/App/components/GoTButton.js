import React from 'react';
import styled from 'styled-components';


class GoTButton extends React.Component {

    render() {
        return (
            <Button
                float={this.props.align ? this.props.align : 'left'}
                type={this.props.type ? this.props.type : 'button'}
                onClick={this.props.onClick}
            >
                {this.props.text}
            </Button>
        )
    }


} export default GoTButton;

const Button = styled.button`
border:none;
box-shadow:none;
padding: 6px 10px;
background-image: linear-gradient(90deg, #ffcd03 2%, #ffdb4b 100% );
background-position: center center;
font-size: 14px;
color: #000000;
font-weight: 900;
text-decoration: none solid rgb(0, 0, 0);
text-align: center;
float: ${props => props.float};
cursor: pointer;
`;