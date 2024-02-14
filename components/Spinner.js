import { ClimbingBoxLoader } from "react-spinners";
import styled from "styled-components";

const Wrapper = styled.div`
  ${(props) =>
    props.fullWidth
      ? `
    display: block;
    display: flex;
    justify-content: center;
 `
      : `
 border: 5px solid blue;
 `}
`;

export default function Spinner({ fullWidth }) {
  return (
    <Wrapper fullWidth={fullWidth}>
      <ClimbingBoxLoader color="#4040d9" speedMultiplier={2} />
    </Wrapper>
  );
}
