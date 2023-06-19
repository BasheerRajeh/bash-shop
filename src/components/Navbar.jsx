import styled from "@emotion/styled";
import { Icon } from "@iconify/react";
import { Badge, MenuItem } from "@mui/material";
import { mobile } from "../utils/reponsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px", overflow: 'hidden' })};
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transform: translateX();
  ${mobile({ padding: "10px 0px" })};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })};
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })};
  &:focus {
    outline: none;
  }
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })};
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })};
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <MenuItem><Language>EN</Language></MenuItem>
          <SearchContainer>
            <Input />
            <Icon icon="mingcute:search-line" width="16" color="gray" />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>BASH.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <Icon icon="fluent:cart-24-regular" width="24" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
