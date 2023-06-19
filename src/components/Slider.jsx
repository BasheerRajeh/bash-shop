import styled from "@emotion/styled";
import { Icon } from "@iconify/react";
import { Button } from "@mui/material";
import { useState } from "react";
import { sliderItems } from "../data";
import { mobile } from "../utils/reponsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })};
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background: #fff7f7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  opacity: 0.5;
  z-index: 1;
  &:hover {
    background: #ffe7f7;
    scale: 1.1;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${props => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  background: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
  text-transform: uppercase;
`;

const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
`;

const ActionButton = styled(Button)`
  border: 2px solid black;
  border-radius: 2px;
  font-size: 18px;
  font-weight: 600;
  transition: all 0.3s ease;
  &:hover {
    scale: 1.1;
    border: 2px solid black;
  }
`;
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex((prev) => {
        return (prev + sliderItems.length - 1) % sliderItems.length;
      });
    }

    if (direction === 'right') {
      setSlideIndex((prev) => {
        return (prev + 1 + sliderItems.length) % sliderItems.length;
      });
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <Icon icon="tabler:chevron-left" color="gray" width="24" />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id} bg={item.bg}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <ActionButton
                variant="outlined"
                sx={{
                  border: "1px solid black",
                  color: "black",
                  padding: "10px",
                  fontSize: "18px",
                }}
              >
                SHOW NOW
              </ActionButton>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <Icon icon="tabler:chevron-left" color="gray" width="24" rotate={2} />
      </Arrow>
    </Container>
  );
};

export default Slider;
