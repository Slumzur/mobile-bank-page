import React from "react";
import styled from "styled-components";
import { setNewURL } from "./App";
import $ from 'jquery';

export const TopSliderBar = (props) => {
    const selectVariant = (event, index) => {

        scrollToTab(event);
        setNewURL(event.currentTarget.id);
        setTimeout(() => removeCover(index), 100);

        props.setState({
            ...props.state,
            tabIndex: index,
            itemIndex: 1,
            cover: true,
        });

    };

    const scrollToTab = (e) => {
        let halfWindowWidth = document.documentElement.clientWidth / 2;
        let halfElementWidth = e.target.offsetWidth / 2;
        let leftElementSpace = Math.round(halfWindowWidth - halfElementWidth);

        $(e.target.parentElement).animate({ scrollLeft: e.target.offsetLeft - leftElementSpace});
    };

    const removeCover = (index) => {
        props.setState({
            ...props.state,
            tabIndex: index,
            itemIndex: 1,
            cover: false,
        });
    };

    return (
      <Wrapper id='tabForAllBankInThePhone'>
          <Item
              onClick={(event) => selectVariant(event, 1)}
              selected={props.state.tabIndex === 1 ? true : false}
              id='plitezhi_i_perevodi'
          >Платежи и переводы</Item>
          <Item
              onClick={(event) => selectVariant(event, 2)}
              selected={props.state.tabIndex === 2 ? true : false}
              id='kredit'
          >Кредиты</Item>
          <Item
              onClick={(event) => selectVariant(event, 3)}
              selected={props.state.tabIndex === 3 ? true : false}
              id='kk'
          >Кредитные карты</Item>
          <Item
              onClick={(event) => selectVariant(event, 4)}
              selected={props.state.tabIndex === 4 ? true : false}
              id='debet_karti'
          >Дебетовые карты</Item>
          <Item
              onClick={(event) => selectVariant(event, 5)}
              selected={props.state.tabIndex === 5 ? true : false}
              id='vkladi'
          >Вклады и инвестиции</Item>
          <Item
              onClick={(event) => selectVariant(event, 6)}
              selected={props.state.tabIndex === 6 ? true : false}
              id='svyaz'
          >Связь с банком</Item>
          <Item
              onClick={(event) => selectVariant(event, 7)}
              selected={props.state.tabIndex === 7 ? true : false}
              id='demo'
          >Демо-версия</Item>
          <Item
              onClick={(event) => selectVariant(event, 8)}
              selected={props.state.tabIndex === 8 ? true : false}
              id='personalnie_dannie'
          >Персональные данные</Item>
          <Item
              onClick={(event) => selectVariant(event, 9)}
              selected={props.state.tabIndex === 9 ? true : false}
              id='dokumenti'
          >Документы банковского обслуживания</Item>
          <Item
              onClick={(event) => selectVariant(event, 10)}
              selected={props.state.tabIndex === 10 ? true : false}
              id='overdraft'
          >Овердрафт</Item>
      </Wrapper>
    );
};

const Item = styled.div`
    display: inline-block;
    border: ${(props) => (props.selected ? "none" : "1px solid #CBD6E2")};
    box-sizing: border-box;
    filter: drop-shadow(0px 2px 12px rgba(82, 89, 99, 0.16));
    border-radius: 32px;
    padding: 10px 16px;
    font-size: 12px;
    line-height: 20px;
    margin-right: 8px;
    flex: 0 0 auto;
    cursor: pointer;
    text-decoration: none;
    color: ${(props) => (props.selected ? "#B30064" : "#4B586B")};
    box-shadow: ${(props) => (props.selected ? "0px 2px 12px rgba(82, 89, 99, 0.16)" : "none")};
    
    @media (min-width: 768px) {
        margin-right: 32px;
        font-size: 14px;
        line-height: 24px;
    }
    
    @media (min-width: 1024px) {
        font-size: 12px;
        line-height: 20px;
        margin-right: 20px;
        margin-bottom: 24px;
    }
    
    @media (min-width: 1366px) {
        margin-right: 32px;
        font-size: 14px;
        line-height: 24px;
    }
`;
const Wrapper = styled.div`
    white-space: nowrap;
    overflow-x: auto;
    padding: 12px 0;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;
    scrollbar-width: none;
    
    &::-webkit-scrollbar {
      display: none;
    }
    
    @media (min-width: 768px) {
        padding: 12px 16px;
    }
    
    @media (min-width: 1024px) {
        padding: 12px 0px;
        white-space: normal;
    }
    
    @media (min-width: 1366px) {
        padding: 12px 6px;
    }
`;