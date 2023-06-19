import styled from "@emotion/styled";

const Container = styled.div`
  height: 30px;
  background: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
`;

const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Order Over 500$</Container>;
};

export default Announcement;
