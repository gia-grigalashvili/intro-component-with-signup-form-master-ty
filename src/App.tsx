import styled from "styled-components";
import "./App.css";
import Text from "./components/Text";
import Inputs from "./components/Inputs";
function App() {
  return (
    <>
      <Maindiv>
        <Text />
        <Inputs></Inputs>
      </Maindiv>
    </>
  );
}

const Maindiv = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1440px) {
    flex-direction: row;
    padding: 20px;
  }
`;
export default App;
