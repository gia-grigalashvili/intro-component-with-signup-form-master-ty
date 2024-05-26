import styled from "styled-components";
function Text() {
  return (
    <Textdiv>
      <h1>Learn to code by watching others</h1>
      <p>
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.{" "}
      </p>
    </Textdiv>
  );
}
const Textdiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  gap: 16px;
  h1 {
    color: #fff;
    text-align: center;
    font-family: Poppins;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px; /* 128.571% */
    letter-spacing: -0.292px;
  }
  p {
    color: #fff;
    text-align: center;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px; /* 162.5% */
  }
`;
export default Text;
