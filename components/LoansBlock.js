import React from "react";
import { Accordion, AccordionHeader, AccordionBody } from "react-components-library";
import { BottomBorder } from "./HowToUse";
import { ContainerForContent } from "./HowToUse";
import { getEvent } from "./LoginAndRegistrationBlock";
import { StepsSlider } from "./StepsSlider";
import { stepsSlider } from "../mocks";

export const LoansBlock = (props) => {
    return (
        <accordionstories___StyledDiv>
            <div>
                <BottomBorder>
                    <Accordion>
                        <AccordionHeader id="block31" getEvent={getEvent}>
                            <ContainerForContent>
                                Онлайн-оформление кредита
                            </ContainerForContent>
                        </AccordionHeader>
                        <AccordionBody>
                            <ContainerForContent>
                                <StepsSlider id="block31" items={stepsSlider['block31']} tabIndex={props.tabIndex} />
                            </ContainerForContent>
                        </AccordionBody>
                    </Accordion>
                </BottomBorder>
            </div>
            <div>
                <BottomBorder>
                    <Accordion>
                        <AccordionHeader id="block32" getEvent={getEvent}>
                            <ContainerForContent>
                                Управление кредитом
                            </ContainerForContent>
                        </AccordionHeader>
                        <AccordionBody>
                            <ContainerForContent>
                                <StepsSlider id="block32" items={stepsSlider['block32']} tabIndex={props.tabIndex} />
                            </ContainerForContent>
                        </AccordionBody>
                    </Accordion>
                </BottomBorder>
            </div>
        </accordionstories___StyledDiv>
    );
};

