import React from "react";
import styled from "styled-components";

function Inputs() {
  return (
    <MainInputs>
      <div className="box">
        <p>
          Try it free 7 days <span> then $20/mo. thereafter</span>
        </p>
      </div>
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
    height: 88px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #5e54a4;
    box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.15);
    color: #fff;
    text-align: center;
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px; /* 173.333% */
    letter-spacing: 0.268px;
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
export default Inputs;
