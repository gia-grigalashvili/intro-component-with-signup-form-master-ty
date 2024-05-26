import styled from "styled-components";

function Inputs() {
  return (
    <MainInputs>
      <div className="box">
        <p>
          Try it free 7 days <span> then $20/mo. thereafter</span>
        </p>
      </div>

      <StyledForm action=""></StyledForm>
    </MainInputs>
  );
}

const MainInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;

  .box {
    width: 327px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
    border-radius: 10px;
    background: #5e54a4;
    box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.15);
    color: #fff;
    text-align: center;

    font-size: 15px;

    font-weight: 700;
  }
  span {
    color: #fff;
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0.268px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  gap: 20px;
  padding: 40px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.15);
`;
export default Inputs;
