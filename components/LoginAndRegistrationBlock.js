import React from "react";
import styled from "styled-components";
import { Accordion, AccordionHeader, AccordionBody } from "react-components-library";
import { StepsSlider } from "./StepsSlider";
import { BottomBorder } from "./HowToUse";
import { ContainerForContent } from "./HowToUse";
import { setNewURL } from "./App";
import appleIcon from "../img/apple_icon.svg";
import googlePlayIcon from "../img/google_play_icon.svg";
import huaweiIcon from "../img/huawei_icon.svg";
import phoneImg111 from "../img/phone-img-1-1-1.png";
import phoneImg111M from "../img/phone-img-1-1-1M.png";
import { stepsSlider } from "../mocks";

export const LoginAndRegistrationBlock = (props) => {
    return (
        <accordionstories___StyledDiv>
            <div>
                <BottomBorder>
                    <Accordion>
                        <AccordionHeader id="block11" getEvent={getEvent}>
                            <ContainerForContent>
                                Установка мобильного приложения
                            </ContainerForContent>
                        </AccordionHeader>
                        <AccordionBody>
                            <ContainerForContent>
                                <BodyWrapper>
                                    <LeftBox>
                                        <div></div>
                                    </LeftBox>
                                    <RightBox>
                                        <HeaderBox>
                                            <Num>01</Num>
                                            <RedDot/>
                                            <Text>Скачайте мобильное приложение в сервисах App Store / Google Play / App Gallery по ключевому слову «УБРиР» или воспользуйтесь QR-кодом</Text>
                                        </HeaderBox>
                                        <DownloadAppsWrapper>
                                            <DownloadAppsItem href='https://itunes.apple.com/us/app/ubrr-mobile-bank/id787144251' target="_blank">
                                                <DownloadAppsIcon style={{ backgroundImage: `url(${appleIcon})` }} />
                                                <DownloadAppsText>Скачать в <span>App&nbsp;Store</span></DownloadAppsText>
                                            </DownloadAppsItem>
                                            <DownloadAppsItem href='https://play.google.com/store/apps/details?id=cb.ibank' target="_blank">
                                                <DownloadAppsIcon style={{ backgroundImage: `url(${googlePlayIcon})` }} />
                                                <DownloadAppsText>Скачать в <span>Google&nbsp;Play</span></DownloadAppsText>
                                            </DownloadAppsItem>
                                            <DownloadAppsItem href='https://appgallery.huawei.com/?yclid=7366647764986407186#/app/C103215869' target="_blank">
                                                <DownloadAppsIcon style={{ backgroundImage: `url(${huaweiIcon})` }} />
                                                <DownloadAppsText>Скачать в <span>AppGallery</span></DownloadAppsText>
                                            </DownloadAppsItem>
                                        </DownloadAppsWrapper>
                                    </RightBox>
                                </BodyWrapper>
                            </ContainerForContent>
                        </AccordionBody>
                    </Accordion>
                </BottomBorder>
            </div>
            <div>
                <BottomBorder>
                    <Accordion>
                        <AccordionHeader id="block12" getEvent={getEvent}>
                            <ContainerForContent>
                                Активация мобильного приложения
                            </ContainerForContent>
                        </AccordionHeader>
                        <AccordionBody>
                            <ContainerForContent>
                                <StepsSlider items={stepsSlider['block12']} tabIndex={props.tabIndex} />
                            </ContainerForContent>
                        </AccordionBody>
                    </Accordion>
                </BottomBorder>
            </div>
            <div>
                <BottomBorder>
                    <Accordion>
                        <AccordionHeader id="block13" getEvent={getEvent}>
                            <ContainerForContent>
                                Обновление мобильного приложения
                            </ContainerForContent>
                        </AccordionHeader>
                        <AccordionBody>
                            <ContainerForContent>
                                <StepsSlider items={stepsSlider['block13']} tabIndex={props.tabIndex} />
                            </ContainerForContent>
                        </AccordionBody>
                    </Accordion>
                </BottomBorder>
            </div>
            <div>
                <BottomBorder>
                    <Accordion>
                        <AccordionHeader id="block14" getEvent={getEvent}>
                            <ContainerForContent>
                                Восстановление доступа
                            </ContainerForContent>
                        </AccordionHeader>
                        <AccordionBody>
                            <ContainerForContent>
                                <StepsSlider items={stepsSlider['block14']} tabIndex={props.tabIndex} />
                            </ContainerForContent>
                        </AccordionBody>
                    </Accordion>
                </BottomBorder>
            </div>
        </accordionstories___StyledDiv>
    );
};

export const getEvent = (e) => {
    setNewURL(e.currentTarget.id);
};

export const BodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    
    @media (min-width: 1024px) {
      flex-direction: row;
      align-items: end;
      margin-top: 48px;
    }
`;
const LeftBox = styled.div`
  margin-bottom: 28px;
  
  & div {
    width: 320px;
    height: 240px;
    margin: auto;
    background-image: url(${phoneImg111M});
    background-position: center;
  }
  
  @media (min-width: 768px) {
    margin-bottom: 33px;
    
    & div {
        width: 412px;
        height: 498px;
        background-image: url(${phoneImg111});
    }
  }
  
  @media (min-width: 1024px) {
    width: 50%;
  }
`;
export const RightBox = styled.div`
  margin-bottom: 16px;
  
  @media (min-width: 768px) {
    width: 450px;
    margin-bottom: 104px;
  }
  
  @media (min-width: 1024px) {
    width: 50%;
  }
`;
export const HeaderBox = styled.div`
  display: flex;
  margin-bottom: 16px;
`;
export const Num = styled.div`
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #B30064;
    margin-right: 22px;
    
    @media (min-width: 768px) {
      margin-right: 24px;
      font-size: 20px;
    }
    
    @media (min-width: 1024px) {
      display: none;
    }
`;
export const Text = styled.div`
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.4px;
    color: #3C3C44;
    
    @media (min-width: 768px) {
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.1px;
    }
    
    @media (min-width: 1024px) {
      font-size: 14px;
      line-height: 21px;
    }
`;
const DownloadAppsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
    margin-left: 42px;
  }
`;
const DownloadAppsItem = styled.a`
  display: flex;
  background: #F1F4F8;
  border-radius: 8px;
  padding: 9px 18px;
  box-sizing: border-box;
  width: 130px;
  margin-left: 42px;
  margin-bottom: 8px;
  text-decoration: none;
    
    &:hover {
      text-decoration: none;
    }
  
  @media (min-width: 768px) {
    margin: 0 12px 0 0;
  }
`;
const DownloadAppsIcon = styled.div`
    width: 19px;
    height: 19px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    flex-shrink: 0;
    margin-right: 12px;
    margin-top: 2px;
`;
const DownloadAppsText = styled.div`
  font-size: 8px;
  line-height: 8px;
  color: #3C3C44;
  
  & span {
    font-size: 11px;
    line-height: 21px;
    font-weight: 600;
  }
  
  @media (min-width: 1024px) {
    width: 380px;
  }
  
  @media (min-width: 1366px) {
    width: 420px;
  }
`;
export const RedDot = styled.div`
    display: none;
    
    @media (min-width: 1024px) {
        display: block;
        flex-shrink: 0;
        margin-right: 24px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #FFFFFF;
        border: 6px solid #B30064;
        box-sizing: border-box;
    }
`;