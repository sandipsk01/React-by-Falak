import { Component } from "react";
import styled from "styled-components";

// styled components
const Nav=styled.div`
height: 70px;
background: linear-gradient(170deg, #1bc059, #0d47a1);
display: flex;
justify-content: space-between;
align-items: center;
position: relative
`;

const Title=styled.div`
font-size: 30px;
color: #fff;
font-weight:600px;
font-family:'Times New Roman', Times, serif;
text-transform: uppercase;
margin-left:20px;
&:hover{color: #0f0}
`;

const CartCount=styled.div`
background-color: ${(props)=>props.color};
border-radius: 50%;
padding: 4px 8px;
position: absolute;
right: 10px;
top: -5px;
fontSize: 12px;
visibility: ${(props)=>props.show?"visible":"hidden"};
`;
    

class Navbar extends Component{
    render(){
        const {cartCount}=this.props;
        return(
            <>
            <Nav>
                <Title>Movie-Flix</Title>
                <div style={styles.cartIconContainer}>
                    <img 
                        style={styles.cartIcon}
                        src="https://cdn-icons-png.flaticon.com/128/891/891462.png" 
                        alt="cart-icon"
                    />
                    <CartCount color="yellow" show={true}>{cartCount}</CartCount>
                </div>
            </Nav>
            </>
        )
    }
}

export default Navbar;



const styles={
    
    cartIcon: {
        height: 48,
        marginRight: 20,
    },
    cartIconContainer: {
      position: "relative",
      cursor: "pointer",
    },
    
}