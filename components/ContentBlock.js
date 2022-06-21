import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../index.css';
import { setNewURL } from "./App";

export const ContentBlock = ({ setState, state, items }) => {
    const selectVariant = (index, event) => {
        if (event) {
            setNewURL(event.currentTarget.id);
        } else {
            setNewURL(`${items[state.tabIndex - 1].id}&${items[state.tabIndex - 1].items[index - 1].idCatalog}`);
        }
        
        setState({
            ...state,
            itemIndex: index,
        });
    };

    const openSelectedSection = (event) => {
        event.preventDefault();
        setTimeout(() => {
            let url = event.target.hash;
            let hashSighIndex = url.lastIndexOf('#');
            if (hashSighIndex !== -1) {
                // открываем нужный таб
                let idBlock = url.slice(hashSighIndex + 1);
                let tabIndex = idBlock.substr(5, 1);
                let tabBarBlock = document.getElementById('tabBarForHowToUse');
                let tabBarBlockTarget = tabBarBlock.childNodes[tabIndex - 1];
                tabBarBlockTarget.click();

                setTimeout(() => {
                    // скролим к ней
                    document.querySelector('#' + idBlock).scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                }, 500);
            }
        }, 0);
    };

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (current) => selectVariant(current + 1),
    };

    return (
        <>
            {items.map((contentBlock, index) => (
                <Container key={contentBlock.id} selected={state.tabIndex === index + 1} id={`${contentBlock.id}-m`}>
                    <Slider {...settings}>
                        {contentBlock.items.map((item, index) => (
                        <div key={item.id} className='slider-slide-wrapper'>
                            {item.imageTablet && item.imageMobile && (
                                <>
                                  <div className='slider-slide slider-slider-mobile' style={{ backgroundImage: `url(${item.imageMobile})` }} />
                                  <div className='slider-slide slider-slider-desktop' style={{ backgroundImage: `url(${item.imageTablet})` }} />
                                </>
                            )}
                            {item.imageTablet && !item.imageMobile && (
                                <div className='slider-slide' style={{ backgroundImage: `url(${item.imageTablet})` }} />
                            )}
                            <Item>
                                <ItemNum><span>0{index + 1}</span> /0{contentBlock.items.length}</ItemNum>
                                <ItemTitle>
                                    <ItemTitleDot/>
                                    <ItemTitleText>{item.title}</ItemTitleText>
                                </ItemTitle>
                                <ItemDescription>{item.description}</ItemDescription>
                            </Item>
                            <MoreInfoBlock>
                                <Button href={contentBlock.moreLink} onClick={openSelectedSection}>Подробнее</Button>
                                <MoreInfoText>Инструкции, которые помогут разобраться, как пользоваться приложением</MoreInfoText>
                            </MoreInfoBlock>
                        </div>
                        ))}
                    </Slider>
                    <ImgBox id={`${contentBlock.id}-img`} style={{backgroundImage: `url(${contentBlock.items[state.itemIndex - 1]?.imageTablet})`}} />
                    <StepsBoxWrapper>
                        <StepsBox>
                            {contentBlock.items.map((item, index) => (
                                <Item key={item.id} id={`${contentBlock.id}&${item.idCatalog}`} onClick={(event) => selectVariant(index + 1, event)}>
                                    <ItemTitle>
                                        <ItemTitleDot selected={state.itemIndex === index + 1}/>
                                        <ItemTitleText selected={state.itemIndex === index + 1}>{item.title}</ItemTitleText>
                                    </ItemTitle>
                                    <ItemDescription>{item.description}</ItemDescription>
                              </Item>
                            ))}
                        </StepsBox>
                      <MoreInfoBlock>
                          <Button href={contentBlock.moreLink} onClick={openSelectedSection}>Подробнее</Button>
                          <MoreInfoText>Инструкции, которые помогут разобраться, как пользоваться приложением</MoreInfoText>
                      </MoreInfoBlock>
                    </StepsBoxWrapper>
                </Container>
            ))}
        </>
    );
};

const Container = styled.div`
    display: ${(props) => (props.selected ? "flex" : "none")};
    padding-top: 24px;
    flex-direction: column;
    
    @media (min-width: 768px) {
      padding-top: 28px;
    }
    
    @media (min-width: 1024px) {
      padding-top: 44px;
      flex-direction: row;
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
const StepsBoxWrapper = styled.div`
    display: none;
    margin-top: 48px;
    
    @media (min-width: 768px) {
      margin-top: 60px;
    }
    
    @media (min-width: 1024px) {
      display: block;
      width: 50%;
      margin-top: 0;
    }
`;
const StepsBox = styled.div`
    padding-left: 59px;
    
    @media (min-width: 768px) {
      padding-left: 206px;
    }
    
    @media (min-width: 1024px) {
      padding-left: 47px;
      border-left: 1px dashed #E0E7EF;
    }
`;
const ItemTitleText = styled.div`
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: ${(props) => (props.selected ? "#B30064" : "#3C3C44")};
    
    @media (min-width: 768px) {
      font-size: 16px;
      font-weight: normal;
    }
    
    @media (min-width: 1024px) {
      &:hover {
        color: ${(props) => (props.selected ? "#B30064" : "#848D94")};
      }
    }
`;
const ItemTitle = styled.div`
`;
const ItemDescription = styled.div`
    font-size: 12px;
    line-height: 20px;
    color: #848D94;
    max-width: 420px;
    margin-top: 4px;
    margin-bottom: 24px;
    
    @media (min-width: 768px) {
      margin-bottom: 32px;
    }
`;
const ItemTitleDot = styled.div`
    display: none;
    position: absolute;
    top: ${(props) => (props.selected ? "1px" : "4px")};
    left: ${(props) => (props.selected ? "-57px" : "-54px")};
    width: ${(props) => (props.selected ? "20px" : "14px")};
    height: ${(props) => (props.selected ? "20px" : "14px")};
    border-radius: 50%;
    background: ${(props) => (props.selected ? "#FFFFFF" : "#E0E7EF")};
    box-sizing: border-box;
    border: ${(props) => (props.selected ? "6px solid #B30064" : "none")};
    
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
      
      &:hover {
        cursor: pointer;
      }
    }
`;
const ItemNum = styled.div`
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

const MoreInfoBlock = styled.div`
  display: flex;
  
  @media (min-width: 768px) {
    margin-left: 136px;
  }
  
  @media (min-width: 1024px) {
    padding-top: 16px;
    margin-left: -10px;
    align-items: center;
  }
`;
const Button = styled.a`
    padding: 12px 36px;
    width: 148px;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #B30064;
    border: 1px solid rgba(179, 0, 100, 0.4);
    border-radius: 8px;
    box-sizing: border-box;
    text-decoration: none;
    
    &:hover {
      cursor: pointer;
      text-decoration: none;
      color: #B30064;
    }
    
    @media (min-width: 1024px) {
      font-size: 16px;
      padding: 16px 36px;
      width: 159px;
    }
`;
const MoreInfoText = styled.div`
  display: none;
  
  @media (min-width: 1024px) {
    display: block;
    width: 262px;
    font-size: 12px;
    line-height: 20px;
    color: #848D94;
    margin-left: 28px;
  }
`;