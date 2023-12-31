import styled from "@emotion/styled";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Products from "../components/Products";
import Newsletter from "../components/NewsLetter";
import { mobile } from "../utils/reponsive";

const Container = styled.div`
  height: 100vh;
`;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })};
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })};
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })};
`;

const Option = styled.option`
    padding: 10px;
`;

const ProductsList = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Product: </FilterText>
                    <Select>
                        <Option selected disabled>
                            Color
                        </Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                    </Select>
                    <Select>
                        <Option selected disabled>
                            Size
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Product: </FilterText>
                    <Select>
                        <Option selected>
                            Newset
                        </Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>

                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    );
};

export default ProductsList;
