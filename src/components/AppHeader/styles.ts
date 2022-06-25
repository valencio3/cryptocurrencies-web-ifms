import styled from 'styled-components'

export const Header = styled.div`
  background-image: linear-gradient(to right, #8c14fc, #a537fd);
  padding: 30px 20px;
  display: flex;

  * {
    vertical-align: middle;
  }
`

export const Title = styled.h1`

  color: white;
  font-family: 'bold';
  margin: 0;

  @media (max-width: 600px) {
    text-align: center;
    margin: 0;
    font-size: 150%;
  }
`
export const UserName = styled.h3`
  color: white;
  font-family: 'bold';
  margin: 0;
  padding-top: 10px;
  margin-left: auto;

  @media (max-width: 600px) {
    text-align: center;
    margin: 0;
    font-size: 150%;
  }
`
export const VsCurrencyLabel = styled.span`
  color: white;
  font-family: 'bold';
  margin-left: auto;
  margin-right: 10px;
  padding-top: 5px;
  font-size: 110%;
`

export const SelectVsCurrency = styled.select`
  height: 30px;
  border: 2px solid #d5b8ff;
  background-color: white;
  border-radius: 10px;
  padding: 0px 10px;
  font-family: 'bold';
  font-size: 100%;
  color: #8c14fc;

  :focus {
    outline: 2px solid #8c14fc;
  }
`

export const VsCurrencyOption = styled.option`
  font-family: 'bold';
`

export const SignOutButton = styled.img`
  height: 30px;
  width: 30px;
  margin-left: 20px;
  cursor: pointer;
  filter: invert(1);
  :hover {
    opacity: 0.7;
  }
`
