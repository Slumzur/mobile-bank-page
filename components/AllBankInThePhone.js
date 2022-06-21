import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { TopSliderBar } from "./TopSliderBar";
import { ContentBlock } from "./ContentBlock";
import { contentBlocks } from "../mocks";

export const AllBankInThePhone = () => {
    const [state, setState] = useState({
        tabIndex: 1,
        itemIndex: 1,
        cover: false,
    });

  return (
      <Wrapper>
          <Header>Весь банк - в телефоне</Header>
          <TopSliderBar setState={setState} state={state} />
          <Cover cover={state.cover}/>
          <ContentBlock setState={setState} state={state} items={contentBlocks} />
      </Wrapper>
  );
};

const Header = styled.div`
    color: #3C3C44;
    font-weight: 900;
    font-size: 24px;
    line-height: 32px;
    margin: 28px 0 20px;
    
    @media (min-width: 768px) {
        margin: 78px 16px 44px;
    }
    
    @media (min-width: 1024px) {
        margin: 78px 0 44px;
    }
    
    @media (min-width: 1366px) {
        margin: 100px 6px 44px;
    }
`;
const Wrapper = styled.div`
`;
const Cover = styled.div`
  display: ${(props) => (props.cover ? "block" : "none")};
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 470px;
  background-color: #FFFFFF;
  
  @media (min-width: 768px) {
    height: 740px;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;