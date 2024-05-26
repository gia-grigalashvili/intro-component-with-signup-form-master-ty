import { useState } from "react";
import styled from "styled-components";

interface InputsType {
  FirstName: string;
  LastName: string;
  email: string;
  password: string;
}
interface ErrorType {
  FirstName: boolean;
  LastName: boolean;
  email: boolean;
  password: boolean;
}
function Inputs() {
  const [inputvalue, setinputvalue] = useState<InputsType>({
    FirstName: "",
    LastName: "",
    email: "",
    password: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    // name == "FirstName" && setError.FirstName(false);
    // name == "LastName" && setError.LastName(false);
    // name == "email" && setError.email(false);
    // name == "password" && setError.password(false);
    setinputvalue({
      ...inputvalue,
      [name]: value,
    });
  };
  const handlesumbit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newErrorState: ErrorType = {
      FirstName: !inputvalue.FirstName,
      LastName: !inputvalue.LastName,
      email: !inputvalue.email,
      password: !inputvalue.password,
    };

    setError(newErrorState);
  };

  const [error, setError] = useState<ErrorType>({
    FirstName: false,
    LastName: false,
    email: false,
    password: false,
  });

  return (
    <MainInputs>
      <div className="box">
        <p>
          Try it free 7 days <span> then $20/mo. thereafter</span>
        </p>
      </div>

      <StyledForm onSubmit={handlesumbit}>
        <StyledInput
          name="FirstName"
          hasError={error.FirstName}
          value={inputvalue.FirstName}
          placeholder="First Name"
          onChange={handleChange}
        />
        {error.FirstName && (
          <span className="error">Please enter your first name.</span>
        )}

        <StyledInput
          name="LastName"
          hasError={error.LastName}
          value={inputvalue.LastName}
          placeholder="Last Name"
          onChange={handleChange}
        />
        {error.LastName && (
          <span className="error">Please enter your first name.</span>
        )}
        <StyledInput
          name="email"
          value={inputvalue.email}
          hasError={error.email}
          placeholder="Email "
          onChange={handleChange}
        />
        {error.email && (
          <span className="error">Please enter your first name.</span>
        )}
        <StyledInput
          name="password"
          type="password"
          hasError={error.password}
          value={inputvalue.password}
          placeholder="Password"
          onChange={handleChange}
        />
        {error.password && (
          <span className="error">Please enter your first name.</span>
        )}
        <button type="submit">
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
  .error {
    all: unset;
    color: #ff7979;
    text-align: right;
    font-family: Poppins;
    font-size: 11px;
    font-style: italic;
    font-weight: 500;
    line-height: normal;
    margin-top: -16px;
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
  width: 327px;
  box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.15);
  @media (min-width: 1440px) {
    padding: 70px;
    max-width: 540px;
    width: 540px;
  }
  button {
    padding: 18px;
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
const StyledInput = styled.input<{ hasError: boolean }>`
  border-radius: 5px;
  border: 1px solid ${(props) => (props.hasError ? "red" : "#DEDEDE")};
  padding: 19px;
  background: #fff;
  background-image: ${(props) =>
    props.hasError ? "url(/public/images/icon-error.svg)" : "none"};
  background-repeat: no-repeat;
  background-position: right 10px center;

  @media (min-width: 1440px) {
    width: 400px;
  }
`;
export default Inputs;
