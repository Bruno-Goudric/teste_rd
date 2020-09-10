import React, { useState } from 'react';

import logo from '../../assets/rd.png';
import desktop from '../../assets/desktop.png';
import tablet from '../../assets/tablet.png';
import mobile from '../../assets/mobile.png';
import drogaraia from '../../assets/drogaraia.png';
import drogasil from '../../assets/drogasil.png';
import farmasil from '../../assets/farmasil.png';
import univers from '../../assets/univers.png';
import bio from '../../assets/4bio.png';
import rd_small from '../../assets/rd-small.png';

import {
  Container,
  Header,
  Logo,
  BoxInfo,
  BoxCard,
  Card,
  CardImgFirst,
  CardImgSecond,
  CardImgThird,
  CardInfoFirst,
  CardInfoSecond,
  CardInfoThird,
  Footer,
  BoxSite,
  BoxImg,
  BoxLogo,
} from './styles';

const Home: React.FC = () => {
  const [open, setOpen ] = useState(false);

  return (
    <Container>
      <Header>
        <Logo src={logo} alt="" />
        <ul>
          <li><a href="#">html5</a></li>
          <li><a href="#">CSS3</a></li>
          <li><a href="#">JavaScript</a></li>
          <li><a href="#">React</a></li>
          <li><a href="#">Redux</a></li>
        </ul>
      </Header>
      <BoxInfo>
        <h1>
          Crie este site <span>responsivo</span> com <span>React</span>{' '}
          utilizando <span>styled-components</span>
        </h1>

        <p>A fonte utilizada é a Open Sans de 300 a 800.</p>
        <p>exemplo: "Open Sans", Helvetica, sans-serif, arial;</p>
        <p>Já as cores são:</p>
        <p>#007f56, #868686, #FE9481, #FCDA92 e #9C8CB9</p>
      </BoxInfo>
      <BoxCard>
        <Card>
          <CardImgFirst>
            <img src={desktop} alt="desktop" />
            <p>Site Responsivo DESKTOP</p>
          </CardImgFirst>
          <CardInfoFirst>
            <p>
              Quando pressionado o botão Leia mais... o restante da informação
              deverá aparecer em scroll down.
            </p>
            <button>Leia mais...</button>
          </CardInfoFirst>
        </Card>

        <Card>
          <CardImgSecond>
            <img src={tablet} alt="tablet" />
            <p>Site Responsivo Tablet</p>
          </CardImgSecond>
          <CardInfoSecond>
            <p>
              Quando pressionado o botão Leia mais... o restante da informação
              deverá aparecer em um pop-up na tela.
            </p>
              <button >Leia mais...</button>


          </CardInfoSecond>
        </Card>

        <Card>
          <CardImgThird>
            <img src={mobile} alt="mobile" />
            <p>Site Responsivo Mobile</p>
          </CardImgThird>
          <CardInfoThird>
            <p>
              Quando pressionado o botão alterar tema... modifique o tema do
              site para blackfriday a seu gosto.
            </p>
            <button>alterar tema</button>
          </CardInfoThird>
        </Card>
      </BoxCard>
      <Footer>
        <BoxSite>RD 2017 Todos os direitos reservados</BoxSite>
        <BoxImg>
          <img src={drogaraia} alt="" />
          <img src={drogasil} alt="" />
          <img src={farmasil} alt="" />
          <img src={univers} alt="" />
          <img src={bio} alt="" />
        </BoxImg>
        <BoxLogo>
          <img src={rd_small} alt="" />
        </BoxLogo>
      </Footer>
    </Container>
  );
};

export default Home;
