import React from "react";
import styled from "styled-components";
import { setNewURL } from "./App";
import $ from 'jquery';

export const TabBarForHowToUse = (props) => {
    const selectVariant = (event, index) => {
        if (document.documentElement.clientWidth < 1024) {
            scrollToTab(event);
        }

        setNewURL(event.currentTarget.id);

        props.setState({
            ...props.state,
            tabIndex: index,
        });

    };

    const scrollToTab = (e) => {
        let halfWindowWidth = document.documentElement.clientWidth / 2;
        let halfElementWidth = e.target.offsetWidth / 2;
        let leftElementSpace = Math.round(halfWindowWidth - halfElementWidth);

        $(e.target.parentElement).animate({ scrollLeft: e.target.offsetLeft - leftElementSpace});
    };

    return (
      <Wrapper id='tabBarForHowToUse'>
          <Item
              id='block1'
              onClick={(event) => selectVariant(event, 1)}
              selected={props.state.tabIndex === 1}
          >Вход и регистрация</Item>
          <Item
              id='block2'
              onClick={(event) => selectVariant(event, 2)}
              selected={props.state.tabIndex === 2}
          >Операции по счету</Item>
          <Item
              id='block3'
              onClick={(event) => selectVariant(event, 3)}
              selected={props.state.tabIndex === 3}
          >Кредиты</Item>
          <Item
              id='block4'
              onClick={(event) => selectVariant(event, 4)}
              selected={props.state.tabIndex === 4}
          >Кредитные карты</Item>
          <Item
              id='block5'
              onClick={(event) => selectVariant(event, 5)}
              selected={props.state.tabIndex === 5}
          >Дебетовые карты</Item>
          <Item
              id='block6'
              onClick={(event) => selectVariant(event, 6)}
              selected={props.state.tabIndex === 6}
          >Вклады и инвестиции</Item>
          <Item
              id='block7'
              onClick={(event) => selectVariant(event, 7)}
              selected={props.state.tabIndex === 7}
          >Платежи и переводы</Item>
          <Item
              id='block8'
              onClick={(event) => selectVariant(event, 8)}
              selected={props.state.tabIndex === 8}
          >Связь с банком</Item>
          <Item
              id='block9'
              onClick={(event) => selectVariant(event, 9)}
              selected={props.state.tabIndex === 9}
          >Овердрафт</Item>
        <Item
          id='block10'
          onClick={(event) => selectVariant(event, 10)}
          selected={props.state.tabIndex === 10}
        >Справки</Item>
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
        margin-right: 24px;
        font-size: 14px;
        line-height: 21px;
    }
    
    @media (min-width: 1024px) {
        margin-bottom: 24px;
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