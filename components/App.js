import React from "react";
import { AllBankInThePhone } from "./AllBankInThePhone";
import { HowToStartUsing } from "./HowToStartUsing";
import { HowToUse } from "./HowToUse";
import styled from "styled-components";

export const App = () => {

  return (
      <Wrapper>
          <AllBankInThePhone />
          <HowToStartUsing />
          <HowToUse/>
      </Wrapper>
  );
};

export const setNewURL = (hash) => {
    let topPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    window.location.hash = hash;
    document.documentElement.scrollTop = topPos;
};

const Wrapper = styled.div`
    font-family: 'Roboto', sans-serif;
`;