import React from "react";
import { Accordion, AccordionHeader, AccordionBody } from "react-components-library";
import { BottomBorder } from "./HowToUse";
import { ContainerForContent } from "./HowToUse";
import { getEvent } from "./LoginAndRegistrationBlock";
import { StepsSlider } from "./StepsSlider";
import { stepsSlider } from "../mocks";

export const PaymentsAndTransfersBlock = (props) => {
    return (
        <accordionstories___StyledDiv>
            <div>
                <BottomBorder>
                    <Accordion>
                        <AccordionHeader id="block71" getEvent={getEvent}>
                            <ContainerForContent>
                                Обзор платежей и переводов
                            </ContainerForContent>
                        </AccordionHeader>
                        <AccordionBody>
                            <ContainerForContent>
                                <StepsSlider id="block71" items={stepsSlider['block71']} tabIndex={props.tabIndex} />
                            </ContainerForContent>
                        </AccordionBody>
                    </Accordion>
                </BottomBorder>
            </div>
            <div>
                <BottomBorder>
                    <Accordion>
                        <AccordionHeader id="block72" getEvent={getEvent}>
                            <ContainerForContent>
                                Переводы по Системе быстрых платежей (СБП)
                            </ContainerForContent>
                        </AccordionHeader>
                        <AccordionBody>
                            <ContainerForContent>
                                <StepsSlider id="block72" items={stepsSlider['block72']} tabIndex={props.tabIndex} />
                            </ContainerForContent>
                        </AccordionBody>
                    </Accordion>
                </BottomBorder>
            </div>
            <div>
                <BottomBorder>
                    <Accordion>
                        <AccordionHeader id="block73" getEvent={getEvent}>
                            <ContainerForContent>
                                Платежи по QR-кодам
                            </ContainerForContent>
                        </AccordionHeader>
                        <AccordionBody>
                            <ContainerForContent>
                                <StepsSlider id="block73" items={stepsSlider['block73']} tabIndex={props.tabIndex} />
                            </ContainerForContent>
                        </AccordionBody>
                    </Accordion>
                </BottomBorder>
            </div>
            <div>
                <BottomBorder>
                    <Accordion>
                        <AccordionHeader id="block74" getEvent={getEvent}>
                            <ContainerForContent>
                                Платежи по категориям
                            </ContainerForContent>
                        </AccordionHeader>
                        <AccordionBody>
                            <ContainerForContent>
                                <StepsSlider id="block74" items={stepsSlider['block74']} tabIndex={props.tabIndex} />
                            </ContainerForContent>
                        </AccordionBody>
                    </Accordion>
                </BottomBorder>
            </div>
            <div>
                <BottomBorder>
                    <Accordion>
                        <AccordionHeader id="block75" getEvent={getEvent}>
                            <ContainerForContent>
                                Автоплатежи
                            </ContainerForContent>
                        </AccordionHeader>
                        <AccordionBody>
                            <ContainerForContent>
                                <StepsSlider id="block75" items={stepsSlider['block75']} tabIndex={props.tabIndex} />
                            </ContainerForContent>
                        </AccordionBody>
                    </Accordion>
                </BottomBorder>
            </div>
        </accordionstories___StyledDiv>
    );
};


