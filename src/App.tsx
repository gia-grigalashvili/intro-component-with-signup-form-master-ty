import styled from "styled-components";
import "./App.css";
import Text from "./components/Text";
function App() {
  return (
    <>
      <Maindiv>
        <Text />
      </Maindiv>
    </>
  );
}

const Maindiv = styled.div`
  display: flex;
`;
export default App;
