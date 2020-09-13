/* eslint-disable import/no-unresolved */
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #868686;
  max-width: 1200px;

  ul {
    display: flex;
    list-style: none;

    li {
      & + li {
        margin-left: 20px;
      }

      a {
        text-transform: uppercase;
        color: ${props => props.theme.colors.primary};
        text-decoration: none;
      }
    }
  }
`;

export const Logo = styled.img`
  min-width: 78px;
`;

export const BoxInfo = styled.section`
  max-width: 800px;
  text-align: center;
  margin: 0 auto;
  padding: 40px;

  h1 {
    font-size: 40px;
    color: ${props => props.theme.colors.text};
    font-weight: 300;
    margin-bottom: 20px;
  }

  span {
    color: ${props => props.theme.colors.text};
    font-weight: 800;
  }

  p {
    font-size: 20px;
    color: ${props => props.theme.colors.primary};
  }
`;
export const BoxCard = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 20px;
`;
export const Card = styled.section`
  border: 1px solid;
`;
export const CardImgFirst = styled.section`
  text-align: center;
  padding: 20px;
  background: #fe9481;

  p {
    font-size: 27px;
    color: #fff;
    font-weight: 300;
    margin-top: 20px;
  }
`;

export const CardImgSecond = styled.section`
  text-align: center;
  padding: 20px;
  background: #fcda92;

  p {
    font-size: 27px;
    color: #fff;
    font-weight: 300;
    margin-top: 20px;
  }
`;

export const CardImgThird = styled.section`
  text-align: center;
  padding: 20px;
  background: #9c8cb9;

  p {
    font-size: 27px;
    color: #fff;
    font-weight: 300;
    margin-top: 20px;
  }
`;
export const CardInfoFirst = styled.section`
  height: 120px;
  background: #fff;
  padding: 0px 10px;
  color: #868686;

  button {
    margin-left: 70%;
    padding: 10px;
    background: #fe9481;
    border: none;
    color: #fff;
    font-weight: 300;
  }
`;

export const CardInfoSecond = styled.section`
  height: 120px;
  background: #fff;
  padding: 0px 10px;
  color: #868686;

  button {
    margin-left: 70%;
    padding: 10px;
    background: #fcda92;
    border: none;
    color: #fff;
    font-weight: 300;
  }
`;

export const CardInfoThird = styled.section`
  height: 120px;
  background: #fff;
  padding: 0px 10px;
  color: #868686;

  button {
    margin-left: 70%;
    padding: 10px;
    background: #9c8cb9;
    border: none;
    color: #fff;
    font-weight: 300;
  }
`;
export const Footer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 20px;
`;
export const BoxSite = styled.section`
  font-size: 15px;
  color: ${props => props.theme.colors.primary};
`;
export const BoxImg = styled.section``;
export const BoxLogo = styled.section``;
