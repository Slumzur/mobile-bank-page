import React from "react";
import { Accordion, AccordionHeader, AccordionBody } from "react-components-library";
import { BottomBorder } from "./HowToUse";
import { ContainerForContent } from "./HowToUse";
import { getEvent } from "./LoginAndRegistrationBlock";
import { StepsSlider } from "./StepsSlider";
import { stepsSlider } from "../mocks";

export const CreditCardBlock = (props) => {
    return (
        <accordionstories___StyledDiv>
            <div>
                <BottomBorder>
                    <Accordion>
                        <AccordionHeader id="block41" getEvent={getEvent}>
                            <ContainerForContent>
                                Онлайн-оформление кредитной карты
                            </ContainerForContent>
                        </AccordionHeader>
                        <AccordionBody>
                            <ContainerForContent>
                                <StepsSlider id="block41" items={stepsSlider['block41']} tabIndex={props.tabIndex} />
                            </ContainerForContent>
                        </AccordionBody>
                    </Accordion>
                </BottomBorder>
            </div>
            <div>
                <BottomBorder>
                    <Accordion>
                        <AccordionHeader id="block42" getEvent={getEvent}>
                            <ContainerForContent>
                                Управление кредитной картой
                            </ContainerForContent>
                        </AccordionHeader>
                        <AccordionBody>
                            <ContainerForContent>
                                <StepsSlider id="block42" items={stepsSlider['block42']} tabIndex={props.tabIndex} />
                            </ContainerForContent>
                        </AccordionBody>
                    </Accordion>
                </BottomBorder>
            </div>
            <div>
                <BottomBorder>
                    <Accordion>
                        <AccordionHeader id="block43" getEvent={getEvent}>
                            <ContainerForContent>
                                Увеличение лимита и пролонгация
                            </ContainerForContent>
                        </AccordionHeader>
                        <AccordionBody>
                            <ContainerForContent>
                                <StepsSlider id="block43" items={stepsSlider['block43']} tabIndex={props.tabIndex} />
                            </ContainerForContent>
                        </AccordionBody>
                    </Accordion>
                </BottomBorder>
            </div>
            <div>
                <BottomBorder>
                    <Accordion>
                        <AccordionHeader id="block44" getEvent={getEvent}>
                            <ContainerForContent>
                                Закрытие кредитной карты
                            </ContainerForContent>
                        </AccordionHeader>
                        <AccordionBody>
                            <ContainerForContent>
                                <StepsSlider id="block44" items={stepsSlider['block44']} tabIndex={props.tabIndex} />
                            </ContainerForContent>
                        </AccordionBody>
                    </Accordion>
                </BottomBorder>
            </div>
        </accordionstories___StyledDiv>
    );
};

