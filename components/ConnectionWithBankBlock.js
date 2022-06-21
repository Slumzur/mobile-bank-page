import React from "react";
import styled from "styled-components";
import { Accordion, AccordionHeader, AccordionBody } from "react-components-library";
import { BodyWrapper, getEvent } from "./LoginAndRegistrationBlock";
import { RightBox } from "./LoginAndRegistrationBlock";
import { HeaderBox } from "./LoginAndRegistrationBlock";
import { Num } from "./LoginAndRegistrationBlock";
import { Text } from "./LoginAndRegistrationBlock";
import { RedDot } from "./LoginAndRegistrationBlock";
import { BottomBorder } from "./HowToUse";
import { ContainerForContent } from "./HowToUse";
import { StepsSlider } from "./StepsSlider";
import phoneImg851M from "../img/phone-img-8-5-1M.png";
import phoneImg851 from "../img/phone-img-8-5-1.png";
import { stepsSlider } from "../mocks";

export const ConnectionWithBankBlock = (props) => {
    return (
        <accordionstories___StyledDiv>
            <div>
                <BottomBorder>
                    <Accordion>
                        <AccordionHeader id="block81" getEvent={getEvent}>
                            <ContainerForContent>
                                Настройки уведомлений
                            </ContainerForContent>
                        </AccordionHeader>
                        <AccordionBody>
                            <ContainerForContent>
                                <StepsSlider id="block81" items={stepsSlider['block81']} tabIndex={props.tabIndex} />
                            </ContainerForContent>
                        </AccordionBody>
                    </Accordion>
                </BottomBorder>
            </div>
            <div>
                <BottomBorder>
                    <Accordion>
                        <AccordionHeader id="block82" getEvent={getEvent}>
                            <ContainerForContent>
                                Онлайн-чат и звонок в банк
                            </ContainerForContent>
                        </AccordionHeader>
                        <AccordionBody>
                            <ContainerForContent>
                                <StepsSlider id="block82" items={stepsSlider['block82']} tabIndex={props.tabIndex} />
                            </ContainerForContent>
                        </AccordionBody>
                    </Accordion>
                </BottomBorder>
            </div>
            <div>
                <BottomBorder>
                    <Accordion>
                        <AccordionHeader id="block83" getEvent={getEvent}>
                            <ContainerForContent>
                                Уведомления и предложения от банка
                            </ContainerForContent>
                        </AccordionHeader>
                        <AccordionBody>
                            <ContainerForContent>
                                <StepsSlider id="block83" items={stepsSlider['block83']} tabIndex={props.tabIndex} />
                            </ContainerForContent>
                        </AccordionBody>
                    </Accordion>
                </BottomBorder>
            </div>
            <div>
                <BottomBorder>
                    <Accordion>
                        <AccordionHeader id="block84" getEvent={getEvent}>
                            <ContainerForContent>
                                Офисы и банкоматы
                            </ContainerForContent>
                        </AccordionHeader>
                        <AccordionBody>
                            <ContainerForContent>
                                <StepsSlider id="block84" items={stepsSlider['block84']} tabIndex={props.tabIndex} />
                            </ContainerForContent>
                        </AccordionBody>
                    </Accordion>
                </BottomBorder>
            </div>
            <div>
                <BottomBorder>
                    <Accordion>
                        <AccordionHeader id="block85" getEvent={getEvent}>
                            <ContainerForContent>
                                Курсы валют
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
                                            <Text>Смотрите актуальные курсы валют</Text>
                                        </HeaderBox>
                                    </RightBox>
                                </BodyWrapper>
                            </ContainerForContent>
                        </AccordionBody>
                    </Accordion>
                </BottomBorder>
            </div>
        </accordionstories___StyledDiv>
    );
};

const LeftBox = styled.div`
  margin-bottom: 28px;
  
  & div {
    width: 320px;
    height: 240px;
    margin: auto;
    background-image: url(${phoneImg851M});
    background-position: center;
  }
  
  @media (min-width: 768px) {
    margin-bottom: 33px;
    
    & div {
        width: 412px;
        height: 498px;
        background-image: url(${phoneImg851});
    }
  }
  
  @media (min-width: 1024px) {
    width: 50%;
  }
`;