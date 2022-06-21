import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { TabBarForHowToUse } from "./TabBarForHowToUse";
import { LoginAndRegistrationBlock } from "./LoginAndRegistrationBlock";
import { AccountTransactionsBlock } from "./AccountTransactionsBlock";
import { LoansBlock } from "./LoansBlock";
import { CreditCardBlock } from "./CreditCardBlock";
import { DebitCardBlock } from "./DebitCardBlock";
import { DepositsAndInversBlock } from "./DepositsAndInversBlock";
import { PaymentsAndTransfersBlock } from "./PaymentsAndTransfersBlock";
import { ConnectionWithBankBlock } from "./ConnectionWithBankBlock";
import { OverdraftBlock } from "./OverdraftBlock";
import { InformationBlock } from "./InformationBlock";

export const HowToUse = () => {
    const [state, setState] = useState({
        tabIndex: 1,
    });

  return (
      <Wrapper>
          <Header>Как пользоваться приложением</Header>
          <Subheader>
              Инструкции, которые помогут вам быстрее
              разобраться, как управлять финансами и
              совершать привычные операции с телефона
          </Subheader>
          <TabBarForHowToUse setState={setState} state={state}/>
          <Container selected={state.tabIndex === 1}>
              <LoginAndRegistrationBlock tabIndex={state.tabIndex}/>
          </Container>
          <Container selected={state.tabIndex === 2}>
              <AccountTransactionsBlock tabIndex={state.tabIndex}/>
          </Container>
          <Container selected={state.tabIndex === 3}>
              <LoansBlock tabIndex={state.tabIndex}/>
          </Container>
          <Container selected={state.tabIndex === 4}>
              <CreditCardBlock tabIndex={state.tabIndex}/>
          </Container>
          <Container selected={state.tabIndex === 5}>
              <DebitCardBlock tabIndex={state.tabIndex}/>
          </Container>
          <Container selected={state.tabIndex === 6}>
              <DepositsAndInversBlock tabIndex={state.tabIndex}/>
          </Container>
          <Container selected={state.tabIndex === 7}>
              <PaymentsAndTransfersBlock tabIndex={state.tabIndex}/>
          </Container>
          <Container selected={state.tabIndex === 8}>
              <ConnectionWithBankBlock tabIndex={state.tabIndex}/>
          </Container>
          <Container selected={state.tabIndex === 9}>
              <OverdraftBlock tabIndex={state.tabIndex}/>
          </Container>
        <Container selected={state.tabIndex === 10}>
          <InformationBlock tabIndex={state.tabIndex}/>
        </Container>
      </Wrapper>
  );
};

const Header = styled.div`
    color: #3C3C44;
    font-weight: 900;
    font-size: 24px;
    line-height: 32px;
    margin: 28px 0 16px;
    
    @media (min-width: 768px) {
        margin: 78px 16px 16px;
    }
    
    @media (min-width: 1024px) {
        margin: 80px 0 24px;
    }
    
    @media (min-width: 1366px) {
        margin: 100px 6px 24px;
    }
`;
const Subheader = styled.div`
    font-size: 12px;
    line-height: 20px;
    color: #848D94;
    margin-bottom: 20px;
    
    @media (min-width: 768px) {
        font-size: 14px;
        line-height: 24px;
        margin: 0 16px 32px;
    }
    
    @media (min-width: 1024px) {
        margin: 0 0 40px;
    }
    
    @media (min-width: 1366px) {
        margin: 0 6px 40px;
    }
`;
const Wrapper = styled.div`
`;
const Container = styled.div`
    display: ${(props) => (props.selected ? "flex" : "none")};
    padding-top: 28px;
    flex-direction: column;

    @media (min-width: 768px) {
      margin: 0 16px;
    }

    @media (min-width: 1024px) {
      margin: 0;
      padding-top: 4px;
    }
    
    @media (min-width: 1366px) {
      margin: 6px;
    }
`;
export const ContainerForContent = styled.div`
`;
export const BottomBorder = styled.div`
    border-bottom: 1px solid #E0E7EF;
`;
export const BodyWrapperMain = styled.div`
    margin: 40px 0 24px;
    
    @media (min-width: 768px) {
      margin: 48px 0 80px;
    }
    
    @media (min-width: 1024px) {
      display: flex;
      margin-top: 48px;
      margin-bottom: 32px;
    }
`;
export const ItemNum = styled.div`
    position: absolute;
    left: -43px;
    top: 1px;
    width: 20px;
    font-weight: bold;
    font-size: 12px;
    line-height: 18px;
    color: #8891A0;
    
    span {
      font-size: 16px;
      line-height: 21px;
      color: #B30064;
    }
    
    @media (min-width: 768px) {
      font-size: 15px;
      line-height: 18px;
      
      span {
          font-size: 20px;
          line-height: 21px;
      }
    }
    
    @media (min-width: 1024px) {
      display: none;
    }
`;
export const ItemTitle = styled.div`
`;
export const StepsBoxWrapper = styled.div`
    display: none;
    margin-top: 48px;
    
    @media (min-width: 768px) {
      margin-top: 60px;
    }
    
    @media (min-width: 1024px) {
      display: block;
      width: 50%;
      margin: 0;
    }
`;
export const StepsBox = styled.div`
    padding-left: 59px;
    
    @media (min-width: 768px) {
      padding-left: 206px;
    }
    
    @media (min-width: 1024px) {
      padding-left: 47px;
      border-left: 1px dashed #E0E7EF;
    }
`;