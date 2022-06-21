import React from "react";
import styled from "styled-components";
import { LoginAndRegistrationBlock } from "./LoginAndRegistrationBlock";
import { AccountTransactionsBlock } from "./AccountTransactionsBlock";
import { LoansBlock } from "./LoansBlock";
import { CreditCardBlock } from "./CreditCardBlock";
import { DebitCardBlock } from "./DebitCardBlock";
import { DepositsAndInversBlock } from "./DepositsAndInversBlock";
import { PaymentsAndTransfersBlock } from "./PaymentsAndTransfersBlock";
import { ConnectionWithBankBlock } from "./ConnectionWithBankBlock";
import { OverdraftBlock } from "./OverdraftBlock";

export const ContentBlockHowToUse = (props) => {

    return (
        <>
            <Container selected={props.state.tabIndex === 1 ? true : false}>
                <LoginAndRegistrationBlock setState={props.setState} state={props.state}/>
            </Container>
            <Container selected={props.state.tabIndex === 2 ? true : false}>
                <AccountTransactionsBlock setState={props.setState} state={props.state}/>
            </Container>
            <Container selected={props.state.tabIndex === 3 ? true : false}>
                <LoansBlock/>
            </Container>
            <Container selected={props.state.tabIndex === 4 ? true : false}>
                <CreditCardBlock/>
            </Container>
            <Container selected={props.state.tabIndex === 5 ? true : false}>
                <DebitCardBlock/>
            </Container>
            <Container selected={props.state.tabIndex === 6 ? true : false}>
                <DepositsAndInversBlock/>
            </Container>
            <Container selected={props.state.tabIndex === 7 ? true : false}>
                <PaymentsAndTransfersBlock/>
            </Container>
            <Container selected={props.state.tabIndex === 8 ? true : false}>
                <ConnectionWithBankBlock/>
            </Container>
            <Container selected={props.state.tabIndex === 9}>
                <OverdraftBlock />
            </Container>
        </>
    );
};

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
