import React, { useState } from "react";
import { BodyWrapperMain } from "./HowToUse";
import { ItemNum } from "./HowToUse";
import { ItemTitle } from "./HowToUse";
import { StepsBoxWrapper } from "./HowToUse";
import { StepsBox } from "./HowToUse";
import Slider from "react-slick";
import styled from "styled-components";
import { setNewURL } from "./App";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../index.css';

export const StepsSlider = ({ id, tabIndex, items }) => {
    const [state, setState] = useState({
        tabIndex: tabIndex,
        itemIndex: 0,
    });

    const selectVariant = (index, event) => {
        if (event) {
            setNewURL(event.currentTarget.id);
        } else {
            setNewURL(items[index].idCatalog);
        }

        setState({
            tabIndex: tabIndex,
            itemIndex: index,
        });
    };

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (current) => selectVariant(current),
    };

    return (
        <BodyWrapperMain>
            <Slider {...settings} className="how-to-use-slider">
                {items.map((item, index) => (
                    <div key={item.id} className="slider-slide-wrapper">
                        {item.imageTablet && item.imageMobile && (
                            <>
                                <div className="slider-slide slider-slider-mobile slider-slide-high" style={{backgroundImage: `url(${item.imageMobile})`}} />
                                <div className="slider-slide slider-slider-desktop" style={{backgroundImage: `url(${item.imageTablet})`}} />
                            </>
                        )}
                        {item.imageTablet && !item.imageMobile && (
                            <div className='slider-slide slider-slide-high' style={{backgroundImage: `url(${item.imageTablet})`}} />
                        )}
                        <Item>
                            <ItemNum><span>0{index + 1}</span> /0{items.length}</ItemNum>
                            <ItemTitle>
                                <ItemTitleDot/>
                                <ItemTitleText>{item.text}</ItemTitleText>
                            </ItemTitle>
                        </Item>
                    </div>
                ))}
            </Slider>
            <ImgBox id={`${id}-img`} style={{backgroundImage: `url(${items[state.itemIndex].imageTablet})`}} />
            <StepsBoxWrapper>
                <StepsBox>
                    {items.map((item, index) => (
                        <Item key={item.id} id={item.idCatalog} onClick={(event) => selectVariant(index, event)}>
                            <ItemTitle>
                                <ItemTitleDot selected={state.itemIndex === index}/>
                                <ItemTitleText selected={state.itemIndex === index}>{item.text}</ItemTitleText>
                            </ItemTitle>
                        </Item>
                    ))}
                </StepsBox>
            </StepsBoxWrapper>
        </BodyWrapperMain>
    );
};

const ItemTitleText = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: ${(props) => (props.selected ? "#B30064" : "#3C3C44")};
    
    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 24px;
      font-weight: normal;
    }
    
    @media (min-width: 1024px) {
      font-size: 14px;
      line-height: 21px;
      
      &:hover {
        color: ${(props) => (props.selected ? "#B30064" : "#848D94")};
      }
    }
`;

const ItemTitleDot = styled.div`
    display: none;
    position: absolute;
    top: 1px;
    left: -57px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #FFFFFF;
    box-sizing: border-box;
    border: ${(props) => (props.selected ? "6px solid #B30064" : "6px solid #E0E7EF;")};
    
    @media (min-width: 1024px) {
      display: block;
    }
`;

const Item = styled.div`
    position: relative;
    margin-top: 48px;
    margin-left: 44px;
    width: 245px;
    
    &:first-child ${ItemTitleDot} {
        &:before {
            content: '';
            position: absolute;
            left: 2px;
            bottom: 14px;
            height: 15px;
            width: 10px;
            background: #ffffff;
        }
    }
    
    &:last-child ${ItemTitleDot} {
      &:after {
        content: '';
        position: absolute;
        left: 2px;
        top: 14px;
        height: 50px;
        width: 10px;
        background: #ffffff;
      }
    }
    
    @media (min-width: 768px) {
      margin-top: 60px;
      margin-left: 182px;
      width: 404px;
    }
    
    @media (min-width: 1024px) {
      margin: 0;
      width: auto;
      min-height: 42px;
      margin-bottom: 19px;
      
      &:hover {
        cursor: pointer;
      }
    }
`;

const ImgBox = styled.div`
    display: none;
    width: 50%;
    height: 498px;
    outline: none;
    background-position: center;
    background-repeat: no-repeat;
    
    @media (min-width: 1024px) {
      display: block;
    }
`;

