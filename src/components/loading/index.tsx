import styled from "styled-components";

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Spinner = styled.div`
  border: 6px solid rgba(255, 255, 255, 0.3);
  border-top: 6px solid #ffffff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

interface TextProps {
  small?: boolean;
}

const Text = styled.p<TextProps>`
  font-size: ${(props) => (props.small ? "14px" : "40px")};
  color: white;
  margin: 0;
`;

export default function Loading() {
  return (
    <LoadingContainer>
      <Spinner />
      <Text>Loading...</Text>
      <Text small>please wait until we get there</Text>
    </LoadingContainer>
  );
}
