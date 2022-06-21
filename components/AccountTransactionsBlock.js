import React from "react";
import { Accordion, AccordionHeader, AccordionBody } from "react-components-library";
import { getEvent } from "./LoginAndRegistrationBlock";
import { BottomBorder } from "./HowToUse";
import { ContainerForContent } from "./HowToUse";
import { StepsSlider } from "./StepsSlider";
import { stepsSlider } from "../mocks";

export const AccountTransactionsBlock = (props) => {

    return (
        <accordionstories___StyledDiv>
            <div>
                <BottomBorder>
                    <Accordion>
                        <AccordionHeader id="block21" getEvent={getEvent}>
                            <ContainerForContent>
                                Пополнение счета
                            </ContainerForContent>
                        </AccordionHeader>
                        <AccordionBody>
                            <ContainerForContent>
                                <StepsSlider id="block21" items={stepsSlider['block21']} tabIndex={props.tabIndex} />
                            </ContainerForContent>
                        </AccordionBody>
                    </Accordion>
                </BottomBorder>
            </div>
            <div>
                <BottomBorder>
                    <Accordion>
                        <AccordionHeader id="block22" getEvent={getEvent}>
                            <ContainerForContent>
                                Управление счетом
                            </ContainerForContent>
                        </AccordionHeader>
                        <AccordionBody>
                            <ContainerForContent>
                                <StepsSlider id="block22" items={stepsSlider['block22']} tabIndex={props.tabIndex} />
                            </ContainerForContent>
                        </AccordionBody>
                    </Accordion>
                </BottomBorder>
            </div>
            <div>
                <BottomBorder>
                    <Accordion>
                        <AccordionHeader id={'block23'} getEvent={getEvent}>
                            <ContainerForContent>
                                Выписка по счету
                            </ContainerForContent>
                        </AccordionHeader>
                        <AccordionBody>
                            <ContainerForContent>
                                <StepsSlider items={stepsSlider['block23']} tabIndex={props.tabIndex} />
                            </ContainerForContent>
                        </AccordionBody>
                    </Accordion>
                </BottomBorder>
            </div>
            <div>
                <BottomBorder>
                    <Accordion>
                        <AccordionHeader id={'block24'} getEvent={getEvent}>
                            <ContainerForContent>
                                Справка о доступном остатке
                            </ContainerForContent>
                        </AccordionHeader>
                        <AccordionBody>
                            <ContainerForContent>
                                <StepsSlider items={stepsSlider['block24']} tabIndex={props.tabIndex} />
                            </ContainerForContent>
                        </AccordionBody>
                    </Accordion>
                </BottomBorder>
            </div>
        </accordionstories___StyledDiv>
    );
};

