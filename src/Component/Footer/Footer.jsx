// import React from 'react'
// import SocialIcon, { Facebook, Instagram, MailOutline, Phone, Room, Telegram, Twitter } from '@material-ui/icons'
// import last from './last.css';
// function Footer() {
//     return (
//         <div className='Footer'>
//             <div className='Footer-left'>
//                 <h3 className='Footer-Logo'>LAMA.</h3>
//                 <p className='Footer-Desc'>here are many variations of passages of lorem ipsum, availbe but the majority
//                     here are many variations of passages of lorem ipsum, availbe but the majority
//                     here are many variations of passages of lorem ipsum, availbe but the majority
//                 </p>
//                 <div className='Footer-SocailContainer'>
//                     <div className='Footer-SocailIcon'>
//                         <Facebook style={{ backgroundColor: 'red' }} />
//                         <Instagram style={{ backgroundColor: 'red' }} />
//                         <Twitter style={{ backgroundColor: '#55ACEE' }} />
//                         <Telegram style={{ backgroundColor: '#E60023' }} />
//                     </div>
//                 </div>
//             </div>
//             <div className='Footer-Center'>
//                 <h3 className='Footer-Center-Title'>Useful links</h3>

//                 <ul className='Footer-List'>
//                     <li className='Footer-ListItem'>Home</li>

//                     <li className='Footer-ListItem'>Cart</li>

//                     <li className='Footer-ListItem'>Man Fashion</li>

//                     <li className='Footer-ListItem'>Women Fashion</li>

//                     <li className='Footer-ListItem'>Accessories</li>

//                     <li className='Footer-ListItem'>My Account</li>

//                     <li className='Footer-ListItem'>Oder Tracking</li>

//                     <li className='Footer-ListItem'>WishList</li>

//                     <li className='Footer-ListItem'>Terms</li>
//                 </ul>
//             </div>
//             <div className='Footer-Right'>
//                 <h3 className='Footer-Right-Title'>Contact</h3>
//                 <div className='ContactItem'>
//                   <Room/> +1 234 56 79
//                 </div>
//                 <div className='ContactItem'>
//                     <Phone/> contact@lama.dev
//                 </div>
//                 <div className='ContactItem'>
//                    <MailOutline/>
//                 </div>

//             </div>
//         </div>






//     )
// }

// export default Footer;
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import PinterestIcon from "@mui/icons-material/Pinterest";
import RoomIcon from "@mui/icons-material/Room";
import TwitterIcon from "@mui/icons-material/Twitter";
  import styled from "styled-components";
  
  const Container = styled.div`
    display: flex;
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;

  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
  
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>LAMA.</Logo>
          <Desc>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly believable.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <FacebookIcon />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <InstagramIcon />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <TwitterIcon />
            </SocialIcon>
            <SocialIcon color="E60023">
              <PinterestIcon />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +1 234 56 78
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> contact@lama.dev
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
  };
  
  export default Footer;