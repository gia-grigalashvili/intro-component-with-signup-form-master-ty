import styled from "styled-components";

function Inputs() {
  const handlesumbit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <MainInputs>
      <div className="box">
        <p>
          Try it free 7 days <span> then $20/mo. thereafter</span>
        </p>
      </div>

      <StyledForm onSubmit={handlesumbit}>
        <StyledInput placeholder="First Name" />
        <StyledInput placeholder="Last Name" />
        <StyledInput placeholder="Email Address" />
        <StyledInput placeholder="Password" />
        <button>
          {" "}
          <p>CLAIM YOUR FREE TRIAL</p>
        </button>
      </StyledForm>
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

    @media (min-width: 1440px) {
      width: 540px;
      padding: 0px;
    }
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
  margin-top: 20px;
  flex-direction: column;
  padding: 40px;
  flex-shrink: 0;
  text-align: center;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.15);
  @media (min-width: 1440px) {
    padding: 70px;
  }
  button {
    width: 279px;
    padding: 20px;
    border-radius: 5px;
    background: #38cc8b;
    box-shadow: 0px -4px 0px 0px rgba(0, 0, 0, 0.09) inset;
    color: #fff;
    text-align: center;

    font-size: 15px;

    font-weight: 600;
    border: none;
    letter-spacing: 1px;
    cursor: pointer;
    @media (min-width: 1440px) {
      width: 400px;
    }
  }
`;
const StyledInput = styled.input`
  border-radius: 5px;
  border: 1px solid #dedede;
  padding: 19px;

  background: #fff;
  @media (min-width: 1440px) {
    width: 400px;
  }
`;
export default Inputs;
